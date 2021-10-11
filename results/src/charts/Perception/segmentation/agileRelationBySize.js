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

/** BENEFITS BY SIZE */
export const AGILE_RELATION_BY_SIZE_DATA = {
  "1-19": generateAgileRelationBySegment(BY_SIZE["1-19"]),
  "20-99": generateAgileRelationBySegment(BY_SIZE["20-99"]),
  "100-249": generateAgileRelationBySegment(BY_SIZE["100-249"]),
  "250-499": generateAgileRelationBySegment(BY_SIZE["250-499"]),
  "More than 2000": generateAgileRelationBySegment(BY_SIZE["More than 2000"]),
};

export const AGILE_RELATION_BY_SIZE_CHART_DATA = [
  ...generateGroupedChartDataBySegment(
    AGILE_RELATION_BY_SIZE_DATA["1-19"],
    "1-19"
  ),
  ...generateGroupedChartDataBySegment(
    AGILE_RELATION_BY_SIZE_DATA["20-99"],
    "20-99"
  ),
  ...generateGroupedChartDataBySegment(
    AGILE_RELATION_BY_SIZE_DATA["100-249"],
    "100-249"
  ),
  ...generateGroupedChartDataBySegment(
    AGILE_RELATION_BY_SIZE_DATA["250-499"],
    "250-499"
  ),
  ...generateGroupedChartDataBySegment(
    AGILE_RELATION_BY_SIZE_DATA["More than 2000"],
    "More than 2000"
  ),
].sort((a, b) => a.label.localeCompare(b.label));
