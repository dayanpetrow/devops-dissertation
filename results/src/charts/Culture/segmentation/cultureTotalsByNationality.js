import {
  BY_COMPANY_NATIONALITY,
  BY_POSITION,
  BY_ORIENTATION,
  BY_SIZE,
  BY_EXPERIENCE,
} from "../../segmentationData";
import {
  generateCultureTotalsBySegment,
  generateGroupedChartDataBySegment,
} from "./_utils";

export const CULTURE_TOTALS_BY_COMPANY_NATIONALITY_DATA = {
  bulgaria_bulgarian: generateCultureTotalsBySegment(
    BY_COMPANY_NATIONALITY.bulgaria_bulgarian
  ),
  bulgaria_international: generateCultureTotalsBySegment(
    BY_COMPANY_NATIONALITY.bulgaria_international
  ),
  multinational: generateCultureTotalsBySegment(
    BY_COMPANY_NATIONALITY.multinational
  ),
};

export const CULTURE_TOTALS_BY_NATIONALITY_CHART_DATA = [
  ...generateGroupedChartDataBySegment(
    CULTURE_TOTALS_BY_COMPANY_NATIONALITY_DATA.bulgaria_bulgarian,
    "Bulgarian and operates in Bulgaria"
  ),
  ...generateGroupedChartDataBySegment(
    CULTURE_TOTALS_BY_COMPANY_NATIONALITY_DATA.bulgaria_international,
    "Bulgarian and operates internationally"
  ),
  ...generateGroupedChartDataBySegment(
    CULTURE_TOTALS_BY_COMPANY_NATIONALITY_DATA.multinational,
    "Multinational"
  ),
].sort((a, b) => +b.label - +a.label);

const TOTAL_BG_BG_SCORE = Object.keys(
  CULTURE_TOTALS_BY_COMPANY_NATIONALITY_DATA.bulgaria_bulgarian
).reduce(
  (total, score) =>
    total +
    +score *
      CULTURE_TOTALS_BY_COMPANY_NATIONALITY_DATA.bulgaria_bulgarian[score],
  0
);
export const AVERAGE_BG_BG_SCORE =
  TOTAL_BG_BG_SCORE / BY_COMPANY_NATIONALITY.bulgaria_bulgarian.length;

const TOTAL_BG_INT_SCORE = Object.keys(
  CULTURE_TOTALS_BY_COMPANY_NATIONALITY_DATA.bulgaria_international
).reduce(
  (total, score) =>
    total +
    +score *
      CULTURE_TOTALS_BY_COMPANY_NATIONALITY_DATA.bulgaria_international[score],
  0
);
export const AVERAGE_BG_INT_SCORE =
  TOTAL_BG_INT_SCORE / BY_COMPANY_NATIONALITY.bulgaria_international.length;

const TOTAL_MULTINATIONAL_SCORE = Object.keys(
  CULTURE_TOTALS_BY_COMPANY_NATIONALITY_DATA.multinational
).reduce(
  (total, score) =>
    total +
    +score * CULTURE_TOTALS_BY_COMPANY_NATIONALITY_DATA.multinational[score],
  0
);
export const AVERAGE_MULTINATIONAL_SCORE =
  TOTAL_MULTINATIONAL_SCORE / BY_COMPANY_NATIONALITY.multinational.length;
