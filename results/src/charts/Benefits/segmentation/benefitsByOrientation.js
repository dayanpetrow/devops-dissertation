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

/** BENEFITS BY COMPANY ORIENTATION */
export const BENEFITS_BY_ORIENTATION_DATA = {
  product: generateBenefitsBySegment(BY_ORIENTATION.product),
  service: generateBenefitsBySegment(BY_ORIENTATION.service),
  mixed: generateBenefitsBySegment(BY_ORIENTATION.mixed),
};

export const ORGANIZATIONAL_BENEFITS_BY_ORIENTATION_CHART_DATA = [
  ...generateGroupedChartDataBySegment(
    BENEFITS_BY_ORIENTATION_DATA.product,
    "organizationalBenefits",
    "Product"
  ),
  ...generateGroupedChartDataBySegment(
    BENEFITS_BY_ORIENTATION_DATA.service,
    "organizationalBenefits",
    "Service"
  ),
  ...generateGroupedChartDataBySegment(
    BENEFITS_BY_ORIENTATION_DATA.mixed,
    "organizationalBenefits",
    "Mixed"
  ),
];
export const PROJECT_BENEFITS_BY_ORIENTATION_CHART_DATA = [
  ...generateGroupedChartDataBySegment(
    BENEFITS_BY_ORIENTATION_DATA.product,
    "projectBenefits",
    "Product"
  ),
  ...generateGroupedChartDataBySegment(
    BENEFITS_BY_ORIENTATION_DATA.service,
    "projectBenefits",
    "Service"
  ),
  ...generateGroupedChartDataBySegment(
    BENEFITS_BY_ORIENTATION_DATA.mixed,
    "projectBenefits",
    "Mixed"
  ),
];
