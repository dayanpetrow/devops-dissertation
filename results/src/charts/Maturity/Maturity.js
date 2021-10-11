import React from "react";
import { Pie, Bar } from "@ant-design/charts";
import { generatePieChartConfig } from "../utils";
import { ChartHeader } from "../../components/ChartHeader/ChartHeader";

import {
  generateDropdownPieChartConfig,
  maturityDropdownCharts,
  toolchainIncludesChart,
} from "./questionCharts/dropdownQuestionsCharts";
import { maturityScaleCharts } from "./questionCharts/scaleQuestionsCharts";

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
    </>
  );
};
