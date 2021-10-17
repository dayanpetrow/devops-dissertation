import { Column, Bar } from "@ant-design/charts";

import { StepHeader } from "../../components/StepHeader/StepHeader";
import { ChartHeader } from "../../components/ChartHeader/ChartHeader";
import { generateColumnChartConfig } from "../utils";

import { AGILE_RELATION_COLUMN_DATA } from "./chartData";

// segmentation
import { generateGroupedBarChartConfig } from "./segmentation/_utils";
import { AGILE_RELATION_BY_EXPERIENCE_CHART_DATA } from "./segmentation/agileRelationByExperience";
import { AGILE_RELATION_BY_NATIONALITY_CHART_DATA } from "./segmentation/agileRelationByNationality";
import { AGILE_RELATION_BY_SIZE_CHART_DATA } from "./segmentation/agileRelationBySize";
import { AGILE_RELATION_BY_ORIENTATION_CHART_DATA } from "./segmentation/agileRelationByOrientation";
import { AGILE_RELATION_BY_POSITION_CHART_DATA } from "./segmentation/agileRelationByPosition";

import { BY_COMPANY_NATIONALITY } from "../segmentationData";
import { BG_BULGARIA_DATA_STATISTICS } from "./definitions/processDefinitions";

import { DefinitionByFeature } from "./definitions/DefinitionsByFeature";
import { DefinitionByType } from "./definitions/DefinitionsByType";

export const Perception = () => {
  console.log(
    "BG_BG: ",
    BY_COMPANY_NATIONALITY.bulgaria_bulgarian
      .map((response) => ({
        _ID: response._ID,
        PER_DEFINI: response.PER_DEFINI,
      }))
      .filter((response) => response.PER_DEFINI !== "")
  );
  console.log(
    "BG_INT: ",
    BY_COMPANY_NATIONALITY.bulgaria_international
      .map((response) => ({
        _ID: response._ID,
        PER_DEFINI: response.PER_DEFINI,
      }))
      .filter((response) => response.PER_DEFINI !== "")
  );
  console.log(
    "MULTI: ",
    BY_COMPANY_NATIONALITY.multinational
      .map((response) => ({
        _ID: response._ID,
        PER_DEFINI: response.PER_DEFINI,
      }))
      .filter((response) => response.PER_DEFINI !== "")
  );

  return (
    <div className={"charts-wrapper"}>
      <div className={"chart-wrapper"}>
        <ChartHeader title={"Agile Relation Totals"} />
        <Column
          {...generateColumnChartConfig(AGILE_RELATION_COLUMN_DATA, "Relation")}
        />
      </div>

      <div className={"chart-wrapper"}>
        <ChartHeader title={"Agile Relation by Position"} />
        <Bar
          {...generateGroupedBarChartConfig(
            AGILE_RELATION_BY_POSITION_CHART_DATA
          )}
        />
      </div>

      <div className={"chart-wrapper"}>
        <ChartHeader title={"Agile Relation by Experience"} />
        <Bar
          {...generateGroupedBarChartConfig(
            AGILE_RELATION_BY_EXPERIENCE_CHART_DATA
          )}
        />
      </div>

      <div className={"chart-wrapper"}>
        <ChartHeader title={"Agile Relation by Company Nationality"} />
        <Bar
          {...{
            ...generateGroupedBarChartConfig(
              AGILE_RELATION_BY_NATIONALITY_CHART_DATA
            ),
            isStack: false,
            isGroup: true,
            intervalPadding: 16,
            dodgePadding: 2,
          }}
        />
      </div>

      <div className={"chart-wrapper"}>
        <ChartHeader title={"Agile Relation by Company Size"} />
        <Bar
          {...generateGroupedBarChartConfig(AGILE_RELATION_BY_SIZE_CHART_DATA)}
        />
      </div>

      <div className={"chart-wrapper"}>
        <ChartHeader title={"Agile Relation by Company Orientation"} />
        <Bar
          {...generateGroupedBarChartConfig(
            AGILE_RELATION_BY_ORIENTATION_CHART_DATA
          )}
        />
      </div>

      <div className={"chart-wrapper"}>
        <ChartHeader title={"Definition by Tag"} />
        <DefinitionByFeature />
      </div>

      <div className={"chart-wrapper"}>
        <ChartHeader title={"Definition by Type"} />
        <DefinitionByType />
      </div>
    </div>
  );
};
