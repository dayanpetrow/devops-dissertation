import React, { ReactNode } from "react";
import { Slider as AntdSlider, Form } from "antd";

interface Props {
  marks?: Record<number, string>;
  onChange: any;
  value: number;
  label: string;
}

export const Slider: React.FC<Props> = ({
  marks = defaultMarks,
  onChange,
  value,
  label
}) => {
  return (
    <Form.Item label={label}>
      <AntdSlider
        min={0}
        max={5}
        tipFormatter={(value) => `${marks[value!]}`}
        marks={marks}
        onChange={onChange}
        value={value}
        included={false}
      />
    </Form.Item>
  );
};

const defaultMarks = {
  0: "Strongly Disagree",
  1: "Disagree",
  2: "Neutral",
  3: "Agree",
  4: "Strongly Agree",
  5: "Not Applicable",
};
