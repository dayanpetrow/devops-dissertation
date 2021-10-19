const ObjectsToCsv = require("objects-to-csv");
const fs = require("fs");

const LEADTIME_ANSWERS = {
  0: "More than one month",
  2: "One week to one month",
  4: "One day to one week",
  6: "Less than one day",
  8: "Less than one hour",
};

const DEPFRE_ANSWERS = {
  8: "Multiple deploys per day or on demand",
  6: "Once per day",
  4: "Multiple deploys per week",
  2: "Between once per week and once per month",
  0: "Fewer than once per month",
};

const TIMRES_ANSWERS = {
  0: "More than a month",
  2: "One week to one month",
  4: "One day to one week",
  6: "Less than one day",
  8: "Less than one hour",
};

const CHAFAIL_ANSWERS = {
  10: "0–15%",
  8: "16–30%",
  6: "31–45%",
  4: "46–60%",
  2: "61–75%",
  0: "76–100%",
};

const TOOLRES_ANSWERS = {
  4: "My team has full autonomy to choose and configure its own toolchain",
  3: "The toolchain is maintained by a centralized team within my company",
  2: "My team uses a toolchain with preconfigured scripts, and we have the ability to override it",
  1: "Other",
};

const TOOLCHAIN_ANSWERS = [
  "Automated unit tests",
  "Automated build",
  "Automated deployment to testing environments",
  "Automated deployment to production",
  "Automated performance testing",
  "Automated security testing",
  "Automated acceptance testing",
  "Integration with monitoring tools",
  "Integration with logging tools",
];

const TOOLCHAIN_SCORES = {
  "Automated build": 1,
  "Automated unit tests": 1,
  "Automated deployment to testing environments": 1,
  "Automated deployment to production": 1,
  "Integration with monitoring tools": 1,
  "Integration with logging tools": 1,
  "Automated acceptance testing": 2,
  "Automated performance testing": 2,
  "Automated security testing": 2,
};

const SCALE_ANSWERS = {
  1: "Strongly Disagree",
  2: "Disagree",
  3: "Neutral or N/A",
  4: "Agree",
  5: "Strongly Agree",
};

