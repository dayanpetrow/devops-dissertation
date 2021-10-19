import React from "react";
import { Table, Tag, Space } from "antd";

import {
  BG_BULGARIA_DATA_STATISTICS,
  BG_INTERNATIONAL_DATA_STATISTICS,
  MULTINATIONAL_DATA_STATISTICS,
  TOTAL_DATA_STATISTICS,
} from "./processDefinitions";

import {
  DEFINITION_CATEGORIES,
  CATEGORIES_LABELS,
  DEFINITION_TYPE,
} from "./_categories";

const TABLE_COLUMNS_BY_FEATURE = [
  {
    title: "Feature",
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

const TABLE_DATA_BY_FEATURE = Object.keys(DEFINITION_CATEGORIES)
  .map((tag) => {
    return {
      name: CATEGORIES_LABELS[tag],
      bg_bg: BG_BULGARIA_DATA_STATISTICS.tags[tag] || 0,
      bg_int: BG_INTERNATIONAL_DATA_STATISTICS.tags[tag] || 0,
      multinational: MULTINATIONAL_DATA_STATISTICS.tags[tag] || 0,
      total: TOTAL_DATA_STATISTICS.tags[tag] || 0,
    };
  })
  .sort((a, b) => b.total - a.total);
// .slice(0, 10);

export const DefinitionByFeature = () => {
  return (
    <div>
      <Table
        columns={TABLE_COLUMNS_BY_FEATURE}
        dataSource={TABLE_DATA_BY_FEATURE}
        size={"small"}
        pagination={false}
      />
    </div>
  );
};
