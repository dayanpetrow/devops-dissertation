import { Pie } from "@ant-design/charts";
import React from "react";
import POPULATION_BY_SIZE from "./populationBySize";

export const Population = () => {
  return (
    <div>
      <Pie
        {...{
          appendPadding: 10,
          data: POPULATION_BY_SIZE,
          angleField: "count",
          colorField: "size",
          radius: 0.9,
          label: {
            type: "inner",
            offset: "-40%",
            content: function content(_ref) {
              return _ref.count;
            },
            style: {
              fontSize: 16,
              textAlign: "center",
            },
          },
          interactions: [{ type: "element-active" }],
        }}
      />
    </div>
  );
};
