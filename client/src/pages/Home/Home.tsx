import React, { useState } from "react";
import { Button, Checkbox, Collapse } from "antd";
import { useDispatch } from "react-redux";
import { acceptAgreement } from "../Survey/surveySlice";
import { TopBar } from "../../components/TopBar/TopBar";
import { Wrapper } from "./styled";
import shefLogo from "../../logo.png";

const { Panel } = Collapse;

const consentParagrahs = [
  `I have read and understood the project information sheet dated 20/07/2021 or the project has been fully explained to me.`,
  `I have been given the opportunity to ask questions about the project.`,
  `I agree to take part in the project. I understand that taking part in the project will include completing a questionnaire. I understand that the questionnaire is expected to take approximately 10 to 15 minutes to complete.
`,
  `I understand that my survey responses are completely anonymous. I understand that once the questionnaire is submitted the researchers will not be able to identify or remove my responses.
`,
  `I understand and agree that my words may be quoted in publications, reports, web pages, and other research outputs. I understand that I will not be named in these outputs.
`,
  `I understand that taking part is voluntary and that I can withdraw from the study at any time before the submission of the questionnaire. I do not have to give any reasons for why I no longer want to take part and there will be no adverse consequences if I choose to withdraw.
`,
  `I understand that by choosing to participate as a volunteer in this research, this does not create a legally binding agreement nor is it intended to create an employment relationship with the University of Sheffield.
`,
];

export const Home = () => {
  const [isChecked, setIsChecked] = useState(false);

  const dispatch = useDispatch();

  const onChange = (e: any) => {
    setIsChecked(e.target.checked);
  };

  const onSubmit = () => dispatch(acceptAgreement());

  return (
    <>
      <TopBar />
      <Wrapper>
        <header>
          <img src={shefLogo} alt={"logo"} />
          <div className={"title-wrapper"}>
            <h1 className={"title"}>
              Investigation of the adoption of DevOps practices and related
              challenges in the Bulgarian Software Development Industry
            </h1>
          </div>
        </header>

        <div className={"consent-wrapper"}>
          <Collapse defaultActiveKey={["1"]} accordion={false}>
            <Panel header="Project Information (20/07/2021)" key="1">
              <p>
                This research aims to investigate the adoption of DevOps
                practices and related challenges in the Bulgarian Software
                Industry. The motivation for the research is that despite the
                growing popularity of DevOps on a global level it remains an
                under-researched area with very limited quantity of academic
                resources. In addition, there is no research that explores the
                DevOps phenomenon in the context of the Bulgarian Software
                Industry. We believe that the concentration of international
                companies in Bulgaria will serve towards forming a common
                knowledge and understanding of DevOps. The objective of this
                research is to answer the following questions:
              </p>
              <ul>
                <li>What is the most common definition of DevOps?</li>
                <li>What is the perception of DevOps in relation to Agile?</li>
                <li>
                  What is the state of technical DevOps adoption and maturity?
                </li>
                <li>What is the state of DevOps cultural adoption?</li>
                <li>
                  What are the most common benefits and challenges on
                  organizational and team/project levels?
                </li>
                <li>
                  Is there a relation between company nationality, size and
                  orientation and DevOps technical maturity and cultural
                  adoption?
                </li>
              </ul>
              <p>
                For questions and general information, please use the contact
                details listed at the top of the page.
              </p>
            </Panel>
            <Panel header="Consent Agreement" key="2">
              {consentParagrahs.map((para, index) => (
                <p key={index}>{para}</p>
              ))}
            </Panel>
          </Collapse>

          <div className={"agreement"}>
            <Checkbox onChange={onChange} checked={isChecked}>
              I have read and understood the Consent Agreement.
            </Checkbox>
          </div>
        </div>

        <div>
          <Button
            type="primary"
            block
            disabled={!isChecked}
            onClick={onSubmit}
            size={"large"}
          >
            Continue
          </Button>
        </div>
      </Wrapper>
    </>
  );
};
