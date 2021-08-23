import { Result } from "antd";
import React from "react";
import { Helmet } from "react-helmet";
import { Wrapper } from "./styled";

export const CompletedPage = () => {
  return (
    <>
      <Helmet>
        <title>Thank you!</title>
      </Helmet>
      <Wrapper>
        <Result
          status="success"
          title="Thank you!"
          subTitle="The questionnaire was completed successfully!"
        />
        ,
      </Wrapper>
    </>
  );
};