const processMaturityStep = (responses) => {
  const statistics = {
    MAT_LEADTIME: {},
    MAT_DEPFRE: {},
    MAT_TIMRES: {},
    MAT_CHAFAIL: {},
    MAT_TOOLINC: {},
    MAT_TOOLINC_SCORE: {},
    MAT_TOOLRES: {},
    MAT_DEMDEP: {},
    MAT_BISHDEP: {},
    MAT_COMAUTO: {},
    MAT_FAILTEST: {},
    MAT_ACTAUT: {},
    MAT_PRODINC: {},
    MAT_MONISS: {},
    MAT_MONMET: {},
    MAT_SECREW: {},
    MAT_DOCUME: {},
    MAT_DEPSTA: {},
    MAT_TOTAL: {},
    MAT_AVG: {},
  };

  const maturityStepData = responses.map((response) => {
    const {
      leadTime: MAT_LEADTIME = 0,
      deploymentFrequency: MAT_DEPFRE = 0,
      timeToRestore: MAT_TIMRES = 0,
      changeFailPercentage: MAT_CHAFAIL = 0,
      toolchainIncludes: MAT_TOOLINC = [],
      toolchainResponsibility: MAT_TOOLRES = 0,
      onDemandDeployment: MAT_DEMDEP = 3,
      businessHoursDeployments: MAT_BISHDEP = 3,
      commitAutomation: MAT_COMAUTO = 3,
      failingTests: MAT_FAILTEST = 3,
      activelyAutomates: MAT_ACTAUT = 3,
      productionIncidents: MAT_PRODINC = 3,
      monitoringIssues: MAT_MONISS = 3,
      monitorMetrics: MAT_MONMET = 3,
      securityReviews: MAT_SECREW = 3,
      documentation: MAT_DOCUME = 3,
      deployableState: MAT_DEPSTA = 3,
    } = response.maturity;

    const MAT_TOOLINC_SCORE = MAT_TOOLINC.reduce(
      (a, b) => a + Number(TOOLCHAIN_SCORES[b] || 0),
      0
    );

    return {
      _ID: response._id,
      MAT_LEADTIME,
      MAT_DEPFRE,
      MAT_TIMRES,
      MAT_CHAFAIL,
      MAT_TOOLINC,
      MAT_TOOLRES,
      MAT_DEMDEP,
      MAT_BISHDEP,
      MAT_COMAUTO,
      MAT_FAILTEST,
      MAT_ACTAUT,
      MAT_PRODINC,
      MAT_MONISS,
      MAT_MONMET,
      MAT_SECREW,
      MAT_DOCUME,
      MAT_DEPSTA,
      MAT_TOOLINC_SCORE,
    };
  });

  const withTotals = maturityStepData.map((response) => {
    const total = [
      "MAT_LEADTIME",
      "MAT_DEPFRE",
      "MAT_TIMRES",
      "MAT_CHAFAIL",
      "MAT_TOOLRES",
      "MAT_DEMDEP",
      "MAT_BISHDEP",
      "MAT_COMAUTO",
      "MAT_FAILTEST",
      "MAT_ACTAUT",
      "MAT_PRODINC",
      "MAT_MONISS",
      "MAT_MONMET",
      "MAT_SECREW",
      "MAT_DOCUME",
      "MAT_DEPSTA",
      "MAT_TOOLINC_SCORE",
    ].reduce((a, b) => a + Number(response[b]), 0);

    return {
      ...response,
      MAT_TOTAL: total,
      MAT_AVG: (total / 17).toFixed(2),
    };
  });

  const csvData = withTotals.map((response) => {
    const copyResponse = { ...response };
    delete copyResponse["MAT_TOOLINC"];
    return copyResponse;
  });

  new ObjectsToCsv(csvData).toDisk("./dist/maturity/maturity.csv", {
    allColumns: true,
  });

  // generate statistics
  withTotals.forEach((response) => {
    /** 1. HANDLE MAT_LEADTIME STATISTICS (leadTime) */
    const LEADTIME_ANSWER = LEADTIME_ANSWERS[response.MAT_LEADTIME];
    statistics.MAT_LEADTIME = {
      ...statistics.MAT_LEADTIME,
      [LEADTIME_ANSWER]: statistics.MAT_LEADTIME[LEADTIME_ANSWER]
        ? statistics.MAT_LEADTIME[LEADTIME_ANSWER] + 1
        : 1,
    };

    /** 2. HANDLE MAT_DEPFRE STATISTICS (deploymentFrequency) */
    const DEPFRE_ANSWER = DEPFRE_ANSWERS[response.MAT_DEPFRE];
    statistics.MAT_DEPFRE = {
      ...statistics.MAT_DEPFRE,
      [DEPFRE_ANSWER]: statistics.MAT_DEPFRE[DEPFRE_ANSWER]
        ? statistics.MAT_DEPFRE[DEPFRE_ANSWER] + 1
        : 1,
    };

    /** 3. HANDLE MAT_TIMRES STATISTICS (timeToRestore) */
    const TIMRES_ANSWER = TIMRES_ANSWERS[response.MAT_TIMRES];
    statistics.MAT_TIMRES = {
      ...statistics.MAT_TIMRES,
      [TIMRES_ANSWER]: statistics.MAT_TIMRES[TIMRES_ANSWER]
        ? statistics.MAT_TIMRES[TIMRES_ANSWER] + 1
        : 1,
    };

    /** 4. HANDLE MAT_CHAFAIL STATISTICS (changeFailPercentage) */
    const CHAFAIL_ANSWER = CHAFAIL_ANSWERS[response.MAT_CHAFAIL];
    statistics.MAT_CHAFAIL = {
      ...statistics.MAT_CHAFAIL,
      [CHAFAIL_ANSWER]: statistics.MAT_CHAFAIL[CHAFAIL_ANSWER]
        ? statistics.MAT_CHAFAIL[CHAFAIL_ANSWER] + 1
        : 1,
    };

    /** 5. HANDLE MAT_TOOLRES STATISTICS (toolchainResponsibility) */
    const TOOLRES_ANSWER = TOOLRES_ANSWERS[response.MAT_TOOLRES];
    statistics.MAT_TOOLRES = {
      ...statistics.MAT_TOOLRES,
      [TOOLRES_ANSWER]: statistics.MAT_TOOLRES[TOOLRES_ANSWER]
        ? statistics.MAT_TOOLRES[TOOLRES_ANSWER] + 1
        : 1,
    };

    /** 6. HANDLE MAT_TOOLRES STATISTICS (toolchainResponsibility) */
    response.MAT_TOOLINC &&
      response.MAT_TOOLINC.forEach((tool) => {
        statistics.MAT_TOOLINC = {
          ...statistics.MAT_TOOLINC,
          [tool]: statistics.MAT_TOOLINC[tool]
            ? statistics.MAT_TOOLINC[tool] + 1
            : 1,
        };
      });

    statistics["MAT_TOOLINC_SCORE"] = {
      ...statistics["MAT_TOOLINC_SCORE"],
      [response.MAT_TOOLINC_SCORE]: statistics["MAT_TOOLINC_SCORE"][
        response.MAT_TOOLINC_SCORE
      ]
        ? statistics["MAT_TOOLINC_SCORE"][response.MAT_TOOLINC_SCORE] + 1
        : 1,
    };

    [
      "MAT_DEMDEP",
      "MAT_BISHDEP",
      "MAT_COMAUTO",
      "MAT_FAILTEST",
      "MAT_ACTAUT",
      "MAT_PRODINC",
      "MAT_MONISS",
      "MAT_MONMET",
      "MAT_SECREW",
      "MAT_DOCUME",
      "MAT_DEPSTA",
    ].forEach((_key) => {
      const ANSWER = SCALE_ANSWERS[response[_key]];
      statistics[_key] = {
        ...statistics[_key],
        [ANSWER]: statistics[_key][ANSWER] ? statistics[_key][ANSWER] + 1 : 1,
      };
    });

    statistics["MAT_TOTAL"] = {
      ...statistics["MAT_TOTAL"],
      [response.MAT_TOTAL]: statistics["MAT_TOTAL"][response.MAT_TOTAL]
        ? statistics["MAT_TOTAL"][response.MAT_TOTAL] + 1
        : 1,
    };

    statistics["MAT_AVG"] = {
      ...statistics["MAT_AVG"],
      [response.MAT_AVG]: statistics["MAT_AVG"][response.MAT_AVG]
        ? statistics["MAT_AVG"][response.MAT_AVG] + 1
        : 1,
    };
  });

  const maturityStatistics = JSON.stringify(statistics);
  fs.writeFileSync(
    "./dist/maturity/maturityStatistics.json",
    maturityStatistics
  );

  const maturityDataJSON = JSON.stringify(withTotals);
  fs.writeFileSync("./dist/maturity/maturityDataJSON.json", maturityDataJSON);

  return withTotals;
};

module.exports = processMaturityStep;
