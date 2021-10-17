import React from "react";
import { Table } from "antd";
import questionAveragesByOrientation from "../segmentation/outputs/questionAveragesByOrientation.json";

const columns = [
  {
    title: "Question ID",
    dataIndex: "questionId",
    key: "questionId",
  },
  {
    title: `Product`,
    dataIndex: "product",
    key: "product",
  },
  {
    title: `Service`,
    dataIndex: "service",
    key: "service",
  },
  {
    title: `Mixed`,
    dataIndex: "mixed",
    key: "mixed",
  },
];

const data = Object.keys(questionAveragesByOrientation).map((questionId) => ({
  ...questionAveragesByOrientation[questionId],
  questionId,
}));

export const CultureTableByOrientation = () => {
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
