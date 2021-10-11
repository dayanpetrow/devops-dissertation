import data from "./benefitsStatistics.json";

export const ORGANIZATION_BENEFITS_TOTALS_DATA = Object.keys(
  data.organizationalBenefits
)
  .map((benefit) => ({
    label: benefit,
    count: data.organizationalBenefits[benefit],
  }))
  .sort((a, b) => b.count - a.count);

export const PROJECT_BENEFITS_TOTALS_DATA = Object.keys(data.projectBenefits)
  .map((benefit) => ({ label: benefit, count: data.projectBenefits[benefit] }))
  .sort((a, b) => b.count - a.count);
