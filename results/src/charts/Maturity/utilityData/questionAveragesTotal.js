import allData from "../../allDataJSON.json";

const calculateQuestionAverage = (questionKey) => {
  const total = allData.reduce(
    (total, response) => total + +response[questionKey],
    0
  );
  return (total / allData.length).toFixed(3);
};

export const MATURITY_QUESTION_AVERAGES_TOTAL = {
  MAT_LEADTIME: calculateQuestionAverage("MAT_LEADTIME"),
  MAT_DEPFRE: calculateQuestionAverage("MAT_DEPFRE"),
  MAT_TIMRES: calculateQuestionAverage("MAT_TIMRES"),
  MAT_CHAFAIL: calculateQuestionAverage("MAT_CHAFAIL"),
  MAT_TOOLINC_SCORE: calculateQuestionAverage("MAT_TOOLINC_SCORE"),
  MAT_TOOLRES: calculateQuestionAverage("MAT_TOOLRES"),
  MAT_DEMDEP: calculateQuestionAverage("MAT_DEMDEP"),
  MAT_BISHDEP: calculateQuestionAverage("MAT_BISHDEP"),
  MAT_COMAUTO: calculateQuestionAverage("MAT_COMAUTO"),
  MAT_FAILTEST: calculateQuestionAverage("MAT_FAILTEST"),
  MAT_ACTAUT: calculateQuestionAverage("MAT_ACTAUT"),
  MAT_PRODINC: calculateQuestionAverage("MAT_PRODINC"),
  MAT_MONISS: calculateQuestionAverage("MAT_MONISS"),
  MAT_MONMET: calculateQuestionAverage("MAT_MONMET"),
  MAT_SECREW: calculateQuestionAverage("MAT_SECREW"),
  MAT_DOCUME: calculateQuestionAverage("MAT_DOCUME"),
  MAT_DEPSTA: calculateQuestionAverage("MAT_DEPSTA"),
  MAT_TOTAL: calculateQuestionAverage("MAT_TOTAL"),
};

console.log(
  "MATURITY_QUESTION_AVERAGES_TOTAL: ",
  MATURITY_QUESTION_AVERAGES_TOTAL
);

const NO_TOOLCHAIN_INCLUDES = allData.filter(
  (response) => response.MAT_TOOLINC_SCORE === 0
).length;
console.log("NO_TOOLCHAIN_INCLUDES", NO_TOOLCHAIN_INCLUDES);

const AVERAGE_TOOLCHAIN_COMPONENTS_COUNT =
  allData.reduce((total, response) => {
    return total + response.MAT_TOOLINC.length;
  }, 0) / allData.length;

console.log(
  "AVERAGE_TOOLCHAIN_COMPONENTS_COUNT: ",
  AVERAGE_TOOLCHAIN_COMPONENTS_COUNT
);

const TOOLCHAIN_COMPONENTS_COUNT = allData.reduce((total, response) => {
  total[response.MAT_TOOLINC.length] =
    total[response.MAT_TOOLINC.length] !== undefined
      ? ++total[response.MAT_TOOLINC.length]
      : 1;
  return total;
}, {});
console.log("TOOLCHAIN_COMPONENTS_COUNT: ", TOOLCHAIN_COMPONENTS_COUNT);

const CAN_DEMDEP_BUT_DOESNT = allData.filter(
  (response) => +response.MAT_DEMDEP > 3 && +response.MAT_DEPFRE < 8
).length;

console.log("CAN_DEMDEP_BUT_DOESNT: ", CAN_DEMDEP_BUT_DOESNT);
