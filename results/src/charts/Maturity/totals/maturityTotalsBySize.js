import { BY_SIZE } from "../../segmentationData";
import {
  generateMaturityTotalsBySegment,
  generateGroupedChartDataBySegment,
} from "./_utils";

export const MATURITY_TOTALS_BY_SIZE_DATA = {
  "1-19": generateMaturityTotalsBySegment(BY_SIZE["1-19"]),
  "20-99": generateMaturityTotalsBySegment(BY_SIZE["20-99"]),
  "100-249": generateMaturityTotalsBySegment(BY_SIZE["100-249"]),
  "250-499": generateMaturityTotalsBySegment(BY_SIZE["250-499"]),
  "500-1999": generateMaturityTotalsBySegment(BY_SIZE["500-1999"]),
  "More than 2000": generateMaturityTotalsBySegment(BY_SIZE["More than 2000"]),
};

export const MATURITY_TOTALS_BY_SIZE_CHART_DATA = [
  ...generateGroupedChartDataBySegment(
    MATURITY_TOTALS_BY_SIZE_DATA["1-19"],
    "1-19"
  ),
  ...generateGroupedChartDataBySegment(
    MATURITY_TOTALS_BY_SIZE_DATA["20-99"],
    "20-99"
  ),
  ...generateGroupedChartDataBySegment(
    MATURITY_TOTALS_BY_SIZE_DATA["100-249"],
    "100-249"
  ),
  ...generateGroupedChartDataBySegment(
    MATURITY_TOTALS_BY_SIZE_DATA["250-499"],
    "250-499"
  ),
  ...generateGroupedChartDataBySegment(
    MATURITY_TOTALS_BY_SIZE_DATA["500-1999"],
    "500-1999"
  ),
  ...generateGroupedChartDataBySegment(
    MATURITY_TOTALS_BY_SIZE_DATA["More than 2000"],
    "More than 2000"
  ),
].sort((a, b) => +b.label - +a.label);

/** Average totals by SIZE */
const calculateAverageTotal = (size) => {
  const total = Object.keys(MATURITY_TOTALS_BY_SIZE_DATA[size]).reduce(
    (total, score) =>
      total + +score * MATURITY_TOTALS_BY_SIZE_DATA[size][score],
    0
  );
  return total / BY_SIZE[size].length;
};

export const AVERAGE_TOTAL_1_19 = calculateAverageTotal("1-19");
export const AVERAGE_TOTAL_20_99 = calculateAverageTotal("20-99");
export const AVERAGE_TOTAL_100_249 = calculateAverageTotal("100-249");
export const AVERAGE_TOTAL_250_499 = calculateAverageTotal("250-499");
export const AVERAGE_TOTAL_500_1999 = calculateAverageTotal("500-1999");
export const AVERAGE_TOTAL_MORE_2000 = calculateAverageTotal("More than 2000");
