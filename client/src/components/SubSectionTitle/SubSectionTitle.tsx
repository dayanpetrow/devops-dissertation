import React from "react";
import styled from "styled-components";

interface Props {
  title: string;
}

const Wrapper = styled.div`
  width: 100%;
  background-color: #f9f9f9;
  padding: 8px 12px;
  margin: 12px 0px 6px 0px;
  border-radius: 4px;
  > h3 {
    letter-spacing: 1;
    text-transform: uppercase;
    padding: 0;
    margin: 0;
  }
`;

export const SubSectionTitle: React.FC<Props> = ({ title }) => {
  return (
    <Wrapper>
      <h3>{title}</h3>
    </Wrapper>
  );
};
