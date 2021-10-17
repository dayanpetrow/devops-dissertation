const ObjectsToCsv = require("objects-to-csv");
const fs = require("fs");
const segmentData = require("./segmentData");

const combineRelevantData = ({
  professionalStep,
  cultureStep,
  maturityStep,
  perceptionStep,
  benefitsStep,
  challengesStep,
}) => {
  const cultureHashmap = cultureStep.reduce((hashmap, response) => {
    hashmap[response._ID] = { ...response };
    return hashmap;
  }, {});

  const maturityHashmap = maturityStep.reduce((hashmap, response) => {
    hashmap[response._ID] = { ...response };
    return hashmap;
  }, {});

  const perceptionHashmap = perceptionStep.reduce((hashmap, response) => {
    hashmap[response._ID] = { ...response };
    return hashmap;
  }, {});

  const benefitsHashmap = benefitsStep.reduce((hashmap, response) => {
    hashmap[response._ID] = { ...response };
    return hashmap;
  }, {});

  const challengesHashmap = challengesStep.reduce((hashmap, response) => {
    hashmap[response._ID] = { ...response };
    return hashmap;
  }, {});

  const combinedData = professionalStep.map((response) => {
    return {
      ...response,
      CUL_TOTAL: cultureHashmap[response._ID].CUL_TOTAL,
      CUL_AVG: cultureHashmap[response._ID].CUL_AVG,
      MAT_TOTAL: maturityHashmap[response._ID].MAT_TOTAL,
      MAT_AVG: maturityHashmap[response._ID].MAT_AVG,
      PER_AGIREL: perceptionHashmap[response._ID].PER_AGIREL,
    };
  });

  new ObjectsToCsv(combinedData).toDisk("./dist/combined/combined.csv", {
    allColumns: true,
  });

  const combinedDataJSON = JSON.stringify(combinedData);
  fs.writeFileSync("./dist/combined/combinedDataJSON.json", combinedDataJSON);

  const allData = professionalStep.map((response) => {
    return {
      ...response,
      ...perceptionHashmap[response._ID],
      ...maturityHashmap[response._ID],
      ...cultureHashmap[response._ID],
      ...benefitsHashmap[response._ID],
      ...challengesHashmap[response._ID],
    };
  });

  const allDataJSON = JSON.stringify(allData);
  fs.writeFileSync("./dist/combined/allDataJSON.json", allDataJSON);

  segmentData(allData);
};

module.exports = combineRelevantData;
