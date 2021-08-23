import React from "react";
import styled from "styled-components";
import { Steps } from "../../pages/Survey/types";

// icons
import {
  FaUserTie,
  FaQuestionCircle,
  FaUsers,
  FaTools,
  FaStar,
  FaBuffer,
} from "react-icons/fa";
import { IoBusinessSharp } from "react-icons/io5";
import { ImFire } from "react-icons/im";

interface Props {
  step: Steps;
}

const renderTitle = (step: string) => {
  switch (step) {
    case Steps.PERSONAL:
      return (
        <>
          <FaUserTie /> Personal Information
        </>
      );
    case Steps.PROFESSIONAL:
      return (
        <>
          <IoBusinessSharp /> Professional Background
        </>
      );
    case Steps.MATURITY:
      return (
        <>
          <FaBuffer /> DevOps Maturity
        </>
      );
    case Steps.PERCEPTION:
      return (
        <>
          <FaQuestionCircle /> DevOps Perception
        </>
      );
    case Steps.CULTURE:
      return (
        <>
          <FaUsers /> DevOps Culture
        </>
      );
    case Steps.TOOLS:
      return (
        <>
          <FaTools /> DevOps Tools
        </>
      );
    case Steps.BENEFITS:
      return (
        <>
          <FaStar /> DevOps Benefits
        </>
      );
    case Steps.CHALLENGES:
      return (
        <>
          <ImFire /> DevOps Challenges
        </>
      );

    default:
      return <></>;
  }
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 32px;
  font-weight: 600;
  letter-spacing: 1;
  padding: 12px 0;
  svg {
    margin-right: 8px;
  }
  @media (max-width: 992px) {
    padding: 24px;
    justify-content: center;
  }
  @media (max-width: 600px) {
    font-size: 20px;
  }
`;

export const StepTitle: React.FC<Props> = ({ step }) => {
  return <Wrapper className={"step-title"}>{renderTitle(step)}</Wrapper>;
};
