/* import { Link } from "react-router-dom";
 */ import styled from "styled-components";

export const StyledDash = styled.div`
  font-family: var(--font-primary);
  max-width: 90%;
  width: 976px;
  margin: 0 auto;

  .info_div {
    max-width: 100%;
    border: 1px solid rgba(233, 236, 239, 1);
    border-radius: 8px;
    height: 96px;
    margin: 39px 0px 20px 0px;

    display: flex;
    align-items: center;
  }

  #more,
  #trashCan,
  #icon {
    width: 30px;
    height: 30px;
  }

  #more {
    position: absolute;
    right: 16px;
  }

  #icon {
    margin: 0px 20px 0px 20px;
  }
  .sub_info_div {
    width: fit-content;
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  #opacity {
    color: #6a6a6a;
  }

  #bold {
    font-weight: bold;
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
    height: 51px;
  }

  .search_input {
    display: flex;
    flex-direction: row;
    gap: 8px;
  }

  li {
    position: relative;
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
    padding: 0px 16px;
  }
  .sub_employeesList_header {
    max-width: 100%;
    display: flex;
    width: 85%;
    justify-content: space-between;
    @media (max-width: 600px) {
      display: none;
    }
  }

  #tasks_section {
    margin-bottom: 50px;
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
    /*     align-items: flex-start;
    justify-content: center; */
    flex-direction: column;

    padding: 25px 0px;
  }

  form > div {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }

  form > div > select {
    padding: 15px;
    width: 200px;
    border-radius: var(--radius);
    border: 1px solid rgba(224, 224, 224, 1);
    font-family: var(--font-primary);
    font-size: 14px;

    :focus {
      border: 2px solid var(--Color-secondary);
    }
  }
`;
