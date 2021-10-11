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

const EXPERIENCE = {
  1: "0-2",
  2: "3-5",
  3: "6-10",
  4: "11-20",
  5: "More than 20",
};

/** BENEFITS BY EXPERIENCE */
export const BENEFITS_BY_EXPERIENCE_DATA = {
  "0-2": generateBenefitsBySegment(BY_EXPERIENCE["0-2"]),
  "3-5": generateBenefitsBySegment(BY_EXPERIENCE["3-5"]),
  "6-10": generateBenefitsBySegment(BY_EXPERIENCE["6-10"]),
  "11-20": generateBenefitsBySegment(BY_EXPERIENCE["11-20"]),
  "More than 20": generateBenefitsBySegment(BY_EXPERIENCE["More than 20"]),
};

export const ORGANIZATIONAL_BENEFITS_BY_EXPERIENCE_CHART_DATA = [
  ...generateGroupedChartDataBySegment(
    BENEFITS_BY_EXPERIENCE_DATA["0-2"],
    "organizationalBenefits",
    "0-2"
  ),
  ...generateGroupedChartDataBySegment(
    BENEFITS_BY_EXPERIENCE_DATA["3-5"],
    "organizationalBenefits",
    "3-5"
  ),
  ...generateGroupedChartDataBySegment(
    BENEFITS_BY_EXPERIENCE_DATA["6-10"],
    "organizationalBenefits",
    "6-10"
  ),
  ...generateGroupedChartDataBySegment(
    BENEFITS_BY_EXPERIENCE_DATA["11-20"],
    "organizationalBenefits",
    "11-20"
  ),
  ...generateGroupedChartDataBySegment(
    BENEFITS_BY_EXPERIENCE_DATA["More than 20"],
    "organizationalBenefits",
    "More than 20"
  ),
];

export const PROEJECT_BENEFITS_BY_EXPERIENCE_CHART_DATA = [
  ...generateGroupedChartDataBySegment(
    BENEFITS_BY_EXPERIENCE_DATA["0-2"],
    "projectBenefits",
    "0-2"
  ),
  ...generateGroupedChartDataBySegment(
    BENEFITS_BY_EXPERIENCE_DATA["3-5"],
    "projectBenefits",
    "3-5"
  ),
  ...generateGroupedChartDataBySegment(
    BENEFITS_BY_EXPERIENCE_DATA["6-10"],
    "projectBenefits",
    "6-10"
  ),
  ...generateGroupedChartDataBySegment(
    BENEFITS_BY_EXPERIENCE_DATA["11-20"],
    "projectBenefits",
    "11-20"
  ),
  ...generateGroupedChartDataBySegment(
    BENEFITS_BY_EXPERIENCE_DATA["More than 20"],
    "projectBenefits",
    "More than 20"
  ),
];
