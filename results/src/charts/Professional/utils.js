export const generateColumnChartConfig = (data, ylabel, xlabel = "Count") => {
  return {
    data: data,
    xField: ylabel.toLowerCase(),
    yField: xlabel.toLowerCase(),
    label: {
      position: "middle",
      style: {
        fontSize: 24,
        fill: "#00000",
        opacity: 1,
      },
    },
    xAxis: {
      label: {
        autoHide: true,
        autoRotate: false,
      },
    },
    minColumnWidth: 100,
    maxColumnWidth: 100,
    meta: {
      [ylabel.toLowerCase()]: { alias: ylabel },
      [xlabel.toLowerCase()]: { alias: xlabel },
    },
  };
};
