import React from "react";
import { Alert } from "antd";

export const SURVEY_CLOSED = true;

export const SurveyClosedAlert = () => {
  return (
    <Alert
      message="The survey is closed!"
      description="The deadline for this survey has expired."
      type="warning"
      showIcon
      style={{ marginBottom: "12px" }}
    />
  );
};
