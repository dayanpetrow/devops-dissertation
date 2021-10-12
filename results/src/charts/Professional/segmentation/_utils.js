// bar chart config
export const generateGroupedBarChartConfig = (data) => ({
  height: 300,
  autoFit: true,
  data: data,
  isStack: true,
  xField: "count",
  yField: "label",
  seriesField: "group",
  maxBarWidth: 30,
  intervalPadding: 10,
  barBackground: { style: { fill: "rgba(0,0,0,0.1)" } },
  label: {
    position: "middle",
  },
  legend: {
    position: "top",
  },
  barStyle: {
    radius: [2, 2, 0, 0],
  },
});
