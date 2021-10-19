export const generatePieChartConfig = (data) => {
  return {
    appendPadding: 20,
    data: data,
    angleField: "count",
    colorField: "label",
    radius: 1,
    // innerRadius: 0.45,
    label: {
      type: "inner",
      offset: "-30%",
      style: { textAlign: "center", fontSize: 18 },
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
      layout: "vertical",
      position: "right",
      fontSize: 18,
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
        //         content: `
        // Average: ${(
        //           data.reduce((a, b) => a + b.count * SCALE_SCORES[b.label], 0) /
        //           data.reduce((a, b) => a + b.count, 0)
        //         ).toFixed(2)}
        // `,
      },
    },
  };
};
