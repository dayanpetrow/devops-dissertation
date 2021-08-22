import React from "react";
import { Form, Input, Button, InputNumber, Row, Col, Radio } from "antd";
import { Steps } from "../types";
import {
  SubSectionTitle,
  Submit,
  StepTitle,
  Select,
  MultipleSelect,
} from "../../../components";

import { useStepUtils } from "./useStepUtils";

export const Tools: React.FC<any> = () => {
  const [formData, onChange, onChangeByName, onSubmit] = useStepUtils(
    Steps.TOOLS
  );

  return (
    <>
      <StepTitle step={Steps.TOOLS} />
      <Form layout="vertical" className={"step-wrapper"}>
        <Row gutter={[16, 16]}>
          <Col span={24}>
            <Form.Item label="What communication and collaboration tools and applications do you use in your daily workflow?">
              <MultipleSelect
                options={[
                  "Jira",
                  "Confluence",
                  "Slack",
                  "Asana",
                  "Skype",
                  "Google Chat",
                  "Zoom",
                  "Microsoft Teams",
                  "Trello",
                ]}
                selectedOptions={formData?.tools}
                onChange={(nextSelected: string[]) =>
                  onChangeByName("tools", nextSelected)
                }
              />
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={[16, 16]}>
          <Col span={24}>
            <Form.Item label="What tools, applications and platforms are part of your company DevOps toolchain?">
              <MultipleSelect
                options={[
                  "GitHub",
                  "GitLab",
                  "BitBucket",
                  "TravisCI",
                  "CircleCI",
                  "CodeShip",
                  "Heroku",
                  "Docker",
                  "Kubernetes",
                  "Jenkins",
                  "Redmine",
                  "Puppet",
                  "Nagios",
                  "AWS",
                  "Google Cloud",
                  "Microsoft Azure",
                  "Sonar",
                  "Ansible",
                  "TeamCity",
                  "Gradle",
                  "Maven",
                ]}
                selectedOptions={formData?.tools}
                onChange={(nextSelected: string[]) =>
                  onChangeByName("tools", nextSelected)
                }
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

const projectFrequencyOptions = [
  "All projects",
  "Most projects",
  "Some projects",
  "Never",
  "Not Applicable",
];



// practices

