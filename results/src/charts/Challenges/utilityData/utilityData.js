import allData from "../../allDataJSON.json";

const TOTAL_SELECTED_ORGANIZATION_CHALLENGES = allData.reduce(
  (total, response) => total + response.CHA_ORGA.length,
  0
);
const AVERAGE_ORGANIZATION_CHALLENGES_COUNT =
  TOTAL_SELECTED_ORGANIZATION_CHALLENGES / allData.length;

console.log(
  "AVERAGE_ORGANIZATION_CHALLENGES_COUNT ",
  AVERAGE_ORGANIZATION_CHALLENGES_COUNT
);

const TOTAL_SELECTED_PROJECT_CHALLENGES = allData.reduce(
  (total, response) => total + response.CHA_TEAM.length,
  0
);

const AVERAGE_PROJECT_CHALLENGES_COUNT =
  TOTAL_SELECTED_PROJECT_CHALLENGES / allData.length;

console.log(
  "AVERAGE_PROJECT_CHALLENGES_COUNT ",
  AVERAGE_PROJECT_CHALLENGES_COUNT
);
