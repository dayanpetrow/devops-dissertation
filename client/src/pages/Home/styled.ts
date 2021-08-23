import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 64px 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  header {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    img {
      width: 250px;
    }
    .title {
      text-align: center;
      font-size: 32px;
      padding: 6px;
      margin: 0;
      line-height: 44px;
      width: 80%;
      margin: 0 auto;
      @media (max-width: 992px) {
        font-size: 28px;
        line-height: 32px;
      }
      @media (max-width: 600px) {
        font-size: 22px;
        line-height: 25px;
      }
    }
  }

  .consent-wrapper {
    width: 100%;
    padding: 32px 6px 6px 6px;
    max-width: 580px;
    p {
      margin-bottom: 6px;
    }
    .agreement {
      padding: 12px;
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
`;
