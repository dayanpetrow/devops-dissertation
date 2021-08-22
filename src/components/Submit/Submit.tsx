import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: #f9f9f9;
  padding: 12px 16px;
`;

export const Submit: React.FC<any> = (props) => {
  return <Wrapper>{props.children}</Wrapper>;
};
