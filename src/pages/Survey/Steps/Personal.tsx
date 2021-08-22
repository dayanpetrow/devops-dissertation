import React from "react";
import { Form, Input, Button, InputNumber, Row, Col } from "antd";
import { Steps } from "../types";
import {
  SubSectionTitle,
  Submit,
  StepTitle,
  Select,
} from "../../../components";

import { useStepUtils } from "./useStepUtils";

export const Personal: React.FC<any> = () => {
  const [formData, onChange, onChangeByName, onSubmit] = useStepUtils(
    Steps.PERSONAL
  );
  return (
    <>
      <StepTitle step={Steps.PERSONAL} />
      <Form layout="vertical" className={"step-wrapper"}>
        <Row gutter={[16, 16]}>
          <Col xs={24} lg={8}>
            <Form.Item label="Education Level">
              <Select
                onChange={(value) => onChangeByName("education", value)}
                value={formData?.education}
                options={[
                  "High School or equivalent",
                  `Bachelor's Degree`,
                  `Master's Degree`,
                  "PhD",
                ]}
                disableAdd={true}
              />
            </Form.Item>
          </Col>
          <Col xs={24} lg={8}>
            <Form.Item label="Field of Study">
              <Input
                disabled={
                  ![`Bachelor's Degree`, `Master's Degree`, "PhD"].includes(
                    formData?.education
                  )
                }
                onChange={onChange}
                name={"fieldOfStudy"}
                value={formData?.fieldOfStudy}
                placeholder="Field of Study"
                size="large"
              />
            </Form.Item>
          </Col>
          <Col xs={24} lg={8}>
            <Form.Item label="University Location">
              <Select
                onChange={(value) =>
                  onChangeByName("universityLocation", value)
                }
                value={formData?.universityLocation}
                options={["Bulgaria", "Other"]}
                disableAdd={true}
                disabled={
                  ![`Bachelor's Degree`, `Master's Degree`, "PhD"].includes(
                    formData?.education
                  )
                }
              />
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={[16, 16]}>
          <Col xs={24} lg={8}>
            <Form.Item label="Position">
              <Select
                onChange={(value) => onChangeByName("companyPosition", value)}
                value={formData?.companyPosition}
                options={[
                  "Software Developer",
                  "Cloud/DevOps Engineer",
                  "IT Leadership/Management",
                ]}
              />
            </Form.Item>
          </Col>
          <Col xs={24} lg={8}>
            <Form.Item label="Seniority Level">
              <Select
                onChange={(value) => onChangeByName("positionSeniority", value)}
                value={formData?.positionSeniority}
                options={[
                  "None",
                  "Intern",
                  "Junior",
                  "Mid/Regular",
                  "Senior",
                  "Principle",
                ]}
              />
            </Form.Item>
          </Col>
          <Col xs={24} lg={8}>
            <Form.Item label="Years of Experience">
              <InputNumber
                onChange={(value) => onChangeByName("yearsOfExperience", value)}
                name={"yearsOfExperience"}
                value={formData?.yearsOfExperience}
                placeholder="Years of experience..."
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
