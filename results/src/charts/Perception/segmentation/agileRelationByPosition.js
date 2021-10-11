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

export const AGILE_RELATION_BY_POSITION_DATA = {
  software_developmnent: generateAgileRelationBySegment(
    BY_POSITION.software_development
  ),
  cloud_devops: generateAgileRelationBySegment(BY_POSITION.cloud_devops),
  leadership_management: generateAgileRelationBySegment(
    BY_POSITION.leadership_management
  ),
  other: generateAgileRelationBySegment(BY_POSITION.other),
};

export const AGILE_RELATION_BY_POSITION_CHART_DATA = [
  ...generateGroupedChartDataBySegment(
    AGILE_RELATION_BY_POSITION_DATA.software_developmnent,
    "Software Development"
  ),
  ...generateGroupedChartDataBySegment(
    AGILE_RELATION_BY_POSITION_DATA.cloud_devops,
    "Cloud/DevOps"
  ),
  ...generateGroupedChartDataBySegment(
    AGILE_RELATION_BY_POSITION_DATA.leadership_management,
    "Leadership/Management"
  ),
  ...generateGroupedChartDataBySegment(
    AGILE_RELATION_BY_POSITION_DATA.other,
    "Other"
  ),
];
