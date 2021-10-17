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

export const CHALLENGES_BY_SIZE_DATA = {
  "1-19": generateChallengesBySegment(BY_SIZE["1-19"]),
  "20-99": generateChallengesBySegment(BY_SIZE["20-99"]),
  "100-249": generateChallengesBySegment(BY_SIZE["100-249"]),
  "250-499": generateChallengesBySegment(BY_SIZE["250-499"]),
  "More than 2000": generateChallengesBySegment(BY_SIZE["More than 2000"]),
};

export const ORGANIZATIONAL_CHALLENGES_BY_SIZE_CHART_DATA = [
  ...generateGroupedChartDataBySegment(
    CHALLENGES_BY_SIZE_DATA["1-19"],
    "organizationalChallenges",
    "1-19",
    BY_SIZE["1-19"].length
  ),
  ...generateGroupedChartDataBySegment(
    CHALLENGES_BY_SIZE_DATA["20-99"],
    "organizationalChallenges",
    "20-99",
    BY_SIZE["20-99"].length
  ),
  ...generateGroupedChartDataBySegment(
    CHALLENGES_BY_SIZE_DATA["100-249"],
    "organizationalChallenges",
    "100-249",
    BY_SIZE["100-249"].length
  ),
  ...generateGroupedChartDataBySegment(
    CHALLENGES_BY_SIZE_DATA["250-499"],
    "organizationalChallenges",
    "250-499",
    BY_SIZE["250-499"].length
  ),
  ...generateGroupedChartDataBySegment(
    CHALLENGES_BY_SIZE_DATA["More than 2000"],
    "organizationalChallenges",
    "More than 2000",
    BY_SIZE["More than 2000"].length
  ),
].sort((a, b) => a.label.localeCompare(b.label));

export const PROJECT_CHALLENGES_BY_SIZE_CHART_DATA = [
  ...generateGroupedChartDataBySegment(
    CHALLENGES_BY_SIZE_DATA["1-19"],
    "projectChallenges",
    "1-19",
    BY_SIZE["1-19"].length
  ),
  ...generateGroupedChartDataBySegment(
    CHALLENGES_BY_SIZE_DATA["20-99"],
    "projectChallenges",
    "20-99",
    BY_SIZE["20-99"].length
  ),
  ...generateGroupedChartDataBySegment(
    CHALLENGES_BY_SIZE_DATA["100-249"],
    "projectChallenges",
    "100-249",
    BY_SIZE["100-249"].length
  ),
  ...generateGroupedChartDataBySegment(
    CHALLENGES_BY_SIZE_DATA["250-499"],
    "projectChallenges",
    "250-499",
    BY_SIZE["250-499"].length
  ),
  ...generateGroupedChartDataBySegment(
    CHALLENGES_BY_SIZE_DATA["More than 2000"],
    "projectChallenges",
    "More than 2000",
    BY_SIZE["More than 2000"].length
  ),
].sort((a, b) => a.label.localeCompare(b.label));
