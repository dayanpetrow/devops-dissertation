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
import { Population } from "./charts/Population/Population";

const STEPS = {
  DEMOGRAPHICS: "Demographics",
  PERCEPTION: "Perception",
  MATURITY: "Maturity",
  CULTURE: "Culture",
  BENEFITS: "Benefits",
  CHALLENGES: "Challenges",
  // POPULATION: "Population",
};

export const App = () => {
  const [activeTab, setActiveTab] = useState(STEPS.DEMOGRAPHICS);

  const navigate = (path) => (window.location.href = path);

  return (
    <Wrapper>
      <Sidebar>
        <div className="nav">
          <div>
            <Button
              type="primary"
              shape="round"
              target="_blank"
              href={"/questionnaire"}
            >
              Questionnaire
            </Button>
            <Button type="primary" shape="round" target="_blank" href={"/data"}>
              Files
            </Button>
            <Button
              type="primary"
              shape="round"
              target="_blank"
              href={"/devops_research.pdf"}
            >
              Report
            </Button>
          </div>
          <div>
            <span>Charts:</span>
            {Object.keys(STEPS).map((stepKey) => (
              <Button
                type="primary"
                shape="round"
                variant={"primarh"}
                onClick={() => setActiveTab(STEPS[stepKey])}
              >
                {STEPS[stepKey]}
              </Button>
            ))}
          </div>
        </div>
      </Sidebar>
      <Main>
        <StepHeader title={activeTab} />
        {activeTab === STEPS.DEMOGRAPHICS && <Professional />}
        {activeTab === STEPS.PERCEPTION && <Perception />}
        {activeTab === STEPS.CULTURE && <Culture />}
        {activeTab === STEPS.BENEFITS && <Benefits />}
        {activeTab === STEPS.CHALLENGES && <Challenges />}
        {activeTab === STEPS.MATURITY && <Maturity />}
        {/* {activeTab === STEPS.POPULATION && <Population />} */}
      </Main>
    </Wrapper>
  );
};
