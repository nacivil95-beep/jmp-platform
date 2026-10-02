# -*- coding: utf-8 -*-
"""계획선 DXF -> GeoJSON(WGS84) 변환 (선 + 글자 라벨)
사용:  python convert_plan.py 입력.dxf [출력폴더] [EPSG코드]
  예)  python convert_plan.py 데이터관리\\계획참조\\계획선_2026-10.dxf assets 5174
만들어지는 파일 (출력폴더 안):
  plan-lines_5174.geojson   : 계획선(선) - 빨간 계획선(plan), 가분할선, 법면 외곽선 포함
  plan-ticks_5174.geojson   : 법면 빗금(짧은 선들), 측점 눈금 (확대했을 때만 표시)
  plan-labels_5174.geojson  : 블록명/도로명/측점/구조물 설명 같은 글자
기본 좌표계: EPSG:5174 (구 TM 중부원점)
"""
import os, sys, json, math, ezdxf
from ezdxf import path as ezpath
from pyproj import Transformer

SRC = sys.argv[1] if len(sys.argv) > 1 else "계획선.dxf"
OUTDIR = sys.argv[2] if len(sys.argv) > 2 else "."
EPSG = int(sys.argv[3]) if len(sys.argv) > 3 else 5174
os.makedirs(OUTDIR, exist_ok=True)

# ── 지도에 올릴 선 레이어 (치수/측점 눈금/사면 표시선 등은 제외)
KEEP = ["지구계선", "블록경계선", "블록중심선", "도로중심선", "선형중심선", "진입도로",
        "갈탄천", "개거", "배수관", "0-배수계획", "도수로", "횡단구조물",
        "PC암거", "기존암거", "보강토", "gabion", "사면", "사면우수", "SLOPE", "면벽",
        "plan", "l_가분할선", "집수정", "SLOPELINE"]

# ── 지도에 올릴 글자 레이어 → 종류
#   name : 블록명·도로명·법면명 등 (확대 16단계부터 표시)
#   major: 큰 도로명 (15단계부터)
#   note : 옹벽/구조물 설명 (17단계부터)
#   chain: 측점 No.0, No.1 ... (18단계부터)
# ※ RODDGNTXT(계획고 숫자 1450개)는 너무 빽빽해서 제외
LABEL_KINDS = {
    "OBJNAMETXT": "name", "0-관로제원": "major",
    "gabion": "note", "보강토": "note", "사면우수": "note",
    "ROADCHAINTXT": "chain", "BLKCHAINTXT": "chain", "선형중심선": "chain", "갈탄천": "chain",
}

tf = Transformer.from_crs(f"EPSG:{EPSG}", "EPSG:4326", always_xy=True)
doc = ezdxf.readfile(SRC)
msp = doc.modelspace()

# ───────────── 1) 선 ─────────────
# ※ 중요: 빨간 계획선(plan)·가분할선은 DXF 안에서 "블록(INSERT)" 안에 들어 있어서
#   블록을 풀어서(virtual_entities) 안쪽 도형까지 읽어야 함.
GEOM_TYPES = ("LINE", "LWPOLYLINE", "POLYLINE", "ARC", "CIRCLE")

def iter_geoms(layout, parent_layer=None, depth=0):
    for e in layout:
        t = e.dxftype()
        if t == "INSERT" and depth < 3:
            try:
                sub = list(e.virtual_entities())
            except Exception:
                continue
            yield from iter_geoms(sub, e.dxf.layer, depth + 1)
        elif t in GEOM_TYPES:
            lay = e.dxf.layer
            if lay == "0" and parent_layer:   # 레이어 0 = 블록이 놓인 레이어를 따라감
                lay = parent_layer
            yield lay, e

def line_len(e):
    if e.dxftype() == "LINE":
        return math.dist((e.dxf.start.x, e.dxf.start.y), (e.dxf.end.x, e.dxf.end.y))
    return 1e9

