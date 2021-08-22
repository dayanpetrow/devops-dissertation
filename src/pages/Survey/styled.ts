import styled from "styled-components";

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: minmax(200px, 350px) auto;
  @media (max-width: 992px) {
    grid-template-columns: 1fr;
    grid-template-rows: 80px auto;
  }
`;

export const SurveyWrapper = styled.main`
  display: flex;
  background-color: #fff;
  flex-direction: column;
  justify-content: center;
  padding: 72px 48px;
  min-height: 100vh;
  @media (max-width: 992px) {
    padding: 24px;
    justify-content: start;
  }
`;

export const Main = styled.div`
  width: 100%;
  max-width: 1440px;
`;
