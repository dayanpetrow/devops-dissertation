export const generateCultureTotalsBySegment = (segmentData, key) => {
  return segmentData.reduce((hashmap, response) => {
    const { CUL_TOTAL } = response;

    hashmap[CUL_TOTAL] =
      hashmap[CUL_TOTAL] !== undefined ? (hashmap[CUL_TOTAL] += 1) : 1;

    return hashmap;
  }, {});
};

export const generateGroupedChartDataBySegment = (segment, group) =>
  Object.keys(segment).map((key) => ({
    label: key,
    count: segment[key],
    group: group,
  }));

// bar chart config
export const generateGroupedBarChartConfig = (data) => ({
  height: 800,
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
