import React, { useState } from "react";
import { Form, Button, Row, Col, Input } from "antd";
import { Steps } from "../types";
import { Submit, StepTitle, MultipleSelect } from "../../../components";

import { useStepUtils } from "./useStepUtils";
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "../../../store/rootReducer";
import { callSaveSurveyAPI } from "../submitSurveySlice";
import Checkbox from "antd/lib/checkbox/Checkbox";
import { SURVEY_CLOSED } from "../../../components/SurveyClosedAlert/SurveyClosedAlert";

export const Challenges: React.FC<any> = () => {
  const [isReady, setIsReady] = useState(false);

  const [formData, onChange, onChangeByName, onSubmit, saveStepData] =
    useStepUtils(Steps.CHALLENGES);

  const dispatch = useDispatch();
  const submitState = useSelector((state: AppState) => state.save);

  const onCompleteSurvey = () => {
    saveStepData();
    !SURVEY_CLOSED && dispatch(callSaveSurveyAPI());
  };

  const onReadyChange = (e: any) => {
    setIsReady(e.target.checked);
  };

  return (
    <>
      <StepTitle step={Steps.CHALLENGES} />
      <Form layout="vertical" className={"step-wrapper"}>
        <Row gutter={[16, 16]}>
          <Col span={24}>
            <Form.Item label="What challenges do you associate DevOps with on a company level? (maximum 3)">
              <MultipleSelect
                options={[
                  "Coping with cultural changes",
                  "Upskilling current staff",
                  "Recruitment",
                  "Changing technology stack",
                  "Transition to DevOps way of working",
                  "Transitioning legacy infrastructure/projects to DevOps",
                ]}
                selectedOptions={formData?.organizationalChallenges}
                onChange={(nextSelected: string[]) =>
                  onChangeByName("organizationalChallenges", nextSelected)
                }
                limit={3}
                disableAdd
              />
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={[16, 16]}>
          <Col span={24}>
            <Form.Item label="What challenges do you associate DevOps with on a team level? (maximum 3)">
              <MultipleSelect
                options={[
                  "Changing technology stack",
                  "Coping with changing requirements",
                  "Complexity of the tools and technologies",
                  "Too many tools in existence",
                  "Lack of documentation/resources",
                ]}
                selectedOptions={formData?.teamChallenges}
                onChange={(nextSelected: string[]) =>
                  onChangeByName("teamChallenges", nextSelected)
                }
                limit={3}
                disableAdd
              />
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={[16, 16]}>
          <Col span={24}>
            <Form.Item label="Could you think of any DevOps challenges that were not listed above?">
              <Input.TextArea
                autoSize={{ minRows: 2, maxRows: 6 }}
                onChange={onChange}
                name={"otherBenefits"}
                value={formData?.otherChallenges}
                placeholder="Other challenges..."
                size="large"
              />
            </Form.Item>
          </Col>
        </Row>

        <Submit>
          {!SURVEY_CLOSED && (
            <Checkbox onChange={onReadyChange} checked={isReady}>
              I am ready to submit my responses.
            </Checkbox>
          )}
          <Button
            type="primary"
            onClick={onCompleteSurvey}
            size={"large"}
            disabled={!isReady || SURVEY_CLOSED}
            loading={submitState.loading}
          >
            {SURVEY_CLOSED ? "Survey is closed!" : "Complete Questionnaire"}
          </Button>
        </Submit>
      </Form>
    </>
  );
};
