/* import { Link } from "react-router-dom";
 */ import styled from "styled-components";

export const StyledDash = styled.div`
  font-family: var(--font-primary);

  max-width: 97%;
  width: 976px;
  margin: 0 auto;

  .info_div {
    max-width: 100%;
    border: 1px solid rgba(233, 236, 239, 1);
    border-radius: 8px;
    height: 96px;
    margin: 39px 0px 20px 0px;

    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }

  .search_div {
    max-width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 51px;
    margin-bottom: 20px;
  }

  .info_login {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    height: 100px;
  }

  .search_input {
    display: flex;
    flex-direction: row;
    gap: 8px;
  }

  .employeesList_section {
    max-width: 100%;
    border: 1px solid rgba(224, 224, 224, 1);
    border-radius: 8px;
    height: max-content;
  }

  .employeesList_header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 100%;
    height: 51px;
    background-color: rgba(245, 245, 245, 1);
    border-radius: 8px 8px 0px 0px;
    padding-left: 16px;
  }
  .employeesList_header > div {
    max-width: 100%;
    display: flex;
    width: 75%;
    justify-content: space-between;
    @media (max-width: 600px) {
      display: none;
    }
  }

  .employeesList_section > ul {
    max-width: 100%;
  }

  .employeesList_section > ul > li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 100%;
    height: 83px;
    margin: 0px 16px 0px 16px;
    border-bottom: 1px solid rgba(224, 224, 224, 1);
    @media (max-width: 600px) {
      flex-direction: column;
      align-items: flex-start;
    }
  }

  form {
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;

    gap: 10px;

    padding-top: 10px;
    padding-bottom: 10px;
  }

  form > div {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  form > div > select {
    padding: 10px;
  }
`;
