const ObjectsToCsv = require("objects-to-csv");
const fs = require("fs");

const POSITION_ANSWERS = {
  1: "Software Development",
  2: "Cloud/DevOps",
  3: "Leadership/Management",
  4: "Design",
  5: "Testing",
  6: "Other",
};

const EXPERIENCE_ANSWERS = {
  1: "0-2",
  2: "3-5",
  3: "6-10",
  4: "11-20",
  5: "More than 20",
};

const NAT_ANSWERS = {
  1: "Bulgarian and operates in Bulgaria",
  2: "Bulgarian and operates internationally",
  3: "Multinational",
};

const SIZE_ANSWERS = {
  1: "1-19",
  2: "20-99",
  3: "100-249",
  4: "250-499",
  5: "500-1999",
  6: "More than 2000",
};

const ORI_ANSWERS = {
  1: "Service",
  2: "Product",
  3: "Mixed",
};

const processProfessionalStep = (responses) => {
  const processProfessionalStepData = responses.map((response) => {
    const {
      companyNationality,
      companyOrientation,
      companySize,
      experience,
      position,
    } = response.professional;

    return {
      _ID: response._id,
      PRO_COMNAT: companyNationality,
      PRO_COMORI: companyOrientation,
      PRO_COMSIZE: companySize,
      PRO_EXP: experience,
      PRO_POS: +position > 3 ? "6" : position, // combine Testing, Design and Other
    };
  });

  new ObjectsToCsv(processProfessionalStepData).toDisk(
    "./dist/professional/professional.csv",
    {
      allColumns: true,
    }
  );

  const jsonData = JSON.stringify(processProfessionalStepData);
  fs.writeFileSync("./dist/professional/professionalDataJSON.json", jsonData);

  const statistics = {
    PRO_COMNAT: {},
    PRO_COMORI: {},
    PRO_COMSIZE: {},
    PRO_EXP: {},
    PRO_POS: {},
  };

  processProfessionalStepData.forEach((response) => {
    const POS_ANSWER = POSITION_ANSWERS[response.PRO_POS];
    statistics.PRO_POS = {
      ...statistics.PRO_POS,
      [POS_ANSWER]: statistics.PRO_POS[POS_ANSWER]
        ? statistics.PRO_POS[POS_ANSWER] + 1
        : 1,
    };

    const EXP_ANSWER = EXPERIENCE_ANSWERS[response.PRO_EXP];
    statistics.PRO_EXP = {
      ...statistics.PRO_EXP,
      [EXP_ANSWER]: statistics.PRO_EXP[EXP_ANSWER]
        ? statistics.PRO_EXP[EXP_ANSWER] + 1
        : 1,
    };

    const COMNAT_ANSWER = NAT_ANSWERS[response.PRO_COMNAT];
    statistics.PRO_COMNAT = {
      ...statistics.PRO_COMNAT,
      [COMNAT_ANSWER]: statistics.PRO_COMNAT[COMNAT_ANSWER]
        ? statistics.PRO_COMNAT[COMNAT_ANSWER] + 1
        : 1,
    };

    const COMSIZE_ANSWER = SIZE_ANSWERS[response.PRO_COMSIZE];
    statistics.PRO_COMSIZE = {
      ...statistics.PRO_COMSIZE,
      [COMSIZE_ANSWER]: statistics.PRO_COMSIZE[COMSIZE_ANSWER]
        ? statistics.PRO_COMSIZE[COMSIZE_ANSWER] + 1
        : 1,
    };

    const COMORI_ANSWER = ORI_ANSWERS[response.PRO_COMORI];
    statistics.PRO_COMORI = {
      ...statistics.PRO_COMORI,
      [COMORI_ANSWER]: statistics.PRO_COMORI[COMORI_ANSWER]
        ? statistics.PRO_COMORI[COMORI_ANSWER] + 1
        : 1,
    };
  });

  const statisticsJSON = JSON.stringify(statistics);
  fs.writeFileSync(
    "./dist/professional/professionalStatistics.json",
    statisticsJSON
  );

  return processProfessionalStepData;
};

module.exports = processProfessionalStep;
