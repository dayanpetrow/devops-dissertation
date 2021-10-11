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

const EXPERIENCE = {
  1: "0-2",
  2: "3-5",
  3: "6-10",
  4: "11-20",
  5: "More than 20",
};

/** BENEFITS BY EXPERIENCE */
export const AGILE_RELATION_BY_EXPERIENCE_DATA = {
  "0-2": generateAgileRelationBySegment(BY_EXPERIENCE["0-2"]),
  "3-5": generateAgileRelationBySegment(BY_EXPERIENCE["3-5"]),
  "6-10": generateAgileRelationBySegment(BY_EXPERIENCE["6-10"]),
  "11-20": generateAgileRelationBySegment(BY_EXPERIENCE["11-20"]),
  "More than 20": generateAgileRelationBySegment(BY_EXPERIENCE["More than 20"]),
};

export const AGILE_RELATION_BY_EXPERIENCE_CHART_DATA = [
  ...generateGroupedChartDataBySegment(
    AGILE_RELATION_BY_EXPERIENCE_DATA["0-2"],
    "0-2"
  ),
  ...generateGroupedChartDataBySegment(
    AGILE_RELATION_BY_EXPERIENCE_DATA["3-5"],
    "3-5"
  ),
  ...generateGroupedChartDataBySegment(
    AGILE_RELATION_BY_EXPERIENCE_DATA["6-10"],
    "6-10"
  ),
  ...generateGroupedChartDataBySegment(
    AGILE_RELATION_BY_EXPERIENCE_DATA["11-20"],
    "11-20"
  ),
  ...generateGroupedChartDataBySegment(
    AGILE_RELATION_BY_EXPERIENCE_DATA["More than 20"],
    "More than 20"
  ),
];
