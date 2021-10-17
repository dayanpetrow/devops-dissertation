import React from "react";
import { Table, Tag, Space } from "antd";

import {
  BG_BULGARIA_DATA_STATISTICS,
  BG_INTERNATIONAL_DATA_STATISTICS,
  MULTINATIONAL_DATA_STATISTICS,
  TOTAL_DATA_STATISTICS,
} from "./processDefinitions";

import { DEFINITION_CATEGORIES, DEFINITION_TYPE } from "./_categories";

const TABLE_COLUMNS_BY_TYPE = [
  {
    title: "Type",
    dataIndex: "name",
    key: "name",
  },
  {
    title: `Bulgaria/Bulgaria (${BG_BULGARIA_DATA_STATISTICS.count})`,
    dataIndex: "bg_bg",
    key: "bg_bg",
  },
  {
    title: `Bulgaria/International (${BG_INTERNATIONAL_DATA_STATISTICS.count})`,
    dataIndex: "bg_int",
    key: "bg_int",
  },
  {
    title: `Multinational (${MULTINATIONAL_DATA_STATISTICS.count})`,
    dataIndex: "multinational",
    key: "multinational",
  },
  {
    title: `Total (${TOTAL_DATA_STATISTICS.count})`,
    dataIndex: "total",
    key: "total",
  },
];

const TABLE_DATA_BY_TYPE = Object.keys(DEFINITION_TYPE)
  .map((feature) => {
    return {
      name: feature,
      bg_bg: BG_BULGARIA_DATA_STATISTICS.type[feature],
      bg_int: BG_INTERNATIONAL_DATA_STATISTICS.type[feature],
      multinational: MULTINATIONAL_DATA_STATISTICS.type[feature],
      total: TOTAL_DATA_STATISTICS.type[feature],
    };
  })
  .sort((a, b) => b.total - a.total);

export const DefinitionByType = () => {
  return (
    <div>
      <Table
        columns={TABLE_COLUMNS_BY_TYPE}
        dataSource={TABLE_DATA_BY_TYPE}
        size={"small"}
        pagination={false}
      />
    </div>
  );
};
