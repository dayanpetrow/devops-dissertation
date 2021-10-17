import { Column, Bar } from "@ant-design/charts";

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

// segmentation
import { generateGroupedBarChartConfig } from "./segmentation/_utils";
import { POSITION_BY_EXPERIENCE_CHART_DATA } from "./segmentation/positionByExperience";
import { EXPERIENCE_BY_POSITION_CHART_DATA } from "./segmentation/experienceByPosition";
import { SIZE_BY_NATIONALITY_CHART_DATA } from "./segmentation/sizeByNationality";

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

      <div className={"chart-wrapper"}>
        <ChartHeader title={"Position By Experience"} />
        <Bar
          {...generateGroupedBarChartConfig(POSITION_BY_EXPERIENCE_CHART_DATA)}
        />
      </div>

      <div className={"chart-wrapper"}>
        <ChartHeader title={"Experience By Position"} />
        <Bar
          {...generateGroupedBarChartConfig(EXPERIENCE_BY_POSITION_CHART_DATA)}
        />
      </div>

      <div className={"chart-wrapper"}>
        <ChartHeader title={"Nationality By Size"} />
        <Bar
          {...generateGroupedBarChartConfig(SIZE_BY_NATIONALITY_CHART_DATA)}
        />
      </div>
    </div>
  );
};
