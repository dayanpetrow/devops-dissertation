import maturityStatistics from "./maturityStatistics.json";

const defaultKeys = {
  "Strongly Disagree": 0,
  Disagree: 0,
  "Neutral or N/A": 0,
  Agree: 0,
  "Strongly Agree": 0,
};

const generateMaturityScaleChartData = (statisticsKey) =>
  Object.keys({
    ...defaultKeys,
    ...maturityStatistics[statisticsKey],
  }).map((scale) => ({
    label: scale,
    count: maturityStatistics[statisticsKey][scale] || 0,
  }));

export const maturityScaleCharts = {
  MAT_DEMDEP: {
    title:
      "My team has the ability to deploy our system to production at any time, on demand",
    data: generateMaturityScaleChartData("MAT_DEMDEP"),
  },
  MAT_BISHDEP: {
    title:
      "My team can release software to production during normal business hours with negligible downtime",
    data: generateMaturityScaleChartData("MAT_BISHDEP"),
  },
  MAT_COMAUTO: {
    title:
      "Code commits results in automated tests being run and an automated build of the system",
    data: generateMaturityScaleChartData("MAT_COMAUTO"),
  },
  MAT_FAILTEST: {
    title:
      "Failing tests will prevent a commit to progress through the pipeline",
    data: generateMaturityScaleChartData("MAT_FAILTEST"),
  },
  MAT_ACTAUT: {
    title: "My team actively identifies and automates repetitive manual work",
    data: generateMaturityScaleChartData("MAT_ACTAUT"),
  },
  MAT_PRODINC: {
    title: "My team has predefined protocols for handling production incidents",
    data: generateMaturityScaleChartData("MAT_PRODINC"),
  },
  MAT_MONISS: {
    title:
      "My team has access to tools that help us understand, trace and diagnose system and infrastructure problems",
    data: generateMaturityScaleChartData("MAT_MONISS"),
  },
  MAT_MONMET: {
    title:
      "My team has access to tools that monitor key business and system metrics",
    data: generateMaturityScaleChartData("MAT_MONMET"),
  },
  MAT_SECREW: {
    title:
      "Security reviews are regularly performed during the development process",
    data: generateMaturityScaleChartData("MAT_SECREW"),
  },
  MAT_DOCUME: {
    title:
      "Most of the code for the product I work on is documented and I can easily access and find the documentation that I need",
    data: generateMaturityScaleChartData("MAT_DOCUME"),
  },
  MAT_DEPSTA: {
    title:
      "My team prioritizes keeping the software in deployable state over development of new features",
    data: generateMaturityScaleChartData("MAT_DEPSTA"),
  },
};
