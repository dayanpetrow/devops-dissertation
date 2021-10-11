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

/** BENEFITS BY SIZE */
export const BENEFITS_BY_SIZE_DATA = {
  "1-19": generateBenefitsBySegment(BY_SIZE["1-19"]),
  "20-99": generateBenefitsBySegment(BY_SIZE["20-99"]),
  "100-249": generateBenefitsBySegment(BY_SIZE["100-249"]),
  "250-499": generateBenefitsBySegment(BY_SIZE["250-499"]),
  "More than 2000": generateBenefitsBySegment(BY_SIZE["More than 2000"]),
};

export const ORGANIZATIONAL_BENEFITS_BY_SIZE_CHART_DATA = [
  ...generateGroupedChartDataBySegment(
    BENEFITS_BY_SIZE_DATA["1-19"],
    "organizationalBenefits",
    "1-19"
  ),
  ...generateGroupedChartDataBySegment(
    BENEFITS_BY_SIZE_DATA["20-99"],
    "organizationalBenefits",
    "20-99"
  ),
  ...generateGroupedChartDataBySegment(
    BENEFITS_BY_SIZE_DATA["100-249"],
    "organizationalBenefits",
    "100-249"
  ),
  ...generateGroupedChartDataBySegment(
    BENEFITS_BY_SIZE_DATA["250-499"],
    "organizationalBenefits",
    "250-499"
  ),
  ...generateGroupedChartDataBySegment(
    BENEFITS_BY_SIZE_DATA["More than 2000"],
    "organizationalBenefits",
    "More than 2000"
  ),
].sort((a, b) => a.label.localeCompare(b.label));

export const PROJECT_BENEFITS_BY_SIZE_CHART_DATA = [
  ...generateGroupedChartDataBySegment(
    BENEFITS_BY_SIZE_DATA["1-19"],
    "projectBenefits",
    "1-19"
  ),
  ...generateGroupedChartDataBySegment(
    BENEFITS_BY_SIZE_DATA["20-99"],
    "projectBenefits",
    "20-99"
  ),
  ...generateGroupedChartDataBySegment(
    BENEFITS_BY_SIZE_DATA["100-249"],
    "projectBenefits",
    "100-249"
  ),
  ...generateGroupedChartDataBySegment(
    BENEFITS_BY_SIZE_DATA["250-499"],
    "projectBenefits",
    "250-499"
  ),
  ...generateGroupedChartDataBySegment(
    BENEFITS_BY_SIZE_DATA["More than 2000"],
    "projectBenefits",
    "More than 2000"
  ),
].sort((a, b) => a.label.localeCompare(b.label));
