import maturityStatistics from "../questionCharts/maturityStatistics.json";

export const MATURITY_TOTALS_DATA = Object.keys(
  maturityStatistics.MAT_TOTAL
).map((total) => ({
  total: total,
  count: maturityStatistics.MAT_TOTAL[total],
}));
