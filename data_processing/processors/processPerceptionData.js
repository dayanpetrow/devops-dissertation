const ObjectsToCsv = require("objects-to-csv");
const fs = require("fs");

const agileAnswers = {
  0: "DevOps has no relation with Agile",
  1: "DevOps aims to replace Agile",
  2: "DevOps extends Agile",
  3: "I don't know",
};

const processPerceptionStep = (responses) => {
  const agileRelationStatistics = {};
  const definitionWords = {};
  const commonWords = {};

  const perceptionStepData = responses.map((response) => {
    const { agileRelation = "NA", devOpsDefinition = "" } = response.perception;

    const answerValue = agileAnswers[agileRelation] || "NA";
    agileRelationStatistics[answerValue] =
      agileRelationStatistics[answerValue] !== undefined
        ? (agileRelationStatistics[answerValue] += 1)
        : 1;

    devOpsDefinition.split(" ").forEach((word) => {
      if (word.length >= 3) {
        const formattedWord = word.toLowerCase();
        definitionWords[formattedWord] = definitionWords[formattedWord]
          ? definitionWords[formattedWord] + 1
          : 1;

        [
          "deve",
          "opera",
          "proc",
          "prac",
          "princ",
          "comb",
          "cd",
          "pipe",
          "autom",
          "infra",
          "depl",
          "deli",
          "moni",
          "cont",
          "softw",
          "colla",
          "commu",
          "cult",
          "phil",
          "mind",
          "think",
          "feedback",
          "cust",
          "qua",
          "conf",
          "cloud",
          "agil",
          "fast",
          "quick",
          "veloc",
          "impr",
          "tool",
          "code",
          "relea",
          "prod",
          "build",
          "test",
          "secu",
        ].forEach((commonWord) => {
          if (formattedWord.includes(commonWord)) {
            commonWords[commonWord] = commonWords[commonWord]
              ? commonWords[commonWord].concat(formattedWord)
              : [formattedWord];
          }
        });
      }
    });

    return {
      _ID: response._id,
      PER_AGIREL: agileRelation,
      PER_DEFINI: devOpsDefinition,
    };
  });

  new ObjectsToCsv(perceptionStepData).toDisk(
    "./dist/perception/perception.csv",
    {
      allColumns: true,
    }
  );

  const jsonData = JSON.stringify(perceptionStepData);
  fs.writeFileSync("./dist/perception/perceptionDataJSON.json", jsonData);

  const statistics = JSON.stringify({
    agile: agileRelationStatistics,
    definition: definitionWords,
    commonWords,
  });
  fs.writeFileSync("./dist/perception/perceptionStatistics.json", statistics);
};

module.exports = processPerceptionStep;