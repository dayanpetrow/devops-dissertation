const agileAnswers = {
  0: "DevOps has no relation with Agile",
  1: "DevOps aims to replace Agile",
  2: "DevOps extends Agile",
  3: "I don't know",
};

export const generateAgileRelationBySegment = (segmentData) => {
  return segmentData.reduce((hashmap, response) => {
    const { PER_AGIREL = 3 } = response;

    const answerValue = agileAnswers[PER_AGIREL];
    hashmap[answerValue] =
      hashmap[answerValue] !== undefined ? (hashmap[answerValue] += 1) : 1;

    return hashmap;
  }, {});
};

export const generateGroupedChartDataBySegment = (segment, group) =>
  Object.keys(segment).map((relation) => ({
    label: relation,
    count: segment[relation],
    group: group,
  }));

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
