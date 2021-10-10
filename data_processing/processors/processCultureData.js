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
      multidiscplinaryTeams: CUL_MULTEAM = "0",
      collaboration: CUL_COLLAB = "0",
      communication: CUL_COMMUN = "0",
      initiative: CUL_INITI = "0",
      technologyStack: CUL_TECKSTA = "0",
      sharedResponsibility: CUL_SHARESP = "0",
      failures: CUL_FAILOP = "0",
      differentPerspective: CUL_DIFPERS = "0",
      outsideCommunication: CUL_OUTCOMM = "0",
      teamConnection: CUL_TEAMCON = "0",
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
      CUL_AVG: (total/10).toFixed(2),
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
