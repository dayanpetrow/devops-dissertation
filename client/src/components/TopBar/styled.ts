import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  padding: 12px 32px;

  @media (max-width: 1024px) {
    padding: 24px;
  }

  .topbar {
    padding: 12px;
    border-radius: 4px;
    background-color: #f9f9f9;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    button {
      min-width: 50px;
    }
    .contact-button {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 6px !important;
      svg {
        margin-right: 4px;
      }
      @media (max-width: 768px) {
        margin: 6px 0;
      }
    }
    @media (max-width: 768px) {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  }
`;
