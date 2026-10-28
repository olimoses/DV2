// Shared look for every chart, so all specs stay consistent and readable.
const theme = {
  background: null,
  font: "Bricolage Grotesque, Helvetica, Arial, sans-serif",
  view: { stroke: null },
  axis: {
    labelFontSize: 12,
    titleFontSize: 12,
    titleFontWeight: 600,
    labelColor: "#4A5650",
    titleColor: "#1E2B26",
    gridColor: "#E4E7E2",
    domainColor: "#C3C9C4",
    tickColor: "#C3C9C4"
  },
  legend: {
    labelFontSize: 12,
    titleFontSize: 12,
    titleFontWeight: 600,
    labelColor: "#1E2B26",
    titleColor: "#1E2B26"
  },
  text: { font: "Bricolage Grotesque, Helvetica, Arial, sans-serif" }
};

const embedOptions = { actions: false, config: theme };

// Each entry: the id of a <div> on the page and the spec file that goes in it.
// Add one line here every time we add a chart.
const charts = [
  ["#hero_calendar", "specs/hero_calendar.vg.json"],
  ["#overshoot_map", "specs/overshoot_map.vg.json"],
  ["#food_priorities_waffle", "specs/food_priorities_waffle.vg.json"],
  ["#practices_slope", "specs/practices_slope.vg.json"],
  ["#climate_actions_bar", "specs/climate_actions_bar.vg.json"],
  ["#greenwashing_mosaic", "specs/greenwashing_mosaic.vg.json"],
  ["#organic_symbol_map", "specs/organic_symbol_map.vg.json"],
  ["#clothing_sankey", "specs/clothing_sankey.vg.json"],
  ["#clothing_flow_map", "specs/clothing_flow_map.vg.json"],
  ["#state_recycling_map", "specs/state_recycling_map.vg.json"],
  ["#recycling_heatmap", "specs/recycling_heatmap.vg.json"],
  ["#secondhand_trends_line", "specs/secondhand_trends_line.vg.json"]
];

charts.forEach(([el, spec]) => {
  vegaEmbed(el, spec, embedOptions).catch(console.error);
});
