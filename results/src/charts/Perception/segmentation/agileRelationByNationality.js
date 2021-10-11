import {
  BY_COMPANY_NATIONALITY,
  BY_POSITION,
  BY_ORIENTATION,
  BY_SIZE,
  BY_EXPERIENCE,
} from "../../segmentationData";
import {
  generateAgileRelationBySegment,
  generateGroupedChartDataBySegment,
} from "./_utils";

export const AGILE_RELATION_BY_COMPANY_NATIONALITY_DATA = {
  bulgaria_bulgarian: generateAgileRelationBySegment(
    BY_COMPANY_NATIONALITY.bulgaria_bulgarian
  ),
  bulgaria_international: generateAgileRelationBySegment(
    BY_COMPANY_NATIONALITY.bulgaria_international
  ),
  multinational: generateAgileRelationBySegment(
    BY_COMPANY_NATIONALITY.multinational
  ),
};

export const AGILE_RELATION_BY_NATIONALITY_CHART_DATA = [
  ...generateGroupedChartDataBySegment(
    AGILE_RELATION_BY_COMPANY_NATIONALITY_DATA.bulgaria_bulgarian,
    "Bulgarian and operates in Bulgaria"
  ),
  ...generateGroupedChartDataBySegment(
    AGILE_RELATION_BY_COMPANY_NATIONALITY_DATA.bulgaria_international,
    "Bulgarian and operates internationally"
  ),
  ...generateGroupedChartDataBySegment(
    AGILE_RELATION_BY_COMPANY_NATIONALITY_DATA.multinational,
    "Multinational"
  ),
];
