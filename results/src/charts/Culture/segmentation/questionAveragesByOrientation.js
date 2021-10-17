import { BY_ORIENTATION } from "../../segmentationData";

const calculateQuestionAveragePerSegment = (segment, questionKey) => {
  const total = segment.reduce(
    (total, response) => total + +response[questionKey],
    0
  );
  return (total / segment.length).toFixed(3);
};

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

export const CULTURE_QUESTION_AVERAGES_BY_ORIENTATION = {
  CUL_MULTEAM: calculateQuestionAveragesByOrientation("CUL_MULTEAM"),
  CUL_COLLAB: calculateQuestionAveragesByOrientation("CUL_COLLAB"),
  CUL_COMMUN: calculateQuestionAveragesByOrientation("CUL_COMMUN"),
  CUL_INITI: calculateQuestionAveragesByOrientation("CUL_INITI"),
  CUL_TECKSTA: calculateQuestionAveragesByOrientation("CUL_TECKSTA"),
  CUL_SHARESP: calculateQuestionAveragesByOrientation("CUL_SHARESP"),
  CUL_FAILOP: calculateQuestionAveragesByOrientation("CUL_FAILOP"),
  CUL_DIFPERS: calculateQuestionAveragesByOrientation("CUL_DIFPERS"),
  CUL_OUTCOMM: calculateQuestionAveragesByOrientation("CUL_OUTCOMM"),
  CUL_TEAMCON: calculateQuestionAveragesByOrientation("CUL_TEAMCON"),
  CUL_TOTAL: calculateQuestionAveragesByOrientation("CUL_TOTAL"),
};
