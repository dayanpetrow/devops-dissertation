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
  flex-direction: column;
  background-color: #fff;
`;

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 72px 48px;
  min-height: calc(100vh - 100px);
  width: 100%;
  max-width: 1440px;
  @media (max-width: 992px) {
    padding: 24px;
    justify-content: start;
  }
`;
