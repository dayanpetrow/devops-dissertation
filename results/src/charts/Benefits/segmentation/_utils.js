export const generateBenefitsBySegment = (segmentData) => {
  return segmentData.reduce(
    (hashmap, response) => {
      const { BEN_ORGA = [], BEN_PROJ = [] } = response;

      BEN_ORGA.forEach(
        (benefit) =>
          (hashmap.organizationalBenefits[benefit] =
            hashmap.organizationalBenefits[benefit] !== undefined
              ? ++hashmap.organizationalBenefits[benefit]
              : 1)
      );

      BEN_PROJ.forEach(
        (benefit) =>
          (hashmap.projectBenefits[benefit] =
            hashmap.projectBenefits[benefit] !== undefined
              ? ++hashmap.projectBenefits[benefit]
              : 1)
      );

      return hashmap;
    },
    {
      organizationalBenefits: {},
      projectBenefits: {},
    }
  );
};

// type => organizationalBenefits, projectBenefits
export const generateGroupedChartDataBySegment = (segment, type, group) =>
  Object.keys(segment[type]).map((benefit) => ({
    label: benefit,
    count: segment[type][benefit],
    group: group,
  }));

// bar chart config
export const generateGroupedBarChartConfig = (data) => ({
  height: 600,
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
