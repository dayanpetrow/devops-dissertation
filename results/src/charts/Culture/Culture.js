import { Column, Bar, Pie, Histogram } from "@ant-design/charts";
import { Divider, Row, Col } from "antd";

import { StepHeader } from "../../components/StepHeader/StepHeader";
import { ChartHeader } from "../../components/ChartHeader/ChartHeader";
import { generateColumnChartConfig, generatePieChartConfig } from "../utils";

import { ORGANIZATION_DATA, TEAM_DATA, CULTURE_TOTALS_DATA } from "./chartData";

// segmentation
import { generateGroupedBarChartConfig } from "./segmentation/_utils";
import {
  AVERAGE_BG_BG_SCORE,
  AVERAGE_BG_INT_SCORE,
  AVERAGE_MULTINATIONAL_SCORE,
  CULTURE_TOTALS_BY_NATIONALITY_CHART_DATA,
} from "./segmentation/cultureTotalsByNationality";
import {
  AVERAGE_PRODUCT_ORIENTATION_SCORE,
  AVERAGE_SERVICE_ORIENTATION_SCORE,
  AVERAGE_MIXED_ORIENTATION_SCORE,
  CULTURE_TOTALS_BY_ORIENTATION_CHART_DATA,
} from "./segmentation/cultureTotalsByOrientation";
import {
  CULTURE_TOTALS_BY_SIZE_CHART_DATA,
  AVERAGE_1_19_SCORE,
  AVERAGE_20_99_SCORE,
  AVERAGE_100_249_SCORE,
  AVERAGE_250_499_SCORE,
  AVERAGE_500_1999_SCORE,
  AVERAGE_MORE_2000_SCORE,
} from "./segmentation/cultureTotalsBySize";

import * as questionAveragesByNationality from "./segmentation/questionAveragesByNationality";

export const Culture = () => {
  return (
    <>
      <h2 className={"section-title"}>In my organization...</h2>

      <div className={"charts-wrapper"}>
        {Object.keys(ORGANIZATION_DATA).map((statisticsKey) => (
          <div className={"chart-wrapper"}>
            <ChartHeader title={ORGANIZATION_DATA[statisticsKey].title} />
            <Pie
              {...generatePieChartConfig(ORGANIZATION_DATA[statisticsKey].data)}
            />
            ;
          </div>
        ))}
      </div>

      <h2 className={"section-title"}>In my team...</h2>
      <div className={"charts-wrapper"}>
        {Object.keys(TEAM_DATA).map((statisticsKey) => (
          <div className={"chart-wrapper"}>
            <ChartHeader title={TEAM_DATA[statisticsKey].title} />
            <Pie {...generatePieChartConfig(TEAM_DATA[statisticsKey].data)} />;
          </div>
        ))}
      </div>

      <h2 className={"section-title"}>Culture Totals Distribution</h2>
      <div className={"chart-wrapper"}>
        <Column {...generateColumnChartConfig(CULTURE_TOTALS_DATA, "Total")} />
      </div>

      <div className={"chart-wrapper"}>
        <ChartHeader title={"Culture Totals by Nationality"} />
        <Row
          align={"middle"}
          justify={"center"}
          gutter={[16, 16]}
          style={{ paddingBottom: "16px" }}
        >
          <Col span={8} align={"middle"}>
            <h4>Bulgarian and operates in Bulgaria</h4>
            <div>Average: {AVERAGE_BG_BG_SCORE.toFixed(2)}</div>
          </Col>
          <Col span={8} align={"middle"}>
            <h4>Bulgarian and operates internationally</h4>
            <div>Average: {AVERAGE_BG_INT_SCORE.toFixed(2)}</div>
          </Col>
          <Col span={8} align={"middle"}>
            <h4>Multinational</h4>
            <div>Average: {AVERAGE_MULTINATIONAL_SCORE.toFixed(2)}</div>
          </Col>
        </Row>
        <Bar
          {...generateGroupedBarChartConfig(
            CULTURE_TOTALS_BY_NATIONALITY_CHART_DATA
          )}
        />
      </div>

      <div className={"chart-wrapper"}>
        <ChartHeader title={"Culture Totals by Orientation"} />
        <Row
          align={"middle"}
          justify={"center"}
          gutter={[16, 16]}
          style={{ paddingBottom: "16px" }}
        >
          <Col span={8} align={"middle"}>
            <h4>Product</h4>
            <div>Average: {AVERAGE_PRODUCT_ORIENTATION_SCORE.toFixed(2)}</div>
          </Col>
          <Col span={8} align={"middle"}>
            <h4>Service</h4>
            <div>Average: {AVERAGE_SERVICE_ORIENTATION_SCORE.toFixed(2)}</div>
          </Col>
          <Col span={8} align={"middle"}>
            <h4>Mixed</h4>
            <div>Average: {AVERAGE_MIXED_ORIENTATION_SCORE.toFixed(2)}</div>
          </Col>
        </Row>
        <Bar
          {...generateGroupedBarChartConfig(
            CULTURE_TOTALS_BY_ORIENTATION_CHART_DATA
          )}
        />
      </div>

      <div className={"chart-wrapper"}>
        <ChartHeader title={"Culture Totals by Size"} />
        <Row
          align={"middle"}
          justify={"center"}
          gutter={[16, 16]}
          style={{ paddingBottom: "16px" }}
        >
          <Col span={4} align={"middle"}>
            <h4>1-19</h4>
            <div>Average: {AVERAGE_1_19_SCORE.toFixed(2)}</div>
          </Col>
          <Col span={4} align={"middle"}>
            <h4>20-99</h4>
            <div>Average: {AVERAGE_20_99_SCORE.toFixed(2)}</div>
          </Col>
          <Col span={4} align={"middle"}>
            <h4>100-249</h4>
            <div>Average: {AVERAGE_100_249_SCORE.toFixed(2)}</div>
          </Col>
          <Col span={4} align={"middle"}>
            <h4>250-499</h4>
            <div>Average: {AVERAGE_250_499_SCORE.toFixed(2)}</div>
          </Col>
          <Col span={4} align={"middle"}>
            <h4>500-1999</h4>
            <div>Average: {AVERAGE_500_1999_SCORE.toFixed(2)}</div>
          </Col>
          <Col span={4} align={"middle"}>
            <h4>More than 2000</h4>
            <div>Average: {AVERAGE_MORE_2000_SCORE.toFixed(2)}</div>
          </Col>
        </Row>
        <Bar
          {...generateGroupedBarChartConfig(CULTURE_TOTALS_BY_SIZE_CHART_DATA)}
        />
      </div>
    </>
  );
};
