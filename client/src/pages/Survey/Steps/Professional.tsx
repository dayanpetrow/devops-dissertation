import React from "react";
import { Form, Button, Row, Col, Select } from "antd";
import { Steps } from "../types";
import { SubSectionTitle, Submit, StepTitle } from "../../../components";

import { useStepUtils } from "./useStepUtils";

export const Professional: React.FC<any> = () => {
  const [formData, onChange, onChangeByName, onSubmit] = useStepUtils(
    Steps.PROFESSIONAL
  );

  return (
    <>
      <StepTitle step={Steps.PROFESSIONAL} />
      <Form layout="vertical" className={"step-wrapper"}>
        <SubSectionTitle title={"Your Position"} />
        <Row gutter={[16, 16]}>
          <Col xs={24} lg={8}>
            <Form.Item label="Position">
              <Select
                placeholder={"Select one..."}
                onChange={(value) => onChangeByName("position", value)}
                value={formData?.position}
                size={"large"}
              >
                {[
                  { value: "1", text: "Software Development" },
                  { value: "2", text: "Cloud/DevOps" },
                  { value: "3", text: "Leadership/Management" },
                  { value: "4", text: "Design" },
                  { value: "5", text: "Testing" },
                  { value: "6", text: "Other" },
                ].map((_option: any) => (
                  <Select.Option value={_option.value}>
                    {_option.text}
                  </Select.Option>
                ))}
              </Select>
            </Form.Item>
          </Col>
          <Col xs={24} lg={8}>
            <Form.Item label="Years of Experience">
              <Select
                placeholder={"Select one..."}
                onChange={(value) => onChangeByName("experience", value)}
                value={formData?.experience}
                size={"large"}
              >
                {[
                  { value: "1", text: "0-2" },
                  { value: "2", text: "3-5" },
                  { value: "3", text: "6-10" },
                  { value: "4", text: "11-20" },
                  { value: "5", text: "More than 20" },
                ].map((_option: any) => (
                  <Select.Option value={_option.value}>
                    {_option.text}
                  </Select.Option>
                ))}
              </Select>
            </Form.Item>
          </Col>
        </Row>

        <SubSectionTitle title={"Your Company"} />
        <Row gutter={[16, 16]}>
          <Col xs={24} lg={12} xl={8}>
            <Form.Item label="Company Nationality">
              <Select
                placeholder={"Select one..."}
                onChange={(value) =>
                  onChangeByName("companyNationality", value)
                }
                value={formData?.companyNationality}
                size={"large"}
              >
                {[
                  { value: "1", text: "Bulgarian and operates in Bulgaria" },
                  {
                    value: "2",
                    text: "Bulgarian and operates internationally",
                  },
                  { value: "3", text: "Multinational" },
                ].map((_option: any) => (
                  <Select.Option value={_option.value}>
                    {_option.text}
                  </Select.Option>
                ))}
              </Select>
            </Form.Item>
          </Col>
          <Col xs={24} lg={12} xl={8}>
            <Form.Item label="Company Size">
              <Select
                placeholder={"Select one..."}
                onChange={(value) => onChangeByName("companySize", value)}
                value={formData?.companySize}
                size={"large"}
              >
                {[
                  { value: "1", text: "1-19" },
                  { value: "2", text: "20-99" },
                  { value: "3", text: "100-249" },
                  { value: "4", text: "250-499" },
                  { value: "5", text: "500-1999" },
                  { value: "6", text: "More than 2000" },
                ].map((_option: any) => (
                  <Select.Option value={_option.value}>
                    {_option.text}
                  </Select.Option>
                ))}
              </Select>
            </Form.Item>
          </Col>
          <Col xs={24} lg={12} xl={8}>
            <Form.Item label="Company Orientation">
              <Select
                placeholder={"Select one..."}
                onChange={(value) =>
                  onChangeByName("companyOrientation", value)
                }
                value={formData?.companyOrientation}
                size={"large"}
              >
                {[
                  { value: "1", text: "Service" },
                  { value: "2", text: "Product" },
                  { value: "3", text: "Mixed" },
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
