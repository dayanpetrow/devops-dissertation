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

export const CULTURE_TOTALS_BY_ORIENTATION_DATA = {
  product: generateCultureTotalsBySegment(BY_ORIENTATION.product),
  service: generateCultureTotalsBySegment(BY_ORIENTATION.service),
  mixed: generateCultureTotalsBySegment(BY_ORIENTATION.mixed),
};

export const CULTURE_TOTALS_BY_ORIENTATION_CHART_DATA = [
  ...generateGroupedChartDataBySegment(
    CULTURE_TOTALS_BY_ORIENTATION_DATA.product,
    "Product"
  ),
  ...generateGroupedChartDataBySegment(
    CULTURE_TOTALS_BY_ORIENTATION_DATA.service,
    "Service"
  ),
  ...generateGroupedChartDataBySegment(
    CULTURE_TOTALS_BY_ORIENTATION_DATA.mixed,
    "Mixed"
  ),
].sort((a, b) => +b.label - +a.label);

// product score
const TOTAL_PRODUCT_ORIENTATION_SCORE = Object.keys(
  CULTURE_TOTALS_BY_ORIENTATION_DATA.product
).reduce(
  (total, score) =>
    total + +score * CULTURE_TOTALS_BY_ORIENTATION_DATA.product[score],
  0
);
export const AVERAGE_PRODUCT_ORIENTATION_SCORE =
  TOTAL_PRODUCT_ORIENTATION_SCORE / BY_ORIENTATION.product.length;

// service score
const TOTAL_SERVICE_ORIENTATION_SCORE = Object.keys(
  CULTURE_TOTALS_BY_ORIENTATION_DATA.service
).reduce(
  (total, score) =>
    total + +score * CULTURE_TOTALS_BY_ORIENTATION_DATA.service[score],
  0
);
export const AVERAGE_SERVICE_ORIENTATION_SCORE =
  TOTAL_SERVICE_ORIENTATION_SCORE / BY_ORIENTATION.service.length;

// mixed
const TOTAL_MIXED_ORIENTATION_SCORE = Object.keys(
  CULTURE_TOTALS_BY_ORIENTATION_DATA.mixed
).reduce(
  (total, score) =>
    total + +score * CULTURE_TOTALS_BY_ORIENTATION_DATA.mixed[score],
  0
);
export const AVERAGE_MIXED_ORIENTATION_SCORE =
  TOTAL_MIXED_ORIENTATION_SCORE / BY_ORIENTATION.mixed.length;
