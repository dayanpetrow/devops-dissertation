import { BY_ORIENTATION } from "../../segmentationData";
import {
  generateMaturityTotalsBySegment,
  generateGroupedChartDataBySegment,
} from "./_utils";

export const MATURITY_TOTALS_BY_ORIENTATION_DATA = {
  product: generateMaturityTotalsBySegment(BY_ORIENTATION.product),
  service: generateMaturityTotalsBySegment(BY_ORIENTATION.service),
  mixed: generateMaturityTotalsBySegment(BY_ORIENTATION.mixed),
};

export const MATURITY_TOTALS_BY_ORIENTATION_CHART_DATA = [
  ...generateGroupedChartDataBySegment(
    MATURITY_TOTALS_BY_ORIENTATION_DATA.product,
    "Product"
  ),
  ...generateGroupedChartDataBySegment(
    MATURITY_TOTALS_BY_ORIENTATION_DATA.service,
    "Service"
  ),
  ...generateGroupedChartDataBySegment(
    MATURITY_TOTALS_BY_ORIENTATION_DATA.mixed,
    "Mixed"
  ),
].sort((a, b) => +b.label - +a.label);

/** Average totals by Orientation */
const calculateAverageTotal = (orientation) => {
  const total = Object.keys(
    MATURITY_TOTALS_BY_ORIENTATION_DATA[orientation]
  ).reduce(
    (total, score) =>
      total + +score * MATURITY_TOTALS_BY_ORIENTATION_DATA[orientation][score],
    0
  );
  return total / BY_ORIENTATION[orientation].length;
};

export const AVERAGE_TOTAL_PRODUCT = calculateAverageTotal("product");
export const AVERAGE_TOTAL_SERVICE = calculateAverageTotal("service");
export const AVERAGE_TOTAL_MIXED = calculateAverageTotal("mixed");

console.log(
  "MATURITY_TOTALS_BY_ORIENTATION_DATA: ",
  MATURITY_TOTALS_BY_ORIENTATION_DATA
);
