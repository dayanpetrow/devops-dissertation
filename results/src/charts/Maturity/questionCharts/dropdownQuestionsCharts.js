import maturityStatistics from "./maturityStatistics.json";

const generateMaturityDropdownChartData = (statisticsKey) =>
  Object.keys(maturityStatistics[statisticsKey]).map((option) => ({
    label: option,
    count: maturityStatistics[statisticsKey][option] || 0,
  }));

export const maturityDropdownCharts = {
  MAT_LEADTIME: {
    title:
      "How long does it take to go from code committed to code successfully running in production?",
    data: generateMaturityDropdownChartData("MAT_LEADTIME"),
  },
  MAT_DEPFRE: {
    title: "How often does your team deploy code to production?",
    data: generateMaturityDropdownChartData("MAT_DEPFRE"),
  },
  MAT_TIMRES: {
    title:
      "How long does it take to restore a service after an infrastructure incident or defect?",
    data: generateMaturityDropdownChartData("MAT_TIMRES"),
  },
  MAT_CHAFAIL: {
    title: "What percentage of production changes result in degraded service?",
    data: generateMaturityDropdownChartData("MAT_CHAFAIL"),
  },
  MAT_TOOLRES: {
    title:
      "Who has the responsibility for creating and maintaining your team's CI/CD toolchain?",
    data: generateMaturityDropdownChartData("MAT_TOOLRES"),
  },
};

export const generateDropdownPieChartConfig = (data) => {
  return {
    height: 500,
    appendPadding: 20,
    data: data,
    autoFit: true,
    angleField: "count",
    colorField: "label",
    radius: 1,
    label: {
      type: "inner",
      offset: "-30%",
      style: { textAlign: "center", fontSize: 14 },
      autoRotate: false,
      content: function content(_ref) {
        return _ref.count === 0 ? "" : _ref.count;
      },
    },
    legend: {
      itemSpacing: 8,
      layout: "vertical",
      position: "top",
      flipPage: false,
      maxItemWidth: "100%",
    },
    interactions: [{ type: "element-active" }],
  };
};

export const toolchainIncludesChart = Object.keys(
  maturityStatistics.MAT_TOOLINC
)
  .map((tool) => ({
    label: tool,
    count: maturityStatistics.MAT_TOOLINC[tool],
  }))
  .sort((a, b) => b.count - a.count);
