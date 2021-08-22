import React from "react";
import { useSelector } from "react-redux";
import { AppState } from "../../store/rootReducer";
import { Wrapper, Main, SurveyWrapper } from "./styled";
import { Stepper } from "./Stepper/Stepper";
import { TopBar } from "../../components/TopBar/TopBar";

import { Personal } from "./Steps/Personal";
import { Professional } from "./Steps/Professional";
import { Perception } from "./Steps/Perception";
import { Maturity } from "./Steps/Maturity";
import { Culture } from "./Steps/Culture";
import { Tools } from "./Steps/Tools";
import { Benefits } from "./Steps/Benefits";
import { Challenges } from "./Steps/Challenges";
import { Finish } from "./Steps/Finish";

const renderStep = (currentStep: number) => {
  const normalizedStep = currentStep + 1;
  switch (normalizedStep) {
    case 1:
      return <Professional />;
    case 2:
      return <Perception />;
    case 3:
      return <Maturity />;
    case 4:
      return <Culture />;
    case 5:
      return <Benefits />;
    case 6:
      return <Challenges />;
    default:
      return <h1>Step not found!</h1>;
  }
};

export const Survey = () => {
  const currentStep = useSelector(
    (state: AppState) => state.stepper.currentStep
  );

  return (
    <Wrapper>
      <Stepper />
      <SurveyWrapper>
        <TopBar />
        <Main>{renderStep(currentStep)}</Main>
      </SurveyWrapper>
    </Wrapper>
  );
};
