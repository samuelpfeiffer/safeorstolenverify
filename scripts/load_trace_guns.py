"""Load The Trace Missing Pieces CSV into public.trace_gun_records.
Usage: SUPABASE_URL=... SUPABASE_SERVICE_ROLE_KEY=... python3 scripts/load_trace_guns.py
"""
import csv, os, urllib.request, io
from supabase import create_client

URL = "https://missing-pieces.s3.amazonaws.com/missing_pieces_data_11-20-2017.csv"
sb = create_client(os.environ["SUPABASE_URL"], os.environ["SUPABASE_SERVICE_ROLE_KEY"])

print("downloading")
raw = urllib.request.urlopen(URL, timeout=120).read().decode("utf-8-sig", errors="replace")
rows = []
for r in csv.DictReader(io.StringIO(raw)):
    serial = (r.get("SERIAL NUMBER") or "").strip().upper()
    if not serial:
        continue
    rows.append({
        "serial": serial,
        "make": r.get("MAKE") or None,
        "model": r.get("MODEL") or None,
        "caliber": r.get("CALIBER") or None,
        "state": r.get("STATE") or None,
        "agency": r.get("AGENCY") or None,
        "status": r.get("STATUS") or None,
        "offense": r.get("OFFENSE") or None,
        "record_date": r.get("DATE") or None,
        "case_number": r.get("CASE NUMBER") or None,
    })
print("rows", len(rows))
for i in range(0, len(rows), 1000):
    sb.table("trace_gun_records").insert(rows[i:i+1000]).execute()
    print("inserted", i+len(rows[i:i+1000]))
print("done")
