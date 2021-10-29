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

// cultural adoption groups by orientation
const calculateCulturalAdoptionGroupsByOrientation = (orientationSegment) => ({
  low: orientationSegment.filter((response) => response.CUL_TOTAL <= 24.999)
    .length,

  neutral: orientationSegment.filter(
    (response) => response.CUL_TOTAL >= 25 && response.CUL_TOTAL <= 34.999
  ).length,

  high: orientationSegment.filter(
    (response) => response.CUL_TOTAL >= 35 && response.CUL_TOTAL <= 44.999
  ).length,
  very_high: orientationSegment.filter((response) => response.CUL_TOTAL >= 45)
    .length,
});

const ORIENTATION_CULTURAL_ADOPTION_GROUPS = {
  product: calculateCulturalAdoptionGroupsByOrientation(BY_ORIENTATION.product),
  service: calculateCulturalAdoptionGroupsByOrientation(BY_ORIENTATION.service),
  mixed: calculateCulturalAdoptionGroupsByOrientation(BY_ORIENTATION.mixed),
};

console.log(
  "ORIENTATION_CULTURAL_ADOPTION_GROUPS: ",
  ORIENTATION_CULTURAL_ADOPTION_GROUPS
);
