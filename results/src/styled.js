import styled from "styled-components";

export const Wrapper = styled.div`
  display: grid;
  grid-template-rows: 120px auto;
`;

export const Sidebar = styled.aside`
  background-color: #f9f9f9;
  padding: 48px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  z-index: 2;
  width: 100%;
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.1);

  @media (max-width: 1024px) {
    display: none;
  }

  .nav {
    width: 100%;
    max-width: 1440px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    div {
      > * {
        margin: 4px;
      }
    }
  }
`;

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px 48px;
  width: 100%;
`;
