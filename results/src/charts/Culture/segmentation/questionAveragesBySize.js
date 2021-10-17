import { BY_SIZE } from "../../segmentationData";

const calculateQuestionAveragePerSegment = (segment, questionKey) => {
  const total = segment.reduce(
    (total, response) => total + +response[questionKey],
    0
  );
  return (total / segment.length).toFixed(3);
};

const calculateQuestionAveragesBySize = (questionKey) => {
  return {
    "1-19": calculateQuestionAveragePerSegment(BY_SIZE["1-19"], questionKey),
    "20-99": calculateQuestionAveragePerSegment(BY_SIZE["20-99"], questionKey),
    "100-249": calculateQuestionAveragePerSegment(
      BY_SIZE["100-249"],
      questionKey
    ),
    "250-499": calculateQuestionAveragePerSegment(
      BY_SIZE["250-499"],
      questionKey
    ),
    "500-1999": calculateQuestionAveragePerSegment(
      BY_SIZE["500-1999"],
      questionKey
    ),
    "More than 2000": calculateQuestionAveragePerSegment(
      BY_SIZE["More than 2000"],
      questionKey
    ),
  };
};

export const CULTURE_QUESTION_AVERAGES_BY_SIZE = {
  CUL_MULTEAM: calculateQuestionAveragesBySize("CUL_MULTEAM"),
  CUL_COLLAB: calculateQuestionAveragesBySize("CUL_COLLAB"),
  CUL_COMMUN: calculateQuestionAveragesBySize("CUL_COMMUN"),
  CUL_INITI: calculateQuestionAveragesBySize("CUL_INITI"),
  CUL_TECKSTA: calculateQuestionAveragesBySize("CUL_TECKSTA"),
  CUL_SHARESP: calculateQuestionAveragesBySize("CUL_SHARESP"),
  CUL_FAILOP: calculateQuestionAveragesBySize("CUL_FAILOP"),
  CUL_DIFPERS: calculateQuestionAveragesBySize("CUL_DIFPERS"),
  CUL_OUTCOMM: calculateQuestionAveragesBySize("CUL_OUTCOMM"),
  CUL_TEAMCON: calculateQuestionAveragesBySize("CUL_TEAMCON"),
  CUL_TOTAL: calculateQuestionAveragesBySize("CUL_TOTAL"),
};
