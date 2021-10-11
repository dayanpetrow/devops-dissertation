export const generateChallengesBySegment = (segmentData) => {
  return segmentData.reduce(
    (hashmap, response) => {
      const { CHA_ORGA = [], CHA_TEAM = [] } = response;

      CHA_ORGA.forEach(
        (challenge) =>
          (hashmap.organizationalChallenges[challenge] =
            hashmap.organizationalChallenges[challenge] !== undefined
              ? ++hashmap.organizationalChallenges[challenge]
              : 1)
      );

      CHA_TEAM.forEach(
        (challenge) =>
          (hashmap.projectChallenges[challenge] =
            hashmap.projectChallenges[challenge] !== undefined
              ? ++hashmap.projectChallenges[challenge]
              : 1)
      );

      return hashmap;
    },
    {
      organizationalChallenges: {},
      projectChallenges: {},
    }
  );
};

// type => organizationalChallenges, projectChallenges
export const generateGroupedChartDataBySegment = (segment, type, group) =>
  Object.keys(segment[type]).map((challenge) => ({
    label: challenge,
    count: segment[type][challenge],
    group: group,
  }));

// bar chart config
export const generateGroupedBarChartConfig = (data) => ({
  height: 350,
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
    layout: "horizontal",
  },
  legend: {
    position: "top",
  },
  barStyle: {
    radius: [2, 2, 0, 0],
  },
});
