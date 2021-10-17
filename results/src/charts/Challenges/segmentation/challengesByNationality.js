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

export const CHALLENGES_BY_COMPANY_NATIONALITY_DATA = {
  bulgaria_bulgarian: generateChallengesBySegment(
    BY_COMPANY_NATIONALITY.bulgaria_bulgarian
  ),
  bulgaria_international: generateChallengesBySegment(
    BY_COMPANY_NATIONALITY.bulgaria_international
  ),
  multinational: generateChallengesBySegment(
    BY_COMPANY_NATIONALITY.multinational
  ),
};

export const ORGANIZATIONAL_CHALLENGES_BY_NATIONALITY_CHART_DATA = [
  ...generateGroupedChartDataBySegment(
    CHALLENGES_BY_COMPANY_NATIONALITY_DATA.bulgaria_bulgarian,
    "organizationalChallenges",
    "Bulgarian and operates in Bulgaria",
    BY_COMPANY_NATIONALITY.bulgaria_bulgarian.length // the length of the segment
  ),
  ...generateGroupedChartDataBySegment(
    CHALLENGES_BY_COMPANY_NATIONALITY_DATA.bulgaria_international,
    "organizationalChallenges",
    "Bulgarian and operates internationally",
    BY_COMPANY_NATIONALITY.bulgaria_international.length // the length of the segment
  ),
  ...generateGroupedChartDataBySegment(
    CHALLENGES_BY_COMPANY_NATIONALITY_DATA.multinational,
    "organizationalChallenges",
    "Multinational",
    BY_COMPANY_NATIONALITY.multinational.length // the length of the segment
  ),
].sort((a, b) => a.label.localeCompare(b.label));

export const PROJECT_CHALLENGES_BY_NATIONALITY_CHART_DATA = [
  ...generateGroupedChartDataBySegment(
    CHALLENGES_BY_COMPANY_NATIONALITY_DATA.bulgaria_bulgarian,
    "projectChallenges",
    "Bulgarian and operates in Bulgaria",
    BY_COMPANY_NATIONALITY.bulgaria_bulgarian.length // the length of the segment
  ),
  ...generateGroupedChartDataBySegment(
    CHALLENGES_BY_COMPANY_NATIONALITY_DATA.bulgaria_international,
    "projectChallenges",
    "Bulgarian and operates internationally",
    BY_COMPANY_NATIONALITY.bulgaria_international.length // the length of the segment
  ),
  ...generateGroupedChartDataBySegment(
    CHALLENGES_BY_COMPANY_NATIONALITY_DATA.multinational,
    "projectChallenges",
    "Multinational",
    BY_COMPANY_NATIONALITY.multinational.length // the length of the segment
  ),
].sort((a, b) => a.label.localeCompare(b.label));
