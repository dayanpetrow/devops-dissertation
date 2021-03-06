import React from "react";
import { Select, Steps, Form } from "antd";
import { goStep } from "./stepperSlice";
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "../../../store/rootReducer";

import { Wrapper, MobileStepper } from "./styled";

export const Stepper = () => {
  const dispatch = useDispatch();
  const currentStep = useSelector(
    (state: AppState) => state.stepper.currentStep
  );

  const onChange = (step: number) => {
    dispatch(goStep(step));
  };

  return (
    <>
      <MobileStepper>
        <span>{`Step ${currentStep + 1}/${steps.length}`}</span>
        <Select
          style={{ width: "70%", maxWidth: "250px" }}
          size={"large"}
          value={currentStep.toString()}
          onChange={(val: string) => onChange(+val)}
        >
          {steps.map((step, index) => (
            <Select.Option key={index} value={index.toString()}>{step.title}</Select.Option>
          ))}
        </Select>
      </MobileStepper>
      <Wrapper>
        <Steps current={currentStep} onChange={onChange} direction="vertical">
          {steps.map((step, index) => (
            <Steps.Step key={index} title={step.title} description={step.description} />
          ))}
        </Steps>
      </Wrapper>
    </>
  );
};

type Step = {
  title: string;
  description: string;
};

const steps: Step[] = [
  {
    title: "Professional Background",
    description: "",
  },
  {
    title: "DevOps Perception",
    description: "",
  },
  {
    title: "DevOps Maturity",
    description: "",
  },
  {
    title: "DevOps Culture",
    description: "",
  },
  {
    title: "DevOps Benefits",
    description: "",
  },
  {
    title: "DevOps Challenges",
    description: "",
  },
];
