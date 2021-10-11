const fs = require("fs");

const processProfessionalData = require("./processors/processProfessionalData");
const processPerceptionData = require("./processors/processPerceptionData");
const processMaturityData = require("./processors/processMaturityData");
const processCultureStep = require("./processors/processCultureData");
const processBenefitsStep = require("./processors/processBenefits");
const processChallengesStep = require("./processors/processChallenges");
const combineRelevantData = require("./processors/combineRelevantData");

const allResponsesRaw = fs.readFileSync("allResponses.json");

const INVALID_DATA = ["613e6d369458375fc594cd43"];
const allResponses = JSON.parse(allResponsesRaw).filter(
  (response) => !INVALID_DATA.includes(response._id)
);

console.log("Responses count: ", allResponses.length);

const professionalStepData = processProfessionalData(allResponses);
const maturityStepData = processMaturityData(allResponses);
const cultureStepData = processCultureStep(allResponses);

const perceptionStepData = processPerceptionData(allResponses);
const benefitsStepData = processBenefitsStep(allResponses);
const challengesStepData = processChallengesStep(allResponses);

combineRelevantData({
  professionalStep: professionalStepData,
  cultureStep: cultureStepData,
  maturityStep: maturityStepData,
  perceptionStep: perceptionStepData,
  benefitsStep: benefitsStepData,
  challengesStep: challengesStepData,
});

console.log("Success!");
