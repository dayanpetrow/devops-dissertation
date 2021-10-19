import { BY_COMPANY_NATIONALITY, BY_ORIENTATION } from "../../segmentationData";

const calculateQuestionAveragePerSegment = (segment, questionKey) => {
  const total = segment.reduce(
    (total, response) => total + +response[questionKey],
    0
  );
  return (total / segment.length).toFixed(3);
};

const calculateQuestionAveragesByNationality = (questionKey) => {
  return {
    BG_BG: calculateQuestionAveragePerSegment(
      BY_COMPANY_NATIONALITY.bulgaria_bulgarian,
      questionKey
    ),
    BG_INT: calculateQuestionAveragePerSegment(
      BY_COMPANY_NATIONALITY.bulgaria_international,
      questionKey
    ),
    MULTINATIONAL: calculateQuestionAveragePerSegment(
      BY_COMPANY_NATIONALITY.multinational,
      questionKey
    ),
  };
};

export const MATURITY_QUESTION_AVERAGES_BY_NATIONALITY = {
  MAT_LEADTIME: calculateQuestionAveragesByNationality("MAT_LEADTIME"),
  MAT_DEPFRE: calculateQuestionAveragesByNationality("MAT_DEPFRE"),
  MAT_TIMRES: calculateQuestionAveragesByNationality("MAT_TIMRES"),
  MAT_CHAFAIL: calculateQuestionAveragesByNationality("MAT_CHAFAIL"),
  MAT_TOOLINC_SCORE:
    calculateQuestionAveragesByNationality("MAT_TOOLINC_SCORE"),
  MAT_DEMDEP: calculateQuestionAveragesByNationality("MAT_DEMDEP"),
  MAT_BISHDEP: calculateQuestionAveragesByNationality("MAT_BISHDEP"),
  MAT_COMAUTO: calculateQuestionAveragesByNationality("MAT_COMAUTO"),
  MAT_FAILTEST: calculateQuestionAveragesByNationality("MAT_FAILTEST"),
  MAT_ACTAUT: calculateQuestionAveragesByNationality("MAT_ACTAUT"),
  MAT_PRODINC: calculateQuestionAveragesByNationality("MAT_PRODINC"),
  MAT_MONISS: calculateQuestionAveragesByNationality("MAT_MONISS"),
  MAT_MONMET: calculateQuestionAveragesByNationality("MAT_MONMET"),
  MAT_SECREW: calculateQuestionAveragesByNationality("MAT_SECREW"),
  MAT_DOCUME: calculateQuestionAveragesByNationality("MAT_DOCUME"),
  MAT_DEPSTA: calculateQuestionAveragesByNationality("MAT_DEPSTA"),
  MAT_TOTAL: calculateQuestionAveragesByNationality("MAT_TOTAL"),
};

console.log(
  "MATURITY_QUESTION_AVERAGES_BY_NATIONALITY: ",
  MATURITY_QUESTION_AVERAGES_BY_NATIONALITY
);

const calculateQuestionAveragesByOrientation = (questionKey) => {
  return {
    product: calculateQuestionAveragePerSegment(
      BY_ORIENTATION.product,
      questionKey
    ),
    service: calculateQuestionAveragePerSegment(
      BY_ORIENTATION.service,
      questionKey
    ),
    mixed: calculateQuestionAveragePerSegment(
      BY_ORIENTATION.mixed,
      questionKey
    ),
  };
};

export const MATURITY_QUESTION_AVERAGES_BY_ORIENTATION = {
  MAT_LEADTIME: calculateQuestionAveragesByOrientation("MAT_LEADTIME"),
  MAT_DEPFRE: calculateQuestionAveragesByOrientation("MAT_DEPFRE"),
  MAT_TIMRES: calculateQuestionAveragesByOrientation("MAT_TIMRES"),
  MAT_CHAFAIL: calculateQuestionAveragesByOrientation("MAT_CHAFAIL"),
  MAT_TOOLINC_SCORE:
    calculateQuestionAveragesByOrientation("MAT_TOOLINC_SCORE"),
  MAT_DEMDEP: calculateQuestionAveragesByOrientation("MAT_DEMDEP"),
  MAT_BISHDEP: calculateQuestionAveragesByOrientation("MAT_BISHDEP"),
  MAT_COMAUTO: calculateQuestionAveragesByOrientation("MAT_COMAUTO"),
  MAT_FAILTEST: calculateQuestionAveragesByOrientation("MAT_FAILTEST"),
  MAT_ACTAUT: calculateQuestionAveragesByOrientation("MAT_ACTAUT"),
  MAT_PRODINC: calculateQuestionAveragesByOrientation("MAT_PRODINC"),
  MAT_MONISS: calculateQuestionAveragesByOrientation("MAT_MONISS"),
  MAT_MONMET: calculateQuestionAveragesByOrientation("MAT_MONMET"),
  MAT_SECREW: calculateQuestionAveragesByOrientation("MAT_SECREW"),
  MAT_DOCUME: calculateQuestionAveragesByOrientation("MAT_DOCUME"),
  MAT_DEPSTA: calculateQuestionAveragesByOrientation("MAT_DEPSTA"),
  MAT_TOTAL: calculateQuestionAveragesByOrientation("MAT_TOTAL"),
};

console.log(
  "MATURITY_QUESTION_AVERAGES_BY_ORIENTATION: ",
  MATURITY_QUESTION_AVERAGES_BY_ORIENTATION
);
