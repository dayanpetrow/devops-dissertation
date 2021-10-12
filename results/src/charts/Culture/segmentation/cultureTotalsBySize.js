import {
  BY_COMPANY_NATIONALITY,
  BY_POSITION,
  BY_ORIENTATION,
  BY_SIZE,
  BY_EXPERIENCE,
} from "../../segmentationData";
import {
  generateCultureTotalsBySegment,
  generateGroupedChartDataBySegment,
} from "./_utils";

/** BENEFITS BY SIZE */
export const CULTURE_TOTALS_BY_SIZE_DATA = {
  "1-19": generateCultureTotalsBySegment(BY_SIZE["1-19"]),
  "20-99": generateCultureTotalsBySegment(BY_SIZE["20-99"]),
  "100-249": generateCultureTotalsBySegment(BY_SIZE["100-249"]),
  "250-499": generateCultureTotalsBySegment(BY_SIZE["250-499"]),
  "500-1999": generateCultureTotalsBySegment(BY_SIZE["500-1999"]),
  "More than 2000": generateCultureTotalsBySegment(BY_SIZE["More than 2000"]),
};

export const CULTURE_TOTALS_BY_SIZE_CHART_DATA = [
  ...generateGroupedChartDataBySegment(
    CULTURE_TOTALS_BY_SIZE_DATA["1-19"],
    "1-19"
  ),
  ...generateGroupedChartDataBySegment(
    CULTURE_TOTALS_BY_SIZE_DATA["20-99"],
    "20-99"
  ),
  ...generateGroupedChartDataBySegment(
    CULTURE_TOTALS_BY_SIZE_DATA["100-249"],
    "100-249"
  ),
  ...generateGroupedChartDataBySegment(
    CULTURE_TOTALS_BY_SIZE_DATA["250-499"],
    "250-499"
  ),
  ...generateGroupedChartDataBySegment(
    CULTURE_TOTALS_BY_SIZE_DATA["500-1999"],
    "500-1999"
  ),
  ...generateGroupedChartDataBySegment(
    CULTURE_TOTALS_BY_SIZE_DATA["More than 2000"],
    "More than 2000"
  ),
].sort((a, b) => +b.label - +a.label);

// 1-19
const TOTAL_1_19_SCORE = Object.keys(
  CULTURE_TOTALS_BY_SIZE_DATA["1-19"]
).reduce(
  (total, score) => total + +score * CULTURE_TOTALS_BY_SIZE_DATA["1-19"][score],
  0
);
export const AVERAGE_1_19_SCORE = TOTAL_1_19_SCORE / BY_SIZE["1-19"].length;

// 20-99
const TOTAL_20_99_SCORE = Object.keys(
  CULTURE_TOTALS_BY_SIZE_DATA["20-99"]
).reduce(
  (total, score) =>
    total + +score * CULTURE_TOTALS_BY_SIZE_DATA["20-99"][score],
  0
);
export const AVERAGE_20_99_SCORE = TOTAL_20_99_SCORE / BY_SIZE["20-99"].length;

// 100-249
const TOTAL_100_249_SCORE = Object.keys(
  CULTURE_TOTALS_BY_SIZE_DATA["100-249"]
).reduce(
  (total, score) =>
    total + +score * CULTURE_TOTALS_BY_SIZE_DATA["100-249"][score],
  0
);
export const AVERAGE_100_249_SCORE =
  TOTAL_100_249_SCORE / BY_SIZE["100-249"].length;

// 250-499
const TOTAL_250_499_SCORE = Object.keys(
  CULTURE_TOTALS_BY_SIZE_DATA["250-499"]
).reduce(
  (total, score) =>
    total + +score * CULTURE_TOTALS_BY_SIZE_DATA["250-499"][score],
  0
);
export const AVERAGE_250_499_SCORE =
  TOTAL_250_499_SCORE / BY_SIZE["250-499"].length;

// 500-1999
const TOTAL_500_1999_SCORE = Object.keys(
  CULTURE_TOTALS_BY_SIZE_DATA["500-1999"]
).reduce(
  (total, score) =>
    total + +score * CULTURE_TOTALS_BY_SIZE_DATA["500-1999"][score],
  0
);
export const AVERAGE_500_1999_SCORE =
  TOTAL_500_1999_SCORE / BY_SIZE["500-1999"].length;

// More than 2000
const TOTAL_MORE_2000_SCORE = Object.keys(
  CULTURE_TOTALS_BY_SIZE_DATA["More than 2000"]
).reduce(
  (total, score) =>
    total + +score * CULTURE_TOTALS_BY_SIZE_DATA["More than 2000"][score],
  0
);
export const AVERAGE_MORE_2000_SCORE =
  TOTAL_MORE_2000_SCORE / BY_SIZE["More than 2000"].length;
