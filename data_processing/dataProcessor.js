const fs = require("fs");

const processProfessionalData = require("./processors/processProfessionalData");
const processPerceptionData = require("./processors/processPerceptionData");
const processMaturityData = require("./processors/processMaturityData");
const processCultureStep = require("./processors/processCultureData");
const processBenefitsStep = require("./processors/processBenefits");
const processChallengesStep = require("./processors/processChallenges");
const combineRelevantData = require("./processors/combineRelevantData");

const allResponsesRaw = fs.readFileSync("allResponses.json");
const allResponses = JSON.parse(allResponsesRaw).data;

const professionalStepData = processProfessionalData(allResponses);
const maturityStepData = processMaturityData(allResponses);
const cultureStepData = processCultureStep(allResponses);

processPerceptionData(allResponses);
processBenefitsStep(allResponses);
processChallengesStep(allResponses);

combineRelevantData({
  professionalStep: professionalStepData,
  cultureStep: cultureStepData,
  maturityStep: maturityStepData,
});
