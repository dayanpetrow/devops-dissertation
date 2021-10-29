import { BY_COMPANY_NATIONALITY } from "../../segmentationData";
import {
  generateMaturityTotalsBySegment,
  generateGroupedChartDataBySegment,
} from "./_utils";

export const MATURITY_TOTALS_BY_COMPANY_NATIONALITY_DATA = {
  bulgaria_bulgarian: generateMaturityTotalsBySegment(
    BY_COMPANY_NATIONALITY.bulgaria_bulgarian
  ),
  bulgaria_international: generateMaturityTotalsBySegment(
    BY_COMPANY_NATIONALITY.bulgaria_international
  ),
  multinational: generateMaturityTotalsBySegment(
    BY_COMPANY_NATIONALITY.multinational
  ),
};

export const MATURITY_TOTALS_BY_NATIONALITY_CHART_DATA = [
  ...generateGroupedChartDataBySegment(
    MATURITY_TOTALS_BY_COMPANY_NATIONALITY_DATA.bulgaria_bulgarian,
    "Bulgarian and operates in Bulgaria"
  ),
  ...generateGroupedChartDataBySegment(
    MATURITY_TOTALS_BY_COMPANY_NATIONALITY_DATA.bulgaria_international,
    "Bulgarian and operates internationally"
  ),
  ...generateGroupedChartDataBySegment(
    MATURITY_TOTALS_BY_COMPANY_NATIONALITY_DATA.multinational,
    "Multinational"
  ),
].sort((a, b) => +b.label - +a.label);

/** Average totals by Nationality */
const calculateAverageTotal = (nationality) => {
  const total = Object.keys(
    MATURITY_TOTALS_BY_COMPANY_NATIONALITY_DATA[nationality]
  ).reduce(
    (total, score) =>
      total +
      +score * MATURITY_TOTALS_BY_COMPANY_NATIONALITY_DATA[nationality][score],
    0
  );
  return total / BY_COMPANY_NATIONALITY[nationality].length;
};

export const AVERAGE_TOTAL_BG_BG = calculateAverageTotal("bulgaria_bulgarian");
export const AVERAGE_TOTAL_BG_INT = calculateAverageTotal(
  "bulgaria_international"
);
export const AVERAGE_TOTAL_MULTI = calculateAverageTotal("multinational");

console.log(AVERAGE_TOTAL_BG_BG, AVERAGE_TOTAL_BG_INT, AVERAGE_TOTAL_MULTI);

// cultural adoption groups by nationality

const calculatTechnicalAdoptionGroupsByNationality = (nationalitySegment) => ({
  very_low: nationalitySegment.filter((response) => response.MAT_TOTAL < 50)
    .length,
  low: nationalitySegment.filter(
    (response) => response.MAT_TOTAL >= 50 && response.MAT_TOTAL <= 59.999
  ).length,
  neutral: nationalitySegment.filter(
    (response) => response.MAT_TOTAL >= 60 && response.MAT_TOTAL <= 69.999
  ).length,
  high: nationalitySegment.filter(
    (response) => response.MAT_TOTAL >= 70 && response.MAT_TOTAL <= 79.999
  ).length,
  very_high: nationalitySegment.filter(
    (response) => response.MAT_TOTAL >= 80 && response.MAT_TOTAL <= 89.999
  ).length,
  exceptional: nationalitySegment.filter((response) => response.MAT_TOTAL >= 90)
    .length,
});

const NATIONALITY_TECHNICAL_ADOPTION_GROUPS = {
  bulgaria_bulgarian: calculatTechnicalAdoptionGroupsByNationality(
    BY_COMPANY_NATIONALITY.bulgaria_bulgarian
  ),
  bulgaria_international: calculatTechnicalAdoptionGroupsByNationality(
    BY_COMPANY_NATIONALITY.bulgaria_international
  ),
  multinational: calculatTechnicalAdoptionGroupsByNationality(
    BY_COMPANY_NATIONALITY.multinational
  ),
};

console.log(
  "NATIONALITY_TECHNICAL_ADOPTION_GROUPS: ",
  NATIONALITY_TECHNICAL_ADOPTION_GROUPS
);
