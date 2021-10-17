import allData from "../../allDataJSON.json";

const calculateQuestionAverage = (questionKey) => {
  const total = allData.reduce(
    (total, response) => total + +response[questionKey],
    0
  );
  return (total / allData.length).toFixed(3);
};

export const CULTURE_QUESTION_AVERAGES_TOTAL = {
  CUL_MULTEAM: calculateQuestionAverage("CUL_MULTEAM"),
  CUL_COLLAB: calculateQuestionAverage("CUL_COLLAB"),
  CUL_COMMUN: calculateQuestionAverage("CUL_COMMUN"),
  CUL_INITI: calculateQuestionAverage("CUL_INITI"),
  CUL_TECKSTA: calculateQuestionAverage("CUL_TECKSTA"),
  CUL_SHARESP: calculateQuestionAverage("CUL_SHARESP"),
  CUL_FAILOP: calculateQuestionAverage("CUL_FAILOP"),
  CUL_DIFPERS: calculateQuestionAverage("CUL_DIFPERS"),
  CUL_OUTCOMM: calculateQuestionAverage("CUL_OUTCOMM"),
  CUL_TEAMCON: calculateQuestionAverage("CUL_TEAMCON"),
  CUL_TOTAL: calculateQuestionAverage("CUL_TOTAL"),
};
