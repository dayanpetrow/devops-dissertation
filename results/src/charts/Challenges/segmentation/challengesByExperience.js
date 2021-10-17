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

const EXPERIENCE = {
  1: "0-2",
  2: "3-5",
  3: "6-10",
  4: "11-20",
  5: "More than 20",
};

/** CHALLENGES BY EXPERIENCE */
export const CHALLENGES_BY_EXPERIENCE_DATA = {
  "0-2": generateChallengesBySegment(BY_EXPERIENCE["0-2"]),
  "3-5": generateChallengesBySegment(BY_EXPERIENCE["3-5"]),
  "6-10": generateChallengesBySegment(BY_EXPERIENCE["6-10"]),
  "11-20": generateChallengesBySegment(BY_EXPERIENCE["11-20"]),
  "More than 20": generateChallengesBySegment(BY_EXPERIENCE["More than 20"]),
};

export const ORGANIZATIONAL_CHALLENGES_BY_EXPERIENCE_CHART_DATA = [
  ...generateGroupedChartDataBySegment(
    CHALLENGES_BY_EXPERIENCE_DATA["0-2"],
    "organizationalChallenges",
    "0-2",
    BY_EXPERIENCE["0-2"].length // the length of the segment
  ),
  ...generateGroupedChartDataBySegment(
    CHALLENGES_BY_EXPERIENCE_DATA["3-5"],
    "organizationalChallenges",
    "3-5",
    BY_EXPERIENCE["3-5"].length // the length of the segment
  ),
  ...generateGroupedChartDataBySegment(
    CHALLENGES_BY_EXPERIENCE_DATA["6-10"],
    "organizationalChallenges",
    "6-10",
    BY_EXPERIENCE["6-10"].length // the length of the segment
  ),
  ...generateGroupedChartDataBySegment(
    CHALLENGES_BY_EXPERIENCE_DATA["11-20"],
    "organizationalChallenges",
    "11-20",
    BY_EXPERIENCE["11-20"].length // the length of the segment
  ),
  ...generateGroupedChartDataBySegment(
    CHALLENGES_BY_EXPERIENCE_DATA["More than 20"],
    "organizationalChallenges",
    "More than 20",
    BY_EXPERIENCE["More than 20"].length // the length of the segment
  ),
].sort((a, b) => a.label.localeCompare(b.label));

export const PROEJECT_CHALLENGES_BY_EXPERIENCE_CHART_DATA = [
  ...generateGroupedChartDataBySegment(
    CHALLENGES_BY_EXPERIENCE_DATA["0-2"],
    "projectChallenges",
    "0-2",
    BY_EXPERIENCE["0-2"].length // the length of the segment
  ),
  ...generateGroupedChartDataBySegment(
    CHALLENGES_BY_EXPERIENCE_DATA["3-5"],
    "projectChallenges",
    "3-5",
    BY_EXPERIENCE["3-5"].length // the length of the segment
  ),
  ...generateGroupedChartDataBySegment(
    CHALLENGES_BY_EXPERIENCE_DATA["6-10"],
    "projectChallenges",
    "6-10",
    BY_EXPERIENCE["6-10"].length // the length of the segment
  ),
  ...generateGroupedChartDataBySegment(
    CHALLENGES_BY_EXPERIENCE_DATA["11-20"],
    "projectChallenges",
    "11-20",
    BY_EXPERIENCE["11-20"].length // the length of the segment
  ),
  ...generateGroupedChartDataBySegment(
    CHALLENGES_BY_EXPERIENCE_DATA["More than 20"],
    "projectChallenges",
    "More than 20",
    BY_EXPERIENCE["More than 20"].length // the length of the segment
  ),
].sort((a, b) => a.label.localeCompare(b.label));
