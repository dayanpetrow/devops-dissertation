import React from "react";
import {
  Form,
  Input,
  Button,
  InputNumber,
  Row,
  Col,
  Radio,
  Select,
} from "antd";
import { Steps } from "../types";
import {
  SubSectionTitle,
  Submit,
  StepTitle,
  MultipleSelect,
} from "../../../components";

import { useStepUtils } from "./useStepUtils";

export const Perception: React.FC<any> = () => {
  const [formData, onChange, onChangeByName, onSubmit] = useStepUtils(
    Steps.PERCEPTION
  );

  return (
    <>
      <StepTitle step={Steps.PERCEPTION} />
      <Form layout="vertical" className={"step-wrapper"}>
        <Row gutter={[16, 16]}>
          <Col span={24}>
            <Form.Item label="What is your definition of DevOps?">
              <Input.TextArea
                autoSize={{ minRows: 2, maxRows: 6 }}
                onChange={onChange}
                name={"devOpsDefinition"}
                value={formData?.devOpsDefinition}
                placeholder="Describe DevOps?"
                size="large"
              />
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={[16, 16]}>
          <Col xs={24} xl={24}>
            <Form.Item label="How would you describe DevOps in relation to Agile?">
              <Select
                placeholder={"Select one..."}
                value={formData?.agileRelation}
                onChange={(value) => onChangeByName("agileRelation", value)}
                size={"large"}
              >
                {[
                  { value: "0", text: "DevOps has no relation with Agile" },
                  { value: "1", text: "DevOps aims to replace Agile" },
                  { value: "2", text: "DevOps extends Agile" },
                  { value: "3", text: "I don't know" },
                ].map((_option: any) => (
                  <Select.Option value={_option.value}>
                    {_option.text}
                  </Select.Option>
                ))}
              </Select>
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
