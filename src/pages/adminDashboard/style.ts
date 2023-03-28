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

    @media (max-width: 570px) {
      width: 20px;
      height: 20px;
    }
  }

  #trashCan {
    right: 10px;
    @media (max-width: 970px) {
      // position: absolute;
      left: 150px;
      bottom: 20px;
    }
  }

  #more {
    @media (max-width: 600px) {
      // top: 20px;
    }
  }

  #status_task {
    color: var(--Color-primary);
    font-weight: bold;
    // position: absolute;
    right: 80px;
    @media (max-width: 970px) {
      // position: absolute;
      left: 10px;
      bottom: 20px;
    }
  }

  #icon {
    margin: 0px 20px;
  }

  .sub_info_div {
    width: fit-content;
    display: flex;
    flex-direction: column;
    gap: 8px;
    padding: 0 70px;
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
    justify-content: center;
  }

  #test,
  #test > fieldset > div {
    @media (max-width: 570px) {
      width: 100%;
    }
  }

  fieldset > div > div {
    @media (max-width: 570px) {
      height: 40px;
      width: 100%;
    }
  }

  fieldset > div > label {
    @media (max-width: 570px) {
      margin-top: -7px;
    }
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
    justify-content: space-arround;
    max-width: 100%;
    min-height: 51px;
    background-color: rgba(245, 245, 245, 1);
    border-radius: 8px 8px 0px 0px;
    padding: 0px 16px;
  }
  .sub_employeesList_header {
    max-width: 100%;
    display: flex;
    width: 95%;
    justify-content: space-between;
    align-items: center;
  }

  .sub_employeesList_header > div {
    display: flex;
    justify-content: space-between;
    width: 60%;

    @media (max-width: 720px) {
      flex-direction: column;
      gap: 12px;
      padding: 6px 0;
    }
  }

  .sub_employeesList_header > p {
    display: flex;
    width: 25%;
    justify-content: center;
  }

  .sub_employeesList_header > div > p,
  .sub_employeesList_header > div > span {
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  .btn_add_more {
    position: relative;
    right: 0px;
  }

  #tasks_section {
    margin-bottom: 50px;
  }

  #task {
    width: 350px;
    max-width: 100%;
    line-height: 1.5;
  }

  .employeesList_section > ul {
    max-width: 100%;
    height: fit-content;
  }

  .employeesList_section > ul > h1,
  .employeesList_section > ul > p {
    padding: 64px 32px;
  }

  .employeesList_section > ul > li {
    display: flex;
    justify-content: space-between;
    gap: 10px;
    align-items: center;
    max-width: 100%;
    height: 90px;
    max-height: 100%;
    margin: 0px 16px 0px 16px;
    border-bottom: 1px solid rgba(224, 224, 224, 1);
  }

  form {
    display: flex;
    flex-direction: column;
    width: 100%;
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

    @media (max-width: 570px) {
      height: 150px;
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
    @media (max-width: 570px) {
      padding: 10px;
      width: 100%;
    }
  }
`;
