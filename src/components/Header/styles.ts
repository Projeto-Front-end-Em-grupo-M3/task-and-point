import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledHeader = styled.header`
  height: 88px;
  background-color: #f8f9fa;
  box-shadow: 0px 4px 32px -12px rgba(0, 0, 0, 0.25);

  nav {
    max-width: 100%;
    height: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #f8f9fa;
    margin-left: 40px;
    margin-right: 40px;
  }

  button {
    margin-right: 20px;
    font-family: var(--font-primary);
    font-size: 14px;
    width: fit-content;
    padding: 10px 20px;
    border: none;
    border-radius: 8px;
    @media (max-width: 470px) {
      margin-right: 0;
      padding: 0;
      background-color: transparent;
    }
  }

  button:hover {
    background-color: var(--hover);
    color: var(--grey-2);
  }

  img {
    margin-left: 20px;
    width: 186px;
    height: 39px;
    @media (max-width: 500px) {
      margin-left: 0;
      width: 140px;
      height: 34px;
    }
  }
`;

export const StyledLink = styled(Link)`
  margin-right: 20px;
  font-family: var(--font-primary);
  width: fit-content;
  height: 40px;
  padding: 5px 15px;
  font-size: 14px;
  border-radius: 8px;
  background-color: var(--grey-2);
  text-decoration: none;
  color: var(--hover);
  text-align: center;
  display: flex;
  align-items: center;
  @media (max-width: 470px) {
    margin-right: 0;
    padding: 0;
    background-color: transparent;
  }

  :hover {
    background-color: var(--hover);
    color: var(--grey-2);
  }
`;
