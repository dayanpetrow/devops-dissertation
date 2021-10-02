import React, { useEffect } from "react";
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
import { Helmet } from "react-helmet";
import {
  SurveyClosedAlert,
  SURVEY_CLOSED,
} from "../../components/SurveyClosedAlert/SurveyClosedAlert";

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

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, [currentStep]);

  return (
    <>
      <Helmet>
        <title>{`${currentStep + 1}/6`} DevOps Research</title>
      </Helmet>
      <Wrapper>
        <Stepper />
        <SurveyWrapper>
          <TopBar />
          <Main>
            {SURVEY_CLOSED && <SurveyClosedAlert />}
            {renderStep(currentStep)}
          </Main>
        </SurveyWrapper>
      </Wrapper>
    </>
  );
};
