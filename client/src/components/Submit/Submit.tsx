import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #f9f9f9;
  padding: 12px 16px;
  margin-top: 16px;
  border-radius: 4px;
  .ant-checkbox-wrapper {
    margin: 12px 0;
  }
  button {
    height: 48px;
    width: 300px;
    font-size: 18px;
  }
`;

export const Submit: React.FC<any> = (props) => {
  return <Wrapper>{props.children}</Wrapper>;
};
