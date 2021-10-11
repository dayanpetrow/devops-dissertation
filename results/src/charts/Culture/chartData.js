import data from "./cultureStatistics.json";

const defaultKeys = {
  "Strongly Disagree": 0,
  Disagree: 0,
  "Neutral or N/A": 0,
  Agree: 0,
  "Strongly Agree": 0,
};

const generateCultureChartData = (statisticsKey) =>
  Object.keys({
    ...defaultKeys,
    ...data[statisticsKey],
  }).map((scale) => ({
    label: scale,
    count: data[statisticsKey][scale] || 0,
  }));

export const ORGANIZATION_DATA = {
  CUL_MULTEAM: {
    title:
      "Teams are generally cross-functional (developers, designers, QAs and business analysts work together in the same team)",
    data: generateCultureChartData("CUL_MULTEAM"),
  },
  CUL_COLLAB: {
    title: "Cross-functional collaboration is encouraged",
    data: generateCultureChartData("CUL_COLLAB"),
  },
  CUL_COMMUN: {
    title: "Open communication and knowledge sharing is encouraged",
    data: generateCultureChartData("CUL_COMMUN"),
  },
  CUL_INITI: {
    title: "Initiative and ideas are welcomed",
    data: generateCultureChartData("CUL_INITI"),
  },
  CUL_TECKSTA: {
    title:
      "Teams have the freedom to choose their technology stack independently from other teams depending on business requirements",
    data: generateCultureChartData("CUL_TECKSTA"),
  },
};

export const TEAM_DATA = {
  CUL_SHARESP: {
    title: "There is a feeling of shared ownership and responsibility",
    data: generateCultureChartData("CUL_SHARESP"),
  },
  CUL_FAILOP: {
    title:
      "Failures are generally treated as learning and improvement opportunities",
    data: generateCultureChartData("CUL_FAILOP"),
  },
  CUL_DIFPERS: {
    title:
      "I feel comfortable sharing a different perspective, opinion or approach on a work issue",
    data: generateCultureChartData("CUL_DIFPERS"),
  },
  CUL_OUTCOMM: {
    title:
      "I don't need to communicate and coordinate with people outside of my team to complete my work",
    data: generateCultureChartData("CUL_OUTCOMM"),
  },
  CUL_TEAMCON: {
    title: "I feel connected with my team members",
    data: generateCultureChartData("CUL_TEAMCON"),
  },
};

export const CULTURE_TOTALS_DATA = Object.keys(data.CUL_TOTAL).map((total) => ({
  total: total,
  count: data.CUL_TOTAL[total],
}));
