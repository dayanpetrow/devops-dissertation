import React from "react";
import { Radio } from "antd";
import styled from "styled-components";

interface Props {
  title: string;
  value: any;
  onChange: (value: string) => void;
}

const Wrapper = styled.div`
  min-height: 42px;
  display: grid;
  grid-template-columns: 7fr 5fr;
  padding: 8px 8px;
  transition: 0.3s ease all;

  @media (max-width: 768px) {
    margin: 6px 0;
    border-bottom: 1px solid #e9e9e9;
    grid-template-columns: 1fr;
    grid-template-rows: auto;
  }

  .options {
    display: grid;
    grid-template-columns: repeat(5, 2fr);
  }

  &:hover {
    transition: 0.3s ease all;
    background-color: #e8f3ff;
  }
  &.headings {
    font-weight: 600;
    text-align: center;
    border-radius: 4px;
    background-color: #f9f9f9;
    @media (max-width: 768px) {
      display: none;
    }
  }
  .option,
  .ant-radio-wrapper {
    display: flex;
    text-align: center;
    align-items: center;
    justify-content: center;
    margin-right: 2px;
    > span {
      padding: 0px;
    }

    @media (max-width: 769px) {
      > span {
        text-align: center;
      }
    }
    @media (max-width: 769px) {
      flex-direction: column;
      justify-content: flex-start;
      align-items: center;
    }
  }
  .ant-radio-inner {
    border: 1px solid #424242;
  }
  .label {
    text-align: center;
    font-size: 11px;
    line-height: 11px;
    @media (min-width: 769px) {
      display: none;
    }
  }

  .title {
    display: flex;
    align-items: center;
  }

  .ant-radio {
    margin: 4px;
  }
`;

export const Scale: React.FC<Props> = (props) => {
  const { title, value, onChange } = props;

  const _onChange = (e: any) => {
    onChange(e.target.value);
  };

  return (
    <Wrapper>
      <div className={"title"}>{title}</div>
      <div className={"options"}>
        {options.map((_opt: any, index: number) => (
          <div className={"option"} onClick={() => onChange(_opt.value)}>
            <Radio.Group
              onChange={_onChange}
              value={value}
              size={"large"}
              style={{ width: "100%" }}
            >
              <Radio value={_opt.value}>
                <span className={"label"}>{options[index].label}</span>
              </Radio>
            </Radio.Group>
          </div>
        ))}
      </div>
    </Wrapper>
  );
};

export const ScaleLabels = () => {
  return (
    <Wrapper className={"headings"}>
      <div className={"title"}></div>
      <div className={"options"}>
        {options.map((_opt: any) => (
          <div className={"option"}>{_opt.label}</div>
        ))}
      </div>
    </Wrapper>
  );
};

const options = [
  { value: "1", label: "Strongly Disagree" },
  { value: "2", label: "Disagree" },
  { value: "3", label: "Neutral or N/A" },
  { value: "4", label: "Agree" },
  { value: "5", label: "Strongly Agree" },
];

/**
 * set of practices for promoting better collaboration and extensive automation of the processes occurring between operational and development teams
 */
