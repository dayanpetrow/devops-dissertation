import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  background-color: #f9f9f9;
  padding: 12px 16px;
  margin: 12px 0px 32px 0px;
  border-radius: 4px;
  > h3 {
    letter-spacing: 1;
    font-weight: 600;
    text-transform: uppercase;
    padding: 0;
    margin: 0;
    @media (max-width: 600px) {
      font-size: 16px;
      line-height: 20px;
    }
  }
`;

export const ChartHeader = (props) => {
  return (
    <Wrapper>
      <h3>{props.title}</h3>
    </Wrapper>
  );
};
