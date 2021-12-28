import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  max-width: 1440px;
  background-color: #e9e9e9;
  padding: 12px 16px;
  margin: 12px 0px 32px 0px;
  border-radius: 4px;
  > h1 {
    letter-spacing: 1;
    font-weight: 600;
    text-transform: uppercase;
    padding: 0;
    margin: 0;
    text-align: center;
    @media (max-width: 600px) {
      font-size: 16px;
      line-height: 20px;
    }
  }
`;

export const StepHeader = (props) => {
  return (
    <Wrapper>
      <h1>{props.title}</h1>
    </Wrapper>
  );
};
