import {
  BY_COMPANY_NATIONALITY,
  BY_POSITION,
  BY_ORIENTATION,
  BY_SIZE,
  BY_EXPERIENCE,
} from "../../segmentationData";
import {
  generateAgileRelationBySegment,
  generateGroupedChartDataBySegment,
} from "./_utils";

export const AGILE_RELATION_BY_ORIENTATION_DATA = {
  product: generateAgileRelationBySegment(BY_ORIENTATION.product),
  service: generateAgileRelationBySegment(BY_ORIENTATION.service),
  mixed: generateAgileRelationBySegment(BY_ORIENTATION.mixed),
};

export const AGILE_RELATION_BY_ORIENTATION_CHART_DATA = [
  ...generateGroupedChartDataBySegment(
    AGILE_RELATION_BY_ORIENTATION_DATA.product,
    "Product"
  ),
  ...generateGroupedChartDataBySegment(
    AGILE_RELATION_BY_ORIENTATION_DATA.service,
    "Service"
  ),
  ...generateGroupedChartDataBySegment(
    AGILE_RELATION_BY_ORIENTATION_DATA.mixed,
    "Mixed"
  ),
];
