import { Column } from "@ant-design/charts";

import { StepHeader } from "../../components/StepHeader/StepHeader";
import { ChartHeader } from "../../components/ChartHeader/ChartHeader";
import { generateColumnChartConfig } from "./utils";

import {
  POSITION_COLUMN_DATA,
  EXPERIENCE_COLUMN_DATA,
  NATIONALITY_COLUMN_DATA,
  ORIENTATION_COLUMN_DATA,
  SIZE_COLUMN_DATA,
} from "./chartData";

export const Professional = () => {
  return (
    <div className={"charts-wrapper"}>
      <div className={"chart-wrapper"}>
        <ChartHeader title={"Position"} />
        <Column
          {...generateColumnChartConfig(POSITION_COLUMN_DATA, "Position")}
        />
      </div>

      <div className={"chart-wrapper"}>
        <ChartHeader title={"Experience"} />
        <Column
          {...generateColumnChartConfig(EXPERIENCE_COLUMN_DATA, "Experience")}
        />
      </div>

      <div className={"chart-wrapper"}>
        <ChartHeader title={"Company Nationality"} />
        <Column
          {...generateColumnChartConfig(NATIONALITY_COLUMN_DATA, "Nationality")}
        />
      </div>

      <div className={"chart-wrapper"}>
        <ChartHeader title={"Company Orientation"} />
        <Column
          {...generateColumnChartConfig(ORIENTATION_COLUMN_DATA, "Orientation")}
        />
      </div>

      <div className={"chart-wrapper"}>
        <ChartHeader title={"Company Size"} />
        <Column {...generateColumnChartConfig(SIZE_COLUMN_DATA, "Size")} />
      </div>
    </div>
  );
};
