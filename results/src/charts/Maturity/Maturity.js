import React from "react";
import { Row, Col } from "antd";
import { Pie, Bar, Column } from "@ant-design/charts";
import { generateColumnChartConfig, generatePieChartConfig } from "../utils";
import { ChartHeader } from "../../components/ChartHeader/ChartHeader";

import {
  generateDropdownPieChartConfig,
  maturityDropdownCharts,
  toolchainIncludesChart,
} from "./questionCharts/dropdownQuestionsCharts";
import { maturityScaleCharts } from "./questionCharts/scaleQuestionsCharts";

import { MATURITY_TOTALS_DATA } from "./totals/maturityTotals";
import {
  MATURITY_TOTALS_BY_NATIONALITY_CHART_DATA,
  AVERAGE_TOTAL_BG_BG,
  AVERAGE_TOTAL_BG_INT,
  AVERAGE_TOTAL_MULTI,
} from "./totals/maturityTotalsByNationality";
import { generateGroupedBarChartConfig } from "./totals/_utils";

import {
  MATURITY_TOTALS_BY_ORIENTATION_CHART_DATA,
  AVERAGE_TOTAL_PRODUCT,
  AVERAGE_TOTAL_SERVICE,
  AVERAGE_TOTAL_MIXED,
} from "./totals/maturityTotalsByOrientation";

import {
  MATURITY_TOTALS_BY_SIZE_CHART_DATA,
  AVERAGE_TOTAL_1_19,
  AVERAGE_TOTAL_20_99,
  AVERAGE_TOTAL_100_249,
  AVERAGE_TOTAL_250_499,
  AVERAGE_TOTAL_500_1999,
  AVERAGE_TOTAL_MORE_2000,
} from "./totals/maturityTotalsBySize";

import * as questionAverages from "./questionCharts/questionAverages";

export const Maturity = () => {
  return (
    <>
      <div className={"charts-wrapper"}>
        {Object.keys(maturityDropdownCharts).map((statisticsKey) => (
          <div className={"chart-wrapper"}>
            <ChartHeader title={maturityDropdownCharts[statisticsKey].title} />
            <Pie
              {...generateDropdownPieChartConfig(
                maturityDropdownCharts[statisticsKey].data
              )}
            />
          </div>
        ))}
      </div>

      <div className={"chart-wrapper"}>
        <ChartHeader title={"Which tools are part of your team's toolchain?"} />
        <Bar
          {...{
            data: toolchainIncludesChart,
            xField: "count",
            yField: "label",
            legend: { position: "top-left" },
            barBackground: { style: { fill: "rgba(0,0,0,0.1)" } },
            label: {
              position: "right",
            },
            interactions: [
              {
                type: "active-region",
                enable: false,
              },
            ],
          }}
        />
      </div>

      <div className={"charts-wrapper"}>
        {Object.keys(maturityScaleCharts).map((statisticsKey) => (
          <div className={"chart-wrapper"}>
            <ChartHeader title={maturityScaleCharts[statisticsKey].title} />
            <Pie
              {...generatePieChartConfig(
                maturityScaleCharts[statisticsKey].data
              )}
            />
          </div>
        ))}
      </div>

      <h2 className={"section-title"}>Maturity Totals Distribution</h2>
      <div className={"chart-wrapper"}>
        <Column {...generateColumnChartConfig(MATURITY_TOTALS_DATA, "Total")} />
      </div>

      <div className={"chart-wrapper"}>
        <ChartHeader title={"Maturity Totals by Nationality"} />
        <Row
          align={"middle"}
          justify={"center"}
          gutter={[16, 16]}
          style={{ paddingBottom: "16px" }}
        >
          <Col span={8} align={"middle"}>
            <h4>Bulgarian and operates in Bulgaria</h4>
            <div>Average: {AVERAGE_TOTAL_BG_BG.toFixed(2)}</div>
          </Col>
          <Col span={8} align={"middle"}>
            <h4>Bulgarian and operates internationally</h4>
            <div>Average: {AVERAGE_TOTAL_BG_INT.toFixed(2)}</div>
          </Col>
          <Col span={8} align={"middle"}>
            <h4>Multinational</h4>
            <div>Average: {AVERAGE_TOTAL_MULTI.toFixed(2)}</div>
          </Col>
        </Row>
        <Bar
          {...generateGroupedBarChartConfig(
            MATURITY_TOTALS_BY_NATIONALITY_CHART_DATA
          )}
        />
      </div>

      <div className={"chart-wrapper"}>
        <ChartHeader title={"Maturity Totals by Orientation"} />
        <Row
          align={"middle"}
          justify={"center"}
          gutter={[16, 16]}
          style={{ paddingBottom: "16px" }}
        >
          <Col span={8} align={"middle"}>
            <h4>Product</h4>
            <div>Average: {AVERAGE_TOTAL_PRODUCT.toFixed(2)}</div>
          </Col>
          <Col span={8} align={"middle"}>
            <h4>Service</h4>
            <div>Average: {AVERAGE_TOTAL_SERVICE.toFixed(2)}</div>
          </Col>
          <Col span={8} align={"middle"}>
            <h4>Mixed</h4>
            <div>Average: {AVERAGE_TOTAL_MIXED.toFixed(2)}</div>
          </Col>
        </Row>
        <Bar
          {...generateGroupedBarChartConfig(
            MATURITY_TOTALS_BY_ORIENTATION_CHART_DATA
          )}
        />
      </div>

      <div className={"chart-wrapper"}>
        <ChartHeader title={"Maturity Totals by Size"} />
        <Row
          align={"middle"}
          justify={"center"}
          gutter={[16, 16]}
          style={{ paddingBottom: "16px" }}
        >
          <Col span={4} align={"middle"}>
            <h4>1-19</h4>
            <div>Average: {AVERAGE_TOTAL_1_19.toFixed(2)}</div>
          </Col>
          <Col span={4} align={"middle"}>
            <h4>20-99</h4>
            <div>Average: {AVERAGE_TOTAL_20_99.toFixed(2)}</div>
          </Col>
          <Col span={4} align={"middle"}>
            <h4>100-249</h4>
            <div>Average: {AVERAGE_TOTAL_100_249.toFixed(2)}</div>
          </Col>
          <Col span={4} align={"middle"}>
            <h4>250-499</h4>
            <div>Average: {AVERAGE_TOTAL_250_499.toFixed(2)}</div>
          </Col>
          <Col span={4} align={"middle"}>
            <h4>500-1999</h4>
            <div>Average: {AVERAGE_TOTAL_500_1999.toFixed(2)}</div>
          </Col>
          <Col span={4} align={"middle"}>
            <h4>More than 2000</h4>
            <div>Average: {AVERAGE_TOTAL_MORE_2000.toFixed(2)}</div>
          </Col>
        </Row>
        <Bar
          {...generateGroupedBarChartConfig(MATURITY_TOTALS_BY_SIZE_CHART_DATA)}
        />
      </div>
    </>
  );
};
