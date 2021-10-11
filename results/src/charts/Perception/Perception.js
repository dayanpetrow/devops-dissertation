import { Column, Bar } from "@ant-design/charts";

import { StepHeader } from "../../components/StepHeader/StepHeader";
import { ChartHeader } from "../../components/ChartHeader/ChartHeader";
import { generateColumnChartConfig } from "../utils";

import { AGILE_RELATION_COLUMN_DATA } from "./chartData";

export const Perception = () => {
  return (
    <div className={"charts-wrapper"}>
      <div className={"chart-wrapper"}>
        <ChartHeader title={"Agile Relation"} />
        <Column
          {...generateColumnChartConfig(AGILE_RELATION_COLUMN_DATA, "Relation")}
        />
      </div>
    </div>
  );
};
