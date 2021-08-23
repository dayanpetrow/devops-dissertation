import React from "react";
import { Form, Input, Button, InputNumber, Row, Col, Radio } from "antd";
import { Steps } from "../types";
import {
  SubSectionTitle,
  Submit,
  StepTitle,
  Select,
  MultipleSelect,
  Scale,
  ScaleLabels,
} from "../../../components";

import { useStepUtils } from "./useStepUtils";

export const Culture: React.FC<any> = () => {
  const [formData, onChange, onChangeByName, onSubmit] = useStepUtils(
    Steps.CULTURE
  );
  return (
    <>
      <StepTitle step={Steps.CULTURE} />
      <ScaleLabels />

      <Form layout="vertical" className={"step-wrapper"}>
        <SubSectionTitle title={"In my organization..."} />
        <Scale
          title={
            "Teams are generally cross-functional (developers, designers, QAs and business analysts work together in the same team)"
          }
          onChange={(value: any) =>
            onChangeByName("multidiscplinaryTeams", value)
          }
          value={formData.multidiscplinaryTeams}
        />
        <Scale
          title={"Cross-functional collaboration is encouraged"}
          onChange={(value: any) => onChangeByName("collaboration", value)}
          value={formData.collaboration}
        />
        <Scale
          title={"Open communication and knowledge sharing is encouraged"}
          onChange={(value: any) => onChangeByName("communication", value)}
          value={formData.communication}
        />
        <Scale
          title={"Initiative and ideas are welcomed"}
          onChange={(value: any) => onChangeByName("initiative", value)}
          value={formData.initiative}
        />

        <Scale
          title={
            "Teams have the freedom to choose their technology stack independently from other teams depending on business requirements"
          }
          onChange={(value: any) => onChangeByName("technologyStack", value)}
          value={formData.technologyStack}
        />

        <SubSectionTitle title={"In my team..."} />
        <Scale
          title={"There is a feeling of shared ownership and responsibility"}
          onChange={(value: any) =>
            onChangeByName("sharedResponsibility", value)
          }
          value={formData.sharedResponsibility}
        />

        <Scale
          title={
            "Failures are generally treated as learning and improvement opportunities"
          }
          onChange={(value: any) => onChangeByName("failures", value)}
          value={formData.failures}
        />

        <Scale
          title={
            "I feel comfortable sharing a different perspective, opinion or approach on a work issue"
          }
          onChange={(value: any) =>
            onChangeByName("differentPerspective", value)
          }
          value={formData.differentPerspective}
        />

        <Scale
          title={
            "I don't need to communicate and coordinate with people outside of my team to complete my work"
          }
          onChange={(value: any) =>
            onChangeByName("outsideCommunication", value)
          }
          value={formData.outsideCommunication}
        />

        <Scale
          title={"I feel connected with my team members"}
          onChange={(value: any) => onChangeByName("teamConnection", value)}
          value={formData.teamConnection}
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
