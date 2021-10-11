import { Bar } from "@ant-design/charts";
import { ChartHeader } from "../../components/ChartHeader/ChartHeader";

// TOTALS
import {
  ORGANIZATION_BENEFITS_TOTALS_DATA,
  PROJECT_BENEFITS_TOTALS_DATA,
} from "./totals/benefitsTotals";

// SEGMENTS
import { generateGroupedBarChartConfig } from "./segmentation/_utils";
import {
  ORGANIZATIONAL_BENEFITS_BY_POSITION_CHART_DATA,
  PROJECT_BENEFITS_BY_POSITION_CHART_DATA,
} from "./segmentation/benefitsByPosition";
import {
  ORGANIZATIONAL_BENEFITS_BY_NATIONALITY_CHART_DATA,
  PROJECT_BENEFITS_BY_NATIONALITY_CHART_DATA,
} from "./segmentation/benefitsByNationality";
import {
  ORGANIZATIONAL_BENEFITS_BY_ORIENTATION_CHART_DATA,
  PROJECT_BENEFITS_BY_ORIENTATION_CHART_DATA,
} from "./segmentation/benefitsByOrientation";
import {
  ORGANIZATIONAL_BENEFITS_BY_SIZE_CHART_DATA,
  PROJECT_BENEFITS_BY_SIZE_CHART_DATA,
} from "./segmentation/benefitsBySize";
import {
  ORGANIZATIONAL_BENEFITS_BY_EXPERIENCE_CHART_DATA,
  PROEJECT_BENEFITS_BY_EXPERIENCE_CHART_DATA,
} from "./segmentation/benefitsByExperience";

export const Benefits = () => {
  return (
    <>
      <div className={"chart-wrapper"}>
        <h2 className={"section-title"}>Benefits Totals</h2>
        <ChartHeader title={"Organization benefits"} />
        <Bar
          {...{
            data: ORGANIZATION_BENEFITS_TOTALS_DATA,
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

        <ChartHeader title={"Project/team benefits"} />
        <Bar
          {...{
            data: PROJECT_BENEFITS_TOTALS_DATA,
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

      <div className={"chart-wrapper"}>
        <h2 className={"section-title"}>Benefits By Position</h2>
        <ChartHeader title={"Organization benefits by Position"} />
        <Bar
          {...generateGroupedBarChartConfig(
            ORGANIZATIONAL_BENEFITS_BY_POSITION_CHART_DATA
          )}
        />

        <ChartHeader title={"Project benefits by Position"} />
        <Bar
          {...generateGroupedBarChartConfig(
            PROJECT_BENEFITS_BY_POSITION_CHART_DATA
          )}
        />
      </div>

      <div className={"chart-wrapper"}>
        <h2 className={"section-title"}>Benefits By Experience</h2>
        <ChartHeader title={"Organization benefits by Experience"} />
        <Bar
          {...generateGroupedBarChartConfig(
            ORGANIZATIONAL_BENEFITS_BY_EXPERIENCE_CHART_DATA
          )}
        />

        <ChartHeader title={"Project benefits by Experience"} />
        <Bar
          {...generateGroupedBarChartConfig(
            PROEJECT_BENEFITS_BY_EXPERIENCE_CHART_DATA
          )}
        />
      </div>

      <div className={"chart-wrapper"}>
        <h2 className={"section-title"}>Benefits By Company Nationality</h2>
        <ChartHeader title={"Organization benefits by Company Nationality"} />
        <Bar
          {...generateGroupedBarChartConfig(
            ORGANIZATIONAL_BENEFITS_BY_NATIONALITY_CHART_DATA
          )}
        />

        <ChartHeader title={"Project benefits by Company Nationality"} />
        <Bar
          {...generateGroupedBarChartConfig(
            PROJECT_BENEFITS_BY_NATIONALITY_CHART_DATA
          )}
        />
      </div>

      <div className={"chart-wrapper"}>
        <h2 className={"section-title"}>Benefits By Company Orientation</h2>
        <ChartHeader title={"Organization benefits by Company Orientation"} />
        <Bar
          {...generateGroupedBarChartConfig(
            ORGANIZATIONAL_BENEFITS_BY_ORIENTATION_CHART_DATA
          )}
        />

        <ChartHeader title={"Project benefits by Company Orientation"} />
        <Bar
          {...generateGroupedBarChartConfig(
            PROJECT_BENEFITS_BY_ORIENTATION_CHART_DATA
          )}
        />
      </div>

      <div className={"chart-wrapper"}>
        <h2 className={"section-title"}>Benefits By Company Size</h2>
        <ChartHeader title={"Organization benefits by Company Size"} />
        <Bar
          {...generateGroupedBarChartConfig(
            ORGANIZATIONAL_BENEFITS_BY_SIZE_CHART_DATA
          )}
        />

        <ChartHeader title={"Project benefits by Company Size"} />
        <Bar
          {...generateGroupedBarChartConfig(
            PROJECT_BENEFITS_BY_SIZE_CHART_DATA
          )}
        />
      </div>
    </>
  );
};
