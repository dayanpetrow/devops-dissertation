const ObjectsToCsv = require("objects-to-csv");
const fs = require("fs");

const SCALE_ANSWERS = {
  1: "Strongly Disagree",
  2: "Disagree",
  3: "Neutral or N/A",
  4: "Agree",
  5: "Strongly Agree",
};

const CULTURE_KEYS = [
  "CUL_MULTEAM",
  "CUL_COLLAB",
  "CUL_COMMUN",
  "CUL_INITI",
  "CUL_TECKSTA",
  "CUL_SHARESP",
  "CUL_FAILOP",
  "CUL_DIFPERS",
  "CUL_OUTCOMM",
  "CUL_TEAMCON",
];

const processCultureStep = (responses) => {
  const statistics = {
    CUL_MULTEAM: {},
    CUL_COLLAB: {},
    CUL_COMMUN: {},
    CUL_INITI: {},
    CUL_TECKSTA: {},
    CUL_SHARESP: {},
    CUL_FAILOP: {},
    CUL_DIFPERS: {},
    CUL_OUTCOMM: {},
    CUL_TEAMCON: {},
    CUL_TOTAL: {},
    CUL_AVG: {},
  };

  const cultureStepData = responses.map((response) => {
    const {
      multidiscplinaryTeams: CUL_MULTEAM = "3",
      collaboration: CUL_COLLAB = "3",
      communication: CUL_COMMUN = "3",
      initiative: CUL_INITI = "3",
      technologyStack: CUL_TECKSTA = "3",
      sharedResponsibility: CUL_SHARESP = "3",
      failures: CUL_FAILOP = "3",
      differentPerspective: CUL_DIFPERS = "3",
      outsideCommunication: CUL_OUTCOMM = "3",
      teamConnection: CUL_TEAMCON = "3",
    } = response.culture;

    return {
      _ID: response._id,
      CUL_MULTEAM,
      CUL_COLLAB,
      CUL_COMMUN,
      CUL_INITI,
      CUL_TECKSTA,
      CUL_SHARESP,
      CUL_FAILOP,
      CUL_DIFPERS,
      CUL_OUTCOMM,
      CUL_TEAMCON,
    };
  });

  const withTotals = cultureStepData.map((response) => {
    let total = CULTURE_KEYS.reduce((a, b) => a + Number(response[b]), 0);

    return {
      ...response,
      CUL_TOTAL: total,
    };
  });

  new ObjectsToCsv(withTotals).toDisk("./dist/culture/culture.csv", {
    allColumns: true,
  });

  // Generate statistics
  withTotals.forEach((response) => {
    CULTURE_KEYS.forEach((_key) => {
      const ANSWER = SCALE_ANSWERS[response[_key]];
      statistics[_key] = {
        ...statistics[_key],
        [ANSWER]: statistics[_key][ANSWER] ? statistics[_key][ANSWER] + 1 : 1,
      };
    });

    statistics["CUL_TOTAL"] = {
      ...statistics["CUL_TOTAL"],
      [response.CUL_TOTAL]: statistics["CUL_TOTAL"][response.CUL_TOTAL]
        ? statistics["CUL_TOTAL"][response.CUL_TOTAL] + 1
        : 1,
    };

    statistics["CUL_AVG"] = {
      ...statistics["CUL_AVG"],
      [response.CUL_AVG]: statistics["CUL_AVG"][response.CUL_AVG]
        ? statistics["CUL_AVG"][response.CUL_AVG] + 1
        : 1,
    };
  });

  const cultureStatistics = JSON.stringify(statistics);
  fs.writeFileSync("./dist/culture/cultureStatistics.json", cultureStatistics);

  const cultureDataJSON = JSON.stringify(withTotals);
  fs.writeFileSync("./dist/culture/cultureDataJSON.json", cultureDataJSON);

  return withTotals;
};

module.exports = processCultureStep;
