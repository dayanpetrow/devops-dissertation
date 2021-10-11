import {
  BY_COMPANY_NATIONALITY,
  BY_POSITION,
  BY_ORIENTATION,
  BY_SIZE,
  BY_EXPERIENCE,
} from "../../segmentationData";
import {
  generateChallengesBySegment,
  generateGroupedChartDataBySegment,
} from "./_utils";

/** CHALLENGES BY POSITION */
export const CHALLENGES_BY_POSITION_DATA = {
  software_developmnent: generateChallengesBySegment(
    BY_POSITION.software_development
  ),
  cloud_devops: generateChallengesBySegment(BY_POSITION.cloud_devops),
  leadership_management: generateChallengesBySegment(
    BY_POSITION.leadership_management
  ),
  other: generateChallengesBySegment(BY_POSITION.other),
};

export const ORGANIZATIONAL_CHALLENGES_BY_POSITION_CHART_DATA = [
  ...generateGroupedChartDataBySegment(
    CHALLENGES_BY_POSITION_DATA.software_developmnent,
    "organizationalChallenges",
    "Software Development"
  ),
  ...generateGroupedChartDataBySegment(
    CHALLENGES_BY_POSITION_DATA.cloud_devops,
    "organizationalChallenges",
    "Cloud/DevOps"
  ),
  ...generateGroupedChartDataBySegment(
    CHALLENGES_BY_POSITION_DATA.leadership_management,
    "organizationalChallenges",
    "Leadership/Management"
  ),
  ...generateGroupedChartDataBySegment(
    CHALLENGES_BY_POSITION_DATA.other,
    "organizationalChallenges",
    "Other"
  ),
];

export const PROJECT_CHALLENGES_BY_POSITION_CHART_DATA = [
  ...generateGroupedChartDataBySegment(
    CHALLENGES_BY_POSITION_DATA.software_developmnent,
    "projectChallenges",
    "Software Development"
  ),
  ...generateGroupedChartDataBySegment(
    CHALLENGES_BY_POSITION_DATA.cloud_devops,
    "projectChallenges",
    "Cloud/DevOps"
  ),
  ...generateGroupedChartDataBySegment(
    CHALLENGES_BY_POSITION_DATA.leadership_management,
    "projectChallenges",
    "Leadership/Management"
  ),
  ...generateGroupedChartDataBySegment(
    CHALLENGES_BY_POSITION_DATA.other,
    "projectChallenges",
    "Other"
  ),
];
