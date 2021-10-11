import { Column, Pie, Histogram } from "@ant-design/charts";
import { Divider } from "antd";

import { StepHeader } from "../../components/StepHeader/StepHeader";
import { ChartHeader } from "../../components/ChartHeader/ChartHeader";
import { generateColumnChartConfig, generatePieChartConfig } from "../utils";

import { ORGANIZATION_DATA, TEAM_DATA, CULTURE_TOTALS_DATA } from "./chartData";

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
    </>
  );
};
