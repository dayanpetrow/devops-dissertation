import { BY_COMPANY_NATIONALITY } from "../../segmentationData";

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

export const CULTURE_QUESTION_AVERAGES_BY_NATIONALITY = {
  CUL_MULTEAM: calculateQuestionAveragesByNationality("CUL_MULTEAM"),
  CUL_COLLAB: calculateQuestionAveragesByNationality("CUL_COLLAB"),
  CUL_COMMUN: calculateQuestionAveragesByNationality("CUL_COMMUN"),
  CUL_INITI: calculateQuestionAveragesByNationality("CUL_INITI"),
  CUL_TECKSTA: calculateQuestionAveragesByNationality("CUL_TECKSTA"),
  CUL_SHARESP: calculateQuestionAveragesByNationality("CUL_SHARESP"),
  CUL_FAILOP: calculateQuestionAveragesByNationality("CUL_FAILOP"),
  CUL_DIFPERS: calculateQuestionAveragesByNationality("CUL_DIFPERS"),
  CUL_OUTCOMM: calculateQuestionAveragesByNationality("CUL_OUTCOMM"),
  CUL_TEAMCON: calculateQuestionAveragesByNationality("CUL_TEAMCON"),
  CUL_TOTAL: calculateQuestionAveragesByNationality("CUL_TOTAL"),
};
