import styled from "styled-components";

export const Wrapper = styled.aside`
  background-color: #fff;
  padding: 48px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  z-index: 2;
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.1);
  @media (max-width: 992px) {
    display: none;
  }
`;

export const MobileStepper = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.1);
  z-index: 2;
  > span {
    margin-right: 12px;
    font-size: 16px;
    font-weight: 600;
  }
  @media (min-width: 992px) {
    display: none;
  }
`;
