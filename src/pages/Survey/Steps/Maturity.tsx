import React from "react";
import { Form, Input, Button, InputNumber, Row, Col, Select } from "antd";
import { Steps } from "../types";
import {
  SubSectionTitle,
  Submit,
  StepTitle,
  MultipleSelect,
  Scale,
  ScaleLabels,
} from "../../../components";

import { useStepUtils } from "./useStepUtils";

export const Maturity: React.FC<any> = () => {
  const [formData, onChange, onChangeByName, onSubmit] = useStepUtils(
    Steps.MATURITY
  );

  return (
    <>
      <StepTitle step={Steps.MATURITY} />
      <Form layout="vertical" className={"step-wrapper"}>
        <Row gutter={[16, 16]}>
          <Col xs={24} xl={12}>
            <Form.Item label="How long does it take to go from code committed to code successfully running in production?">
              <Select
                placeholder={"Select one..."}
                onChange={(value) => onChangeByName("leadTime", value)}
                value={formData?.leadTime}
                size={"large"}
              >
                {[
                  { value: "0", text: "More than one month" },
                  { value: "2", text: "One week to one month" },
                  { value: "4", text: "One day to one week" },
                  { value: "6", text: "Less than one day" },
                  { value: "8", text: "Less than one hour" },
                ].map((_option: any) => (
                  <Select.Option value={_option.value}>
                    {_option.text}
                  </Select.Option>
                ))}
              </Select>
            </Form.Item>
          </Col>
          <Col xs={24} xl={12}>
            <Form.Item label="How often does your team deploy code to production?">
              <Select
                placeholder={"Select one..."}
                onChange={(value) =>
                  onChangeByName("deploymentFrequency", value)
                }
                value={formData?.deploymentFrequency}
                size={"large"}
              >
                {[
                  { value: "8", text: "Multiple deploys per day or on demand" },
                  { value: "6", text: "Once per day" },
                  { value: "4", text: "Multiple deploys per week" },
                  {
                    value: "2",
                    text: "Between once per week and once per month",
                  },
                  { value: "0", text: "Fewer than once per month" },
                ].map((_option: any) => (
                  <Select.Option value={_option.value}>
                    {_option.text}
                  </Select.Option>
                ))}
              </Select>
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={[16, 16]}>
          <Col xs={24} xl={12}>
            <Form.Item label="How long does it take to restore a service after an infrastructure incident or defect?">
              <Select
                placeholder={"Select one..."}
                onChange={(value) => onChangeByName("timeToRestore", value)}
                value={formData?.timeToRestore}
                size={"large"}
              >
                {[
                  { value: "0", text: "More than a month" },
                  { value: "2", text: "One week to one month" },
                  { value: "4", text: "One day to one week" },
                  { value: "6", text: "Less than one day" },
                  { value: "8", text: "Less than one hour" },
                ].map((_option: any) => (
                  <Select.Option value={_option.value}>
                    {_option.text}
                  </Select.Option>
                ))}
              </Select>
            </Form.Item>
          </Col>
          <Col xs={24} xl={12}>
            <Form.Item
              label="What percentage of production changes result in degraded service?"
              tooltip={
                "Production changes that cause issues and later require additional work be resolved, including hotfixes, bugfixes, UX improvements, etc"
              }
            >
              <Select
                placeholder={"Select one..."}
                onChange={(value) =>
                  onChangeByName("changeFailPercentage", value)
                }
                value={formData?.changeFailPercentage}
                size={"large"}
              >
                {[
                  { value: "10", text: "0–15%" },
                  { value: "8", text: "16–30%" },
                  { value: "6", text: "31–45%" },
                  { value: "4", text: "46–60%" },
                  { value: "2", text: "61–75%" },
                  { value: "0", text: "76–100%" },
                ].map((_option: any) => (
                  <Select.Option value={_option.value}>
                    {_option.text}
                  </Select.Option>
                ))}
              </Select>
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={[16, 16]}>
          <Col xs={24} xl={12}>
            <Form.Item label="Who has the responsibility for creating and maintaining your team's CI/CD toolchain?">
              <Select
                placeholder={"Select one..."}
                onChange={(value) =>
                  onChangeByName("toolchainResponsibility", value)
                }
                value={formData?.toolchainResponsibility}
                size={"large"}
              >
                {[
                  {
                    value: "4",
                    text: "My team has full autonomy to choose and configure its own toolchain",
                  },
                  {
                    value: "3",
                    text: "The toolchain is maintained by a centralized team within my company",
                  },
                  {
                    value: "2",
                    text: "My team uses a toolchain with preconfigured scripts, and we have the ability to override it",
                  },
                  { value: "1", text: "Other" },
                ].map((_option: any) => (
                  <Select.Option value={_option.value}>
                    {_option.text}
                  </Select.Option>
                ))}
              </Select>
            </Form.Item>
          </Col>
          <Col xs={24} xl={12}>
            <Form.Item label="Which tools are part of your team's toolchain?">
              <MultipleSelect
                selectedOptions={formData.toolchainIncludes}
                onChange={(value) => onChangeByName("toolchainIncludes", value)}
                options={[
                  "Automated unit tests",
                  "Automated build",
                  "Automated deployment to testing environments",
                  "Automated deployment to production",
                  "Automated performance testing",
                  "Automated security testing",
                  "Automated acceptance testing",
                  "Integration with monitoring tools",
                  "Integration with logging tools",
                ]}
              />
            </Form.Item>
          </Col>
        </Row>

        <ScaleLabels />

        <Scale
          title={
            "My team has the ability to deploy our system to production at any time, on demand"
          }
          onChange={(value: any) => onChangeByName("onDemandDeployment", value)}
          value={formData.onDemandDeployment}
        />

        <Scale
          title={
            "My team can release software to production during normal business hours with negligible downtime"
          }
          onChange={(value: any) =>
            onChangeByName("businessHoursDeployments", value)
          }
          value={formData.businessHoursDeployments}
        />

        <Scale
          title={
            "Code commits results in automated tests being run and an automated build of the system"
          }
          onChange={(value: any) => onChangeByName("commitAutomation", value)}
          value={formData.commitAutomation}
        />

        <Scale
          title={
            "Failing tests will prevent a commit to progress through the pipeline"
          }
          onChange={(value: any) => onChangeByName("failingTests", value)}
          value={formData.failingTests}
        />

        <Scale
          title={
            "My team actively identifies and automates repetitive manual work"
          }
          onChange={(value: any) => onChangeByName("activelyAutomates", value)}
          value={formData.activelyAutomates}
        />

        <Scale
          title={
            "My team has predefined protocols for handling production incidents"
          }
          onChange={(value: any) =>
            onChangeByName("productionIncidents", value)
          }
          value={formData.productionIncidents}
        />

        <Scale
          title={
            "My team has access to tools that help us understand, trace and diagnose system and infrastructure problems"
          }
          onChange={(value: any) => onChangeByName("monitoringIssues", value)}
          value={formData.monitoringIssues}
        />

        <Scale
          title={
            "My team has access to tools that monitor key business and system metrics"
          }
          onChange={(value: any) => onChangeByName("monitorMetrics", value)}
          value={formData.monitorMetrics}
        />

        <Scale
          title={
            "Security reviews are regularly performed during the development process"
          }
          onChange={(value: any) => onChangeByName("securityReviews", value)}
          value={formData.securityReviews}
        />

        <Scale
          title={
            "Most of the code for the product I work on is documented and I can easily access and find the documentation that I need"
          }
          onChange={(value: any) => onChangeByName("documentation", value)}
          value={formData.documentation}
        />

        <Scale
          title={
            "My team prioritizes keeping the software in deployable state over development of new features"
          }
          onChange={(value: any) => onChangeByName("deployableState", value)}
          value={formData.deployableState}
        />

        <Submit>
          <Button type="primary" onClick={onSubmit} size={"large"}>
            Next
          </Button>
        </Submit>
      </Form>
    </>
  );
};

