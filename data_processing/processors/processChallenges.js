const ObjectsToCsv = require("objects-to-csv");
const fs = require("fs");

const processChallengesStep = (responses) => {
  const hashmap = {
    organizationalChallenges: {},
    teamChallenges: {},
    otherChallenges: [],
  };

  const challengesStepData = responses.map((response) => {
    const {
      organizationalChallenges = [],
      teamChallenges = [],
      otherBenefits: otherChallenges = "",
    } = response.challenges;

    organizationalChallenges.forEach(
      (challenge) =>
        (hashmap.organizationalChallenges[challenge] =
          hashmap.organizationalChallenges[challenge] !== undefined
            ? ++hashmap.organizationalChallenges[challenge]
            : 1)
    );
    teamChallenges.forEach(
      (challenge) =>
        (hashmap.teamChallenges[challenge] =
          hashmap.teamChallenges[challenge] !== undefined
            ? ++hashmap.teamChallenges[challenge]
            : 1)
    );

    if (otherChallenges !== "") {
      hashmap.otherChallenges = [...hashmap.otherChallenges, otherChallenges];
    }

    return {
      _ID: response._id,
      CHA_ORGA: organizationalChallenges,
      CHA_TEAM: teamChallenges,
      CHA_OTHER: otherChallenges,
    };
  });

  const jsonData = JSON.stringify(challengesStepData);
  fs.writeFileSync("./dist/challenges/challengesDataJSON.json", jsonData);

  const statisticsJSON = JSON.stringify(hashmap);
  fs.writeFileSync(
    "./dist/challenges/challengesStatistics.json",
    statisticsJSON
  );

  return challengesStepData;
};

module.exports = processChallengesStep;
