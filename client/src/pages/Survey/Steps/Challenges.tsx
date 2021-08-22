import React from "react";
import { Form, Button, Row, Col, Input } from "antd";
import { Steps } from "../types";
import { Submit, StepTitle, MultipleSelect } from "../../../components";

import { useStepUtils } from "./useStepUtils";

export const Challenges: React.FC<any> = () => {
  const [formData, onChange, onChangeByName, onSubmit] = useStepUtils(
    Steps.CHALLENGES
  );

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
          <Button type="primary" onClick={onSubmit} size={"large"}>
            Next
          </Button>
        </Submit>
      </Form>
    </>
  );
};
