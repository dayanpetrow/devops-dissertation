import React, { useState } from "react";
import "./App.css";

import { Button, Steps } from "antd";
import { Wrapper, Main, Sidebar, ResultsWrapper } from "./styled";
import { StepHeader } from "./components/StepHeader/StepHeader";

// results
import { Professional } from "./charts/Professional/Professional";
import { Perception } from "./charts/Perception/Perception";
import { Culture } from "./charts/Culture/Culture";
import { Benefits } from "./charts/Benefits/Benefits";
import { Challenges } from "./charts/Challenges/Challenges";
import { Maturity } from "./charts/Maturity/Maturity";

const STEPS = {
  PROFESSIONAL: "Professional",
  PERCEPTION: "Perception",
  MATURITY: "Maturity",
  CULTURE: "Culture",
  BENEFITS: "Benefits",
  CHALLENGES: "Challenges",
};

export const App = () => {
  const [activeTab, setActiveTab] = useState(STEPS.PROFESSIONAL);

  return (
    <Wrapper>
      <Sidebar>
        {Object.keys(STEPS).map((stepKey) => (
          <Button onClick={() => setActiveTab(STEPS[stepKey])}>
            {STEPS[stepKey]}
          </Button>
        ))}
      </Sidebar>
      <Main>
        <StepHeader title={activeTab} />
        {activeTab === STEPS.PROFESSIONAL && <Professional />}
        {activeTab === STEPS.PERCEPTION && <Perception />}
        {activeTab === STEPS.CULTURE && <Culture />}
        {activeTab === STEPS.BENEFITS && <Benefits />}
        {activeTab === STEPS.CHALLENGES && <Challenges />}
        {activeTab === STEPS.MATURITY && <Maturity />}
      </Main>
    </Wrapper>
  );
};
