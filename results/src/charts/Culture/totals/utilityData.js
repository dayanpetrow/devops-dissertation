import allData from "../../allDataJSON.json";

// responses with lower CUL_MULTEAM than CUL_TECKSTA (not cross-functional teams that can choose their technology stack)
const BIGGER_TECKSTA_THAN_MULTEAM = allData
  .filter(
    (response) =>
      +response.CUL_MULTEAM < +response.CUL_TECKSTA && +response.CUL_TECKSTA > 3
  )
  .map((response) => ({
    CUL_MULTEAM: response.CUL_MULTEAM,
    CUL_TECKSTA: response.CUL_TECKSTA,
    PRO_COMNAT: response.PRO_COMNAT,
    PRO_COMSIZE: response.PRO_COMSIZE,
    PRO_COMORI: response.PRO_COMORI,
  }));

const BIGGER_MULTEAM_THAN_TECKSTA = allData
  .filter(
    (response) =>
      +response.CUL_MULTEAM > +response.CUL_TECKSTA &&
      +response.CUL_TECKSTA <= 3
  )
  .map((response) => ({
    CUL_MULTEAM: response.CUL_MULTEAM,
    CUL_TECKSTA: response.CUL_TECKSTA,
    PRO_COMNAT: response.PRO_COMNAT,
    PRO_COMSIZE: response.PRO_COMSIZE,
    PRO_COMORI: response.PRO_COMORI,
  }));

const BOTH_MULTEAM_AND_TECKSTA = allData
  .filter((response) => +response.CUL_MULTEAM > 3 && +response.CUL_TECKSTA > 3)
  .map((response) => ({
    CUL_MULTEAM: response.CUL_MULTEAM,
    CUL_TECKSTA: response.CUL_TECKSTA,
    PRO_COMNAT: response.PRO_COMNAT,
    PRO_COMSIZE: response.PRO_COMSIZE,
    PRO_COMORI: response.PRO_COMORI,
  }));

console.log("BOTH_MULTEAM_AND_TECKSTA: ", BOTH_MULTEAM_AND_TECKSTA);
console.log("BIGGER_TECKSTA_THAN_MULTEAM: ", BIGGER_TECKSTA_THAN_MULTEAM);
console.log("BIGGER_MULTEAM_THAN_TECKSTA: ", BIGGER_MULTEAM_THAN_TECKSTA);

const MULTEAM_AND_OUTCOMM = allData
  .filter((response) => +response.CUL_MULTEAM > 3 && +response.CUL_OUTCOMM > 3)
  .map((response) => ({
    CUL_MULTEAM: response.CUL_MULTEAM,
    CUL_OUTCOMM: response.CUL_OUTCOMM,
    PRO_COMNAT: response.PRO_COMNAT,
    PRO_COMSIZE: response.PRO_COMSIZE,
    PRO_COMORI: response.PRO_COMORI,
  }));

const NOT_MULTEAM_BUT_OUTCOMM = allData
  .filter((response) => +response.CUL_MULTEAM <= 3 && +response.CUL_OUTCOMM > 3)
  .map((response) => ({
    CUL_MULTEAM: response.CUL_MULTEAM,
    CUL_OUTCOMM: response.CUL_OUTCOMM,
    CUL_TOTAL: response.CUL_TOTAL,
    MAT_TOTAL: response.MAT_TOTAL,
    PRO_POS: response.PRO_POS,
    PRO_EXP: response.PRO_EXP,
    PRO_COMNAT: response.PRO_COMNAT,
    PRO_COMSIZE: response.PRO_COMSIZE,
    PRO_COMORI: response.PRO_COMORI,
  }));

console.log("MULTEAM_AND_OUTCOMM", MULTEAM_AND_OUTCOMM);
console.log("NOT_MULTEAM_BUT_OUTCOMM", NOT_MULTEAM_BUT_OUTCOMM);

const CULTURAL_ADOPTION_TOTAL_GROUPS = {
  NEUTRAL: allData.filter(
    (response) => +response.CUL_TOTAL > 25 && +response.CUL_TOTAL <= 35
  ),
  HIGH: allData.filter(
    (response) => +response.CUL_TOTAL > 35 && +response.CUL_TOTAL <= 45
  ),
  VERY_HIGH: allData.filter(
    (response) => +response.CUL_TOTAL > 45 && +response.CUL_TOTAL <= 50
  ),
};

console.log("CULTURAL_ADOPTION_TOTAL_GROUPS", CULTURAL_ADOPTION_TOTAL_GROUPS);
