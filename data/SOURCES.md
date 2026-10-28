# Data sources and processing notes
(Paste the exact URL from your bookmarks next to each source before submitting.)

| File | Source | Year | Processing |
|---|---|---|---|
| overshoot_days_2026.csv | Global Footprint Network, Country Overshoot Days | 2026 | Dates converted to day-of-year; ISO codes added for map joining; names shortened (e.g. "Russian Federation" -> "Russia"). Only countries that overshoot are listed. |
| organic_area_2023.csv | Our World in Data, Organic agricultural area (FAO, 2025) | 2023 | Countries only (regions removed, World total = 98.85M ha); organic share = organic / agricultural area. Country centroids from Google DSPL countries.csv. |
| organic_area_australia_trend.csv | As above | 2009-2023 | Australia only, for annotation. |
| used_clothing_exports_2025.csv | UN Comtrade, Australia exports, HS 6309 (worn clothing) | 2025 | "World" row removed (net weight missing); kg -> tonnes; share of total added; centroids added. |
| clothing_end_of_life_2018_19.csv | Australian Fashion Council et al., National Clothing Product Stewardship Scheme - Clothing Data Report (v1, May 2022), Figure A, p.3 | 2018-19 | Read from Figure A. Landfill split: 27,000 t from charity (stated in figure) + 200,000 t direct = 227,000 t total. Informal swap (20,000 t) left out as it returns to use. |
| state_recycling_2024_25.csv, state_recycling_timeseries.csv | DCCEEW, National Waste and Resource Recovery Database 2026 | 2006-07 to 2024-25 | "Category" rows only (avoids double counting "Type" rows), headline scope only. Recycling rate = tonnes with fate "Recycling" / all tonnes. |
| recycling_by_state_material_2024_25.csv | As above | 2024-25 | Same method, 7 everyday material categories. |
| pwc_*.csv | PwC, Voice of the Consumer Survey 2025 (Australia, n=1,002) | Jan-Feb 2025 | Transcribed: food priorities p.5 (sums to 101% due to rounding); sustainable practices p.12; climate actions p.11 (base: respondents worried about climate change). |
| accc_greenwashing_sweep.csv | ACCC, Greenwashing by businesses in Australia (March 2023) | Sweep Oct 2022 | Transcribed from p.1-2; 141 of 247 = 57%. |
| google_trends_*.csv | Google Trends, Australia, past 5 years | Oct 2021-Oct 2026 | Reshaped to long format. Values are relative interest (100 = peak), not search counts. Last month may be partial. |
| world-110m.json | vega-datasets (Natural Earth) | - | Unchanged. |
| australia_states.json | rowanhogan/australian-states (GitHub, ABS boundaries) | - | Simplified and converted to TopoJSON with mapshaper. |
