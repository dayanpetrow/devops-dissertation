export const generateMaturityTotalsBySegment = (segmentData, key) => {
  return segmentData.reduce((hashmap, response) => {
    const { MAT_TOTAL } = response;

    hashmap[MAT_TOTAL] =
      hashmap[MAT_TOTAL] !== undefined ? (hashmap[MAT_TOTAL] += 1) : 1;

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
