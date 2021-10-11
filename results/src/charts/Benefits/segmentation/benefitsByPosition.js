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

/** BENEFITS BY POSITION */
export const BENEFITS_BY_POSITION_DATA = {
  software_developmnent: generateBenefitsBySegment(
    BY_POSITION.software_development
  ),
  cloud_devops: generateBenefitsBySegment(BY_POSITION.cloud_devops),
  leadership_management: generateBenefitsBySegment(
    BY_POSITION.leadership_management
  ),
  other: generateBenefitsBySegment(BY_POSITION.other),
};

export const ORGANIZATIONAL_BENEFITS_BY_POSITION_CHART_DATA = [
  ...generateGroupedChartDataBySegment(
    BENEFITS_BY_POSITION_DATA.software_developmnent,
    "organizationalBenefits",
    "Software Development"
  ),
  ...generateGroupedChartDataBySegment(
    BENEFITS_BY_POSITION_DATA.cloud_devops,
    "organizationalBenefits",
    "Cloud/DevOps"
  ),
  ...generateGroupedChartDataBySegment(
    BENEFITS_BY_POSITION_DATA.leadership_management,
    "organizationalBenefits",
    "Leadership/Management"
  ),
  ...generateGroupedChartDataBySegment(
    BENEFITS_BY_POSITION_DATA.other,
    "organizationalBenefits",
    "Other"
  ),
];

export const PROJECT_BENEFITS_BY_POSITION_CHART_DATA = [
  ...generateGroupedChartDataBySegment(
    BENEFITS_BY_POSITION_DATA.software_developmnent,
    "projectBenefits",
    "Software Development"
  ),
  ...generateGroupedChartDataBySegment(
    BENEFITS_BY_POSITION_DATA.cloud_devops,
    "projectBenefits",
    "Cloud/DevOps"
  ),
  ...generateGroupedChartDataBySegment(
    BENEFITS_BY_POSITION_DATA.leadership_management,
    "projectBenefits",
    "Leadership/Management"
  ),
  ...generateGroupedChartDataBySegment(
    BENEFITS_BY_POSITION_DATA.other,
    "projectBenefits",
    "Other"
  ),
];
