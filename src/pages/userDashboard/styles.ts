import styled from "styled-components";

export const StyledDash = styled.div`
  font-family: var(--font-primary);

  max-width: 100%;
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
    height: 100px;
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
    align-items: center;
    height: 37px;
    width: 360px;
    /* border-radius: 3px; */
    /* border: 1px solid rgba(224, 224, 224, 1); */
    padding: 10px;
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

  .ident_user{
    max-width: 1200px;
    width: 100%;
    height: 70px;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
  }

  .info_user_div{
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    height: 100px;
    gap: 100px;
    margin-left: 90px;
  }

  .img_avatar{
    max-height: 96%;
    padding: 10px;
  }

  .taskList_header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 100%;
    height: 51px;
    background-color: rgba(245, 245, 245, 1);
    border-radius: 8px 8px 0px 0px;
    padding-left: 16px;
  }

  .taskList_header > div {
    max-width: 100%;
    display: flex;
    width: 75%;
    justify-content: space-between;
    @media (max-width: 600px) {
      display: none;
    }
  }

  .taskList_section {
    max-width: 100%;
    border: 1px solid rgba(224, 224, 224, 1);
    border-radius: 8px;
    height: max-content;
  }

  .taskList_section > ul {
    max-width: 100%;
  }

  .taskList_section > ul > li {
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

  .button_search {
    display: flex;
    flex-direction: row;
    gap: 8px;
    height: 60px;
    align-items: center;
  }

  .buttonPont_div{
    display: flex;
    align-items: center;
    justify-content: center;
    height: 60px;
  }

  .buttonPont_div > button {
    padding: 12px;
    width: 380px;
    height: 40px;
    background: #2380fb;
    border: 1px solid #2380fb;
    border-radius: 8px;
    font-family: "Nunito";
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 12px;
    color: #f5f1ef;
    cursor: pointer;
    transition: 0.4s;
  }

  .buttonPont_div > button:hover {
    background: #0747a6;
  }
`;