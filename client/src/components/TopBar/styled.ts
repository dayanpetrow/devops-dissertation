import styled from "styled-components";

export const Wrapper = styled.div`
  height: 100px;
  width: 100%;
  padding: 12px;
  .topbar {
    padding: 12px;
    border-radius: 6px;
    background-color: #e9e9e9;
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
    }
  }
`;