lines = {k: [] for k in KEEP}
ticks = {"SLOPELINE": [], "RODCHAIN": []}   # 법면 빗금 / 측점 눈금 (아주 많아서 따로 저장)
for lay, e in iter_geoms(msp):
    group = None
    if lay == "SLOPELINE" and e.dxftype() == "LINE" and line_len(e) < 5:
        group = ticks["SLOPELINE"]            # 짧은 선 = 법면 빗금
    elif lay == "RODCHAIN":
        group = ticks["RODCHAIN"]
    elif lay in lines:
        group = lines[lay]
    if group is None:
        continue
    try:
        p = ezpath.make_path(e)
    except Exception:
        continue
    pts = list(p.flattening(distance=0.3))  # 곡선은 0.3m 오차로 직선화
    if len(pts) < 2:
        continue
    group.append([[round(x, 6), round(y, 6)]
                  for x, y in (tf.transform(v.x, v.y) for v in pts)])

def to_features(d):
    return [{"type": "Feature", "properties": {"layer": lay},
             "geometry": {"type": "MultiLineString", "coordinates": segs}}
            for lay, segs in d.items() if segs]

line_features = to_features(lines)
tick_features = to_features(ticks)

# ───────────── 2) 글자 ─────────────
def clean(t):
    return (t.replace("%%c", "Ø").replace("%%C", "Ø").replace("%%d", "°")
             .replace("%%D", "°").replace("%%p", "±").replace("%%P", "±").strip())

def text_width(t, h):  # 글자 폭 대략 추정 (한글은 넓게, 영문/숫자는 좁게)
    return sum(h * (1.0 if ord(c) > 127 else 0.6) for c in t)

label_features = []
seen = set()
for e in msp.query("TEXT"):
    kind = LABEL_KINDS.get(e.dxf.layer)
    if not kind:
        continue
    text = clean(e.dxf.text)
    if not text:
        continue
    h = e.dxf.height
    rot = e.dxf.get("rotation", 0.0)
    ha, va = e.dxf.get("halign", 0), e.dxf.get("valign", 0)
    if (ha, va) != (0, 0) and e.dxf.hasattr("align_point"):
        ax, ay = e.dxf.align_point.x, e.dxf.align_point.y
    else:
        ax, ay = e.dxf.insert.x, e.dxf.insert.y
    # 글자의 "정중앙" 위치 계산 (CAD는 왼쪽 아래 기준인 글자가 많아서 보정)
    w = text_width(text, h)
    dx = 0.0 if ha in (1, 4) else (-w / 2 if ha == 2 else w / 2)
    dy = 0.0 if va == 2 else (-h / 2 if va == 3 else h / 2)
    r = math.radians(rot)
    cx = ax + dx * math.cos(r) - dy * math.sin(r)
    cy = ay + dx * math.sin(r) + dy * math.cos(r)
    lon, lat = tf.transform(cx, cy)
    # 글자가 거꾸로 보이지 않게 (90~270도면 180도 돌림) → 화면(CSS)용 각도로 변환
    a = rot % 360
    if 90 < a <= 270:
        a -= 180
    elif a > 270:
        a -= 360
    css_deg = round(-a, 1) + 0.0  # (-90 ~ 90도 범위로 정리)
    key = (text, round(lon, 5), round(lat, 5))
    if key in seen:  # 같은 자리에 겹쳐 있는 똑같은 글자는 한 번만
        continue
    seen.add(key)
    label_features.append({"type": "Feature",
        "properties": {"t": text, "k": kind, "r": css_deg},
        "geometry": {"type": "Point", "coordinates": [round(lon, 6), round(lat, 6)]}})

def dump(name, feats):
    path = os.path.join(OUTDIR, name)
    with open(path, "w", encoding="utf-8") as f:
        json.dump({"type": "FeatureCollection", "features": feats}, f,
                  ensure_ascii=False, separators=(",", ":"))
    print(f"  {path}  ({os.path.getsize(path)//1024} KB)")

print(f"EPSG:{EPSG} 변환 완료")
dump(f"plan-lines_{EPSG}.geojson", line_features)
dump(f"plan-ticks_{EPSG}.geojson", tick_features)
dump(f"plan-labels_{EPSG}.geojson", label_features)
print("  선 레이어:", len(line_features), "개 / 빗금·눈금:", sum(len(f["geometry"]["coordinates"]) for f in tick_features), "개 / 글자:", len(label_features), "개")
