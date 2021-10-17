import React from "react";
import { Table } from "antd";
import questionAveragesBySize from "../segmentation/outputs/questionAveragesBySize.json";

const columns = [
  {
    title: "Question ID",
    dataIndex: "questionId",
    key: "questionId",
  },
  {
    title: `1-19`,
    dataIndex: "1-19",
    key: "1-19",
  },
  {
    title: `20-99`,
    dataIndex: "20-99",
    key: "20-99",
  },
  {
    title: `100-249`,
    dataIndex: "100-249",
    key: "100-249",
  },
  {
    title: `250-499`,
    dataIndex: "250-499",
    key: "250-499",
  },
  {
    title: `500-1999`,
    dataIndex: "500-1999",
    key: "500-1999",
  },
  {
    title: `More than 2000`,
    dataIndex: "More than 2000",
    key: "More than 2000",
  },
];

const data = Object.keys(questionAveragesBySize).map((questionId) => ({
  ...questionAveragesBySize[questionId],
  questionId,
}));

export const CultureTableBySize = () => {
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
