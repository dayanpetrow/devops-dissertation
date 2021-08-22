import React from "react";
import { Form, Button, Row, Col, Input } from "antd";
import { Steps } from "../types";
import { Submit, StepTitle, MultipleSelect } from "../../../components";
import { useStepUtils } from "./useStepUtils";

export const Benefits: React.FC<any> = () => {
  const [formData, onChange, onChangeByName, onSubmit] = useStepUtils(
    Steps.BENEFITS
  );

  return (
    <>
      <StepTitle step={Steps.BENEFITS} />
      <Form layout="vertical" className={"step-wrapper"}>
        <Row gutter={[16, 16]}>
          <Col span={24}>
            <Form.Item label="What are the most important benefts of DevOps on a company level? (maximum 3)">
              <MultipleSelect
                options={[
                  "Competitive advantage",
                  "Faster time-to-market",
                  "Ability to develop software faster",
                  "Quality of products and services provided",
                  "Quantity of products and services provided",
                  "Improved customer experience",
                  "Operational efficiency",
                  "Cost reduction",
                  "Rapid delivery cycle",
                  "Scalability",
                  "Responsiveness to customer needs",
                  "Quicker innovation",
                ]}
                selectedOptions={formData?.organizationalBenefits}
                onChange={(nextSelected: string[]) =>
                  onChangeByName("organizationalBenefits", nextSelected)
                }
                limit={3}
                disableAdd
              />
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={[16, 16]}>
          <Col span={24}>
            <Form.Item label="What are the most important benefits of DevOps on a project/team level? (maximum 3)">
              <MultipleSelect
                options={[
                  "Higher productivity",
                  "Higher motivation and engagement",
                  "Improved communication & collaboration between team members",
                  "Reduce infrastructure problems",
                  "Automation of repetitive work, focus on development",
                  "Risk mitigation",
                  "Improved incident handling",
                  "Rolling back to previous build versions",
                  "Continuous customer feedback",
                  "Lower failure rate of new releases",
                  "Improved code quality",
                  "Rapid delivery cycle",
                  "Scalability",
                  "Improved deployment frequency",
                  "Alignment and unification of goals",
                  "Sense of shared ownership and responsibility  between team members",
                ]}
                selectedOptions={formData?.projectBenefits}
                onChange={(nextSelected: string[]) =>
                  onChangeByName("projectBenefits", nextSelected)
                }
                limit={3}
                disableAdd
              />
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={[16, 16]}>
          <Col span={24}>
            <Form.Item label="Could you think of any other DevOps benefits that were not listed above?">
              <Input.TextArea
                autoSize={{ minRows: 2, maxRows: 6 }}
                onChange={onChange}
                name={"otherBenefits"}
                value={formData?.otherBenefits}
                placeholder="Other benefits..."
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