// Once I have access, I can independently provision and configure the cloud resources and capabilities required for my product or service on demand without raising tickets or requiring human interaction.
// My team prioritizes keeping the software deployable over working on new features.

// who has the responsibility for creating and maintaining CI/CD toolchain
// our team has full autonomy to choose and configure its own toolchain
// the toolchain is handled by a centralized team
// we use a toolchain with preconfigured scripts and test, and we have the ability to override it
// other

// my toolchain includes -
// my team makes use of open source components, libraries and platforms

// do you have the technical knowledge to setup CI/CD pipelines?
// do you have the technical knowledge to manage infrastructure through Infrastructure-As-Code?
// My team actively identifies and eliminates, automates, or streamlines repetitive manual work.
// My team has well-defined protocols and tools for responding to production incidents.
// What percentage of your time is spent on rework or unplanned work?

// my team actively identifies and eliminates, automates, or streamlines repetitive manual work
// alerts are configured for monitoring issues
// my team has well-defined protocols and tools for responding to production incidents

// we can perform deployments during normal business hors with negligable downtime

// code commits result in automated build of software
// code commits result in automated tests being run
// failing tests will block a commit's progress through the pipeline
// we can deploy our system to production at any time, on demand
// my team has access to tools that help us trace, understand and diagnose infrastructure problems
// my team has tools that monitor key business and system metrics
// my team has tools that help us understand and debug our system in production
// most of the code for the product I work on is documented
// it is easy to find the right technical documentation when I need to understand something
