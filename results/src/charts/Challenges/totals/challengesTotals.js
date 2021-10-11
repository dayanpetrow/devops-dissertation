import data from "./challengesStatistics.json";

export const ORGANIZATION_CHALLENGES_TOTALS_DATA = Object.keys(
  data.organizationalChallenges
)
  .map((challenge) => ({
    label: challenge,
    count: data.organizationalChallenges[challenge],
  }))
  .sort((a, b) => b.count - a.count);

export const TEAM_CHALLENGES_TOTALS_DATA = Object.keys(data.teamChallenges)
  .map((challenge) => ({
    label: challenge,
    count: data.teamChallenges[challenge],
  }))
  .sort((a, b) => b.count - a.count);
