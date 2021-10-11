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

export const CHALLENGES_BY_ORIENTATION_DATA = {
  product: generateChallengesBySegment(BY_ORIENTATION.product),
  service: generateChallengesBySegment(BY_ORIENTATION.service),
  mixed: generateChallengesBySegment(BY_ORIENTATION.mixed),
};

export const ORGANIZATIONAL_CHALLENGES_BY_ORIENTATION_CHART_DATA = [
  ...generateGroupedChartDataBySegment(
    CHALLENGES_BY_ORIENTATION_DATA.product,
    "organizationalChallenges",
    "Product"
  ),
  ...generateGroupedChartDataBySegment(
    CHALLENGES_BY_ORIENTATION_DATA.service,
    "organizationalChallenges",
    "Service"
  ),
  ...generateGroupedChartDataBySegment(
    CHALLENGES_BY_ORIENTATION_DATA.mixed,
    "organizationalChallenges",
    "Mixed"
  ),
].sort((a, b) => a.label.localeCompare(b.label));
export const PROJECT_CHALLENGES_BY_ORIENTATION_CHART_DATA = [
  ...generateGroupedChartDataBySegment(
    CHALLENGES_BY_ORIENTATION_DATA.product,
    "projectChallenges",
    "Product"
  ),
  ...generateGroupedChartDataBySegment(
    CHALLENGES_BY_ORIENTATION_DATA.service,
    "projectChallenges",
    "Service"
  ),
  ...generateGroupedChartDataBySegment(
    CHALLENGES_BY_ORIENTATION_DATA.mixed,
    "projectChallenges",
    "Mixed"
  ),
].sort((a, b) => a.label.localeCompare(b.label));
