import React from "react";
import { Radio } from "antd";
import styled from "styled-components";

interface Props {
  title: string;
  value: any;
  onChange: (value: string) => void;
}

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 7fr repeat(5, 1fr);
  padding: 8px 8px;
  transition: 0.3s ease all;
  &:hover {
    transition: 0.3s ease all;
    background-color: #e8f3ff;
  }
  &.headings {
    font-weight: 600;
    background-color: #e8f3ff;
    @media (max-width: 768px) {
      display: none;
    }
  }
  .option {
    text-align: center;
  }
  .ant-radio-inner {
    border: 1px solid #424242;
  }
`;

export const Scale: React.FC<Props> = (props) => {
  const { title, value, onChange } = props;

  const _onChange = (e: any) => {
    onChange(e.target.value);
  };

  return (
    <Wrapper>
      <div>{title}</div>
      {options.map((_opt: any) => (
        <div className={"option"} onClick={() => onChange(_opt.value)}>
          <Radio.Group
            onChange={_onChange}
            value={value}
            size={"large"}
            style={{ width: "100%" }}
          >
            <Radio value={_opt.value} />
          </Radio.Group>
        </div>
      ))}
    </Wrapper>
  );
};

export const ScaleLabels = () => {
  return (
    <Wrapper className={"headings"}>
      <div />
      {options.map((_opt: any) => (
        <div className={"option"}>{_opt.label}</div>
      ))}
    </Wrapper>
  );
};

const options = [
  { value: "5", label: "Strongly Agree" },
  { value: "4", label: "Agree" },
  { value: "3", label: "Neutral or N/A" },
  { value: "2", label: "Disagree" },
  { value: "1", label: "Strongly Disagree" },
];

/**
 * set of practices for promoting better collaboration and extensive automation of the processes occurring between operational and development teams
 */
