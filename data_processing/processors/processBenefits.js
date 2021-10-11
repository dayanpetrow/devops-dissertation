const ObjectsToCsv = require("objects-to-csv");
const fs = require("fs");

const processBenefitsStep = (responses) => {
  const hashmap = {
    organizationalBenefits: {},
    projectBenefits: {},
    otherBenefits: [],
  };

  const benefitsStepData = responses.map((response) => {
    const {
      organizationalBenefits = [],
      projectBenefits = [],
      otherBenefits = "",
    } = response.benefits;

    organizationalBenefits.forEach(
      (benefit) =>
        (hashmap.organizationalBenefits[benefit] =
          hashmap.organizationalBenefits[benefit] !== undefined
            ? ++hashmap.organizationalBenefits[benefit]
            : 1)
    );
    projectBenefits.forEach(
      (benefit) =>
        (hashmap.projectBenefits[benefit] =
          hashmap.projectBenefits[benefit] !== undefined
            ? ++hashmap.projectBenefits[benefit]
            : 1)
    );

    if (otherBenefits !== "") {
      hashmap.otherBenefits = [...hashmap.otherBenefits, otherBenefits];
    }

    return {
      _ID: response._id,
      BEN_ORGA: organizationalBenefits,
      BEN_PROJ: projectBenefits,
      BEN_OTHER: otherBenefits,
    };
  });

  const jsonData = JSON.stringify(benefitsStepData);
  fs.writeFileSync("./dist/benefits/benefitsDataJSON.json", jsonData);

  const statisticsJSON = JSON.stringify(hashmap);
  fs.writeFileSync("./dist/benefits/benefitsStatistics.json", statisticsJSON);

  return benefitsStepData;
};

module.exports = processBenefitsStep;
