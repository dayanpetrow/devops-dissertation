import { Result } from "antd";
import React from "react";
import { Wrapper } from "./styled";

export const CompletedPage = () => {
  return (
    <Wrapper>
      <Result
        status="success"
        title="Thank you!"
        subTitle="The questionnaire was completed successfully!"
      />
      ,
    </Wrapper>
  );
};
