import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
    0% { opacity: 0; transform: scale(0.5) },
    100% { opacity: 1; transform: scale(1) }
`;

export const Wrapper = styled.div`
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  > div {
    animation-name: ${fadeIn};
    animation-duration: 0.5s;
  }
`;
