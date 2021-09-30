const ObjectsToCsv = require("objects-to-csv");
const fs = require("fs");

const combineRelevantData = ({
  professionalStep,
  cultureStep,
  maturityStep,
}) => {
  const cultureHashmap = cultureStep.reduce((hashmap, response) => {
    hashmap[response._ID] = { ...response };
    return hashmap;
  }, {});

  const maturityHashmap = maturityStep.reduce((hashmap, response) => {
    hashmap[response._ID] = { ...response };
    return hashmap;
  }, {});

  const combinedData = professionalStep.map((response) => {
    return {
      ...response,
      CUL_TOTAL: cultureHashmap[response._ID].CUL_TOTAL,
      MAT_TOTAL: maturityHashmap[response._ID].MAT_TOTAL,
    };
  });

  new ObjectsToCsv(combinedData).toDisk("./dist/combined/combined.csv", {
    allColumns: true,
  });

  const combinedDataJSON = JSON.stringify(combinedData);
  fs.writeFileSync("./dist/combined/combinedDataJSON.json", combinedDataJSON);
};

module.exports = combineRelevantData;
