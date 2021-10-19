import { Bar } from "@ant-design/charts";

import { StepHeader } from "../../components/StepHeader/StepHeader";
import { ChartHeader } from "../../components/ChartHeader/ChartHeader";
import { generateColumnChartConfig } from "../utils";

// TOTALS
import {
  ORGANIZATION_CHALLENGES_TOTALS_DATA,
  TEAM_CHALLENGES_TOTALS_DATA,
} from "./totals/challengesTotals";

// SEGMENTS
import { generateGroupedBarChartConfig } from "./segmentation/_utils";
import {
  ORGANIZATIONAL_CHALLENGES_BY_POSITION_CHART_DATA,
  PROJECT_CHALLENGES_BY_POSITION_CHART_DATA,
} from "./segmentation/challengesByPosition";
import {
  ORGANIZATIONAL_CHALLENGES_BY_EXPERIENCE_CHART_DATA,
  PROEJECT_CHALLENGES_BY_EXPERIENCE_CHART_DATA,
} from "./segmentation/challengesByExperience";
import {
  ORGANIZATIONAL_CHALLENGES_BY_NATIONALITY_CHART_DATA,
  PROJECT_CHALLENGES_BY_NATIONALITY_CHART_DATA,
} from "./segmentation/challengesByNationality";
import {
  ORGANIZATIONAL_CHALLENGES_BY_SIZE_CHART_DATA,
  PROJECT_CHALLENGES_BY_SIZE_CHART_DATA,
} from "./segmentation/challengesBySize";
import {
  ORGANIZATIONAL_CHALLENGES_BY_ORIENTATION_CHART_DATA,
  PROJECT_CHALLENGES_BY_ORIENTATION_CHART_DATA,
} from "./segmentation/challengesByOrientation";

import * as UtilityData from "./utilityData/utilityData";

export const Challenges = () => {
  return (
    <>
      <h2 className={"section-title"}>Challenges Totals</h2>
      <div className={"charts-wrapper"}>
        <div className={"chart-wrapper mw-1024"}>
          <ChartHeader title={"Organization challenges"} />
          <Bar
            {...{
              height: 400,
              data: ORGANIZATION_CHALLENGES_TOTALS_DATA,
              xField: "count",
              yField: "label",
              legend: { position: "top-left" },
              barBackground: { style: { fill: "rgba(0,0,0,0.1)" } },
              label: {
                position: "right",
                fontSize: 18,
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
        <div className={"chart-wrapper mw-1024"}>
          <ChartHeader title={"Project/team challenges"} />
          <Bar
            {...{
              height: 400,
              data: TEAM_CHALLENGES_TOTALS_DATA,
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
      </div>

      <div className={"chart-wrapper"}>
        <h2 className={"section-title"}>Challenges By Position</h2>
        <ChartHeader title={"Organization challenges by Position"} />
        <Bar
          {...generateGroupedBarChartConfig(
            ORGANIZATIONAL_CHALLENGES_BY_POSITION_CHART_DATA
          )}
        />

        <ChartHeader title={"Project challenges by Position"} />
        <Bar
          {...generateGroupedBarChartConfig(
            PROJECT_CHALLENGES_BY_POSITION_CHART_DATA
          )}
        />
      </div>

      <div className={"chart-wrapper"}>
        <h2 className={"section-title"}>Challenges By Experience</h2>
        <ChartHeader title={"Organization challenges by Experience"} />
        <Bar
          {...generateGroupedBarChartConfig(
            ORGANIZATIONAL_CHALLENGES_BY_EXPERIENCE_CHART_DATA
          )}
        />

        <ChartHeader title={"Project challenges by Experience"} />
        <Bar
          {...generateGroupedBarChartConfig(
            PROEJECT_CHALLENGES_BY_EXPERIENCE_CHART_DATA
          )}
        />
      </div>

      <div className={"chart-wrapper"}>
        <h2 className={"section-title"}>Challenges By Nationality</h2>
        <ChartHeader title={"Organization challenges by Nationality"} />
        <Bar
          {...generateGroupedBarChartConfig(
            ORGANIZATIONAL_CHALLENGES_BY_NATIONALITY_CHART_DATA
          )}
        />

        <ChartHeader title={"Project challenges by Nationality"} />
        <Bar
          {...generateGroupedBarChartConfig(
            PROJECT_CHALLENGES_BY_NATIONALITY_CHART_DATA
          )}
        />
      </div>

      <div className={"chart-wrapper"}>
        <h2 className={"section-title"}>Challenges By Size</h2>
        <ChartHeader title={"Organization challenges by Size"} />
        <Bar
          {...generateGroupedBarChartConfig(
            ORGANIZATIONAL_CHALLENGES_BY_SIZE_CHART_DATA
          )}
        />

        <ChartHeader title={"Project challenges by Size"} />
        <Bar
          {...generateGroupedBarChartConfig(
            PROJECT_CHALLENGES_BY_SIZE_CHART_DATA
          )}
        />
      </div>

      <div className={"chart-wrapper"}>
        <h2 className={"section-title"}>Challenges By Orientation</h2>
        <ChartHeader title={"Organization challenges by Orientation"} />
        <Bar
          {...generateGroupedBarChartConfig(
            ORGANIZATIONAL_CHALLENGES_BY_ORIENTATION_CHART_DATA
          )}
        />

        <ChartHeader title={"Project challenges by Orientation"} />
        <Bar
          {...generateGroupedBarChartConfig(
            PROJECT_CHALLENGES_BY_ORIENTATION_CHART_DATA
          )}
        />
      </div>
    </>
  );
};
