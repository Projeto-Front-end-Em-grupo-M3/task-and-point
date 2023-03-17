import styled from "styled-components";
export const StyledDash = styled.div`
  font-family: var(--font-primary);
  max-width: 100%;
  width: 976px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;

  .info_user {
    max-width: 100%;
    width: 99%;
    border: 1px solid rgba(233, 236, 239, 1);
    border-radius: 8px;
    margin: 39px 0px 20px 0px;
    display: flex;
    flex-direction: column;
    height: 130px;
    justify-content: space-around;

    @media (max-width: 600px) {
      flex-direction: column;

      height: 225px;
      justify-content: space-around;
      align-items: center;
    }
  }

  .info_user > h1 {
    padding: 16px;
    @media (max-width: 600px) {
      font-size: 32px;
    }
  }

  .info_user > div {
    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 16px;

    @media (max-width: 600px) {
      flex-direction: column;
      height: 95px;
      gap: 5px;
    }
  }

  .register_block {
    max-width: 100%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    flex-direction: column;
    position: relative;
    gap: 20px;
    width: 400px;
    background-color: var(--grey-2);
    border-radius: var(--radius);
    padding-bottom: 20px;
    margin-top: 20px;
  }

  #exitIcon {
    width: 30px;
    height: 30px;
    position: absolute;
    top: 3px;
    left: 360px;
  }

  #hit_point > {
    width: 100%;
    background-color: antiquewhite;
    margin: 0 auto;
  }

  > button {
    max-width: 100%;
    width: 280px;
    padding: 0px 10px;
    height: 40px;
    border-radius: var(--radius);
    border: none;
    color: var(--grey-1);
    font-style: bold;
    background-color: var(--Color-primary);
    font-size: 16px;
    font-weight: 500;
    font-family: var(--font-primary);
  }

  > button:hover {
    outline: none;
    background-color: var(--Color-secondary);
    color: var(--grey-4);
    transition: 0.4ms;
  }
  .register_block > h3,
  #p_task_list {
    background-color: var(--grey-1);
    width: 100%;
    text-align: center;
    padding: 10px 0px;
    border-radius: 8px 8px 0px 0px;
  }

  .register_block > ul {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
    height: max-content;
    padding: 10px;
    overflow-y: auto;
  }

  section {
    max-width: 100%;
    width: 95%;
    border: 1px solid rgba(224, 224, 224, 1);
    border-radius: 8px;

    display: flex;
    flex-direction: column;
    gap: 15px;
    padding: 16px 16px;
    margin: 20px 0px;
  }

  section > ul {
    display: flex;
    flex-direction: column;
    gap: 15px;
  }

  section > ul > li {
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 600px) {
      flex-direction: column;
      align-items: flex-start;
      gap: 5px;
    }
  }

  section > ul > li > span {
    color: ${({ color }) => color};
    font-weight: bold;
  }

  #user_task {
    position: relative;
  }

  #task_status {
    position: absolute;
    top: 0px;
    right: 200px;
  }

  #no_task {
    padding: 20px;
  }
`;
