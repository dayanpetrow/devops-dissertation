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
    meta: {
      [ylabel.toLowerCase()]: { alias: ylabel },
      [xlabel.toLowerCase()]: { alias: xlabel },
    },
  };
};

export const generatePieChartConfig = (data) => {
  return {
    appendPadding: 20,
    data: data,
    angleField: "count",
    colorField: "label",
    radius: 1,
    innerRadius: 0.45,
    label: {
      type: "inner",
      offset: "-50%",
      style: { textAlign: "center" },
      autoRotate: false,
      content: function content(_ref) {
        return _ref.count === 0 ? "" : _ref.count;
      },
      // content: function content(_ref) {
      //   var percent = _ref.percent;
      //   return _ref.count === 0
      //     ? ""
      //     : `${"".concat((percent * 100).toFixed(0), "%")} (${_ref.count})`;
      // },
    },
    legend: {
      itemSpacing: 16,
      layout: "horizontal",
      position: "top",
    },
    interactions: [{ type: "element-active" }],
    statistic: {
      title: false,
      content: {
        style: {
          fontSize: 16,
          whiteSpace: "pre-wrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
        },
        content: `
Responses: ${data.reduce((a, b) => a + b.count, 0)}
Score: ${data.reduce((a, b) => a + b.count * SCALE_SCORES[b.label], 0)}
`,
      },
    },
  };
};

const SCALE_SCORES = {
  "Strongly Disagree": 1,
  Disagree: 2,
  "Neutral or N/A": 3,
  Agree: 4,
  "Strongly Agree": 5,
};
