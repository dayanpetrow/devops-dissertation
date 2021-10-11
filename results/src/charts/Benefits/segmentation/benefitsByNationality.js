import {
  BY_COMPANY_NATIONALITY,
  BY_POSITION,
  BY_ORIENTATION,
  BY_SIZE,
  BY_EXPERIENCE,
} from "../../segmentationData";
import {
  generateBenefitsBySegment,
  generateGroupedChartDataBySegment,
} from "./_utils";

export const BENEFITS_BY_COMPANY_NATIONALITY_DATA = {
  bulgaria_bulgarian: generateBenefitsBySegment(
    BY_COMPANY_NATIONALITY.bulgaria_bulgarian
  ),
  bulgaria_international: generateBenefitsBySegment(
    BY_COMPANY_NATIONALITY.bulgaria_international
  ),
  multinational: generateBenefitsBySegment(
    BY_COMPANY_NATIONALITY.multinational
  ),
};

export const ORGANIZATIONAL_BENEFITS_BY_NATIONALITY_CHART_DATA = [
  ...generateGroupedChartDataBySegment(
    BENEFITS_BY_COMPANY_NATIONALITY_DATA.bulgaria_bulgarian,
    "organizationalBenefits",
    "Bulgarian and operates in Bulgaria"
  ),
  ...generateGroupedChartDataBySegment(
    BENEFITS_BY_COMPANY_NATIONALITY_DATA.bulgaria_international,
    "organizationalBenefits",
    "Bulgarian and operates internationally"
  ),
  ...generateGroupedChartDataBySegment(
    BENEFITS_BY_COMPANY_NATIONALITY_DATA.multinational,
    "organizationalBenefits",
    "Multinational"
  ),
].sort((a, b) => a.label.localeCompare(b.label));

export const PROJECT_BENEFITS_BY_NATIONALITY_CHART_DATA = [
  ...generateGroupedChartDataBySegment(
    BENEFITS_BY_COMPANY_NATIONALITY_DATA.bulgaria_bulgarian,
    "projectBenefits",
    "Bulgarian and operates in Bulgaria"
  ),
  ...generateGroupedChartDataBySegment(
    BENEFITS_BY_COMPANY_NATIONALITY_DATA.bulgaria_international,
    "projectBenefits",
    "Bulgarian and operates internationally"
  ),
  ...generateGroupedChartDataBySegment(
    BENEFITS_BY_COMPANY_NATIONALITY_DATA.multinational,
    "projectBenefits",
    "Multinational"
  ),
].sort((a, b) => a.label.localeCompare(b.label));
