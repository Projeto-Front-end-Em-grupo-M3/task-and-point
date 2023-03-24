import styled from "styled-components";

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
    position: absolute;
  }

  #trashCan {
    right: 10px;
    @media (max-width: 970px) {
      position: absolute;
      left: 150px;
      bottom: 20px;
    }
  }

  #more {
    position: absolute;
    right: 16px;
    @media (max-width: 600px) {
      top: 20px;
    }
  }

  #status_task {
    color: var(--Color-primary);
    font-weight: bold;
    position: absolute;
    right: 80px;
    @media (max-width: 970px) {
      position: absolute;
      left: 10px;
      bottom: 20px;
    }
  }

  #icon {
    margin: 0px 20px 0px 20px;
  }
  .sub_info_div {
    width: fit-content;
    display: flex;
    flex-direction: column;
    gap: 8px;
    padding-left: 70px;
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
    @media (max-width: 660px) {
      flex-direction: column;
      height: 120px;
      align-items: flex-start;
    }
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
    align-items: center;
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
    display: none;

    @media (max-width: 900px) {
      display: none;
    }
  }
  .sub_employeesList_header {
    max-width: 100%;
    display: flex;
    width: 85%;
    justify-content: space-between;
  }

  #tasks_section {
    margin-bottom: 50px;
  }

  #task {
    width: 350px;
    max-width: 100%;
    line-height: 1.5;
    @media (max-width: 970px) {
      width: 600px;
      height: 100%;
    }
  }

  .employeesList_section > ul {
    max-width: 100%;
    height: fit-content;
  }

  .employeesList_section > ul > li {
    display: flex;
    gap: 60px;
    align-items: center;
    max-width: 100%;
    height: 90px;
    max-height: 100%;
    margin: 0px 16px 0px 16px;
    position: relative;
    border-bottom: 1px solid rgba(224, 224, 224, 1);
    @media (max-width: 900px) {
      flex-direction: column;
      align-items: flex-start;
      justify-content: flex-start;
      /*   padding: 10px 16px 10px 16px;
      gap: 10px; */
      height: 300px;
    }
  }

  form {
    display: flex;
    flex-direction: column;
    max-width: 100%;
    padding: 25px 0px;
  }

  form > div {
    max-width: 100%;

    margin-top: 20px;
    width: 550px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    @media (max-width: 610px) {
      flex-direction: column;
      align-items: flex-start;
      height: 200px;
    }
  }

  form > div > select {
    padding: 15px;
    width: 210px;
    color: #6a6a6a;
    border-radius: 4px;
    border: 1px solid rgba(224, 224, 224, 1);
    font-family: var(--font-primary);
    font-size: 16px;

    :focus {
      border: 2px solid #2380fb;
    }
  }
`;
