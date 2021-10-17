import React from "react";
import { Table } from "antd";
import questionAveragesByNationality from "../segmentation/outputs/questionAveragesByNationality.json";

const columns = [
  {
    title: "Question ID",
    dataIndex: "questionId",
    key: "questionId",
  },
  {
    title: `Bulgarian and operates in Bulgaria`,
    dataIndex: "BG_BG",
    key: "BG_BG",
  },
  {
    title: `Bulgaria and operates internationally`,
    dataIndex: "BG_INT",
    key: "BG_INT",
  },
  {
    title: `Multinational`,
    dataIndex: "MULTINATIONAL",
    key: "MULTINATIONAL",
  },
];

const data = Object.keys(questionAveragesByNationality).map((questionId) => ({
  ...questionAveragesByNationality[questionId],
  questionId,
}));

export const CultureTableByNationality = () => {
  return (
    <div>
      <Table
        columns={columns}
        dataSource={data}
        size={"small"}
        pagination={false}
      />
    </div>
  );
};
