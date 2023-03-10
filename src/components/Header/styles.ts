import styled from "styled-components";

export const StyledHeader = styled.header`
  max-width: 100%;
  width: 100vw;
  height: 88px;
  background-color: #f8f9fa;
  box-shadow: 0px 4px 32px -12px rgba(0, 0, 0, 0.25);

  nav {
    max-width: 100%;
    width: 976px;
    height: 100%;
    margin: 0 auto;

    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  button {
    margin-right: 20px;
  }

  img {
    margin-left: 20px;

    width: 211px;
    height: 45px;
    background-color: antiquewhite;
  }
`;
