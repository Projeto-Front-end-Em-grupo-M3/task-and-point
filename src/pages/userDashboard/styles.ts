import styled from "styled-components";

export const StyledDash = styled.div`
  font-family: var(--font-primary);

  max-width: 100%;
  width: 976px;
  margin: 0 auto;

  .info_user {
    max-width: 100%;
    border: 1px solid rgba(233, 236, 239, 1);
    border-radius: 8px;
    height: 96px;
    margin: 39px 0px 20px 0px;
    padding: 0px 10px;

    display: flex;
    flex-direction: column;
    height: 100px;
    justify-content: space-around;
  }

  .info_user > div {
    display: flex;
    justify-content: space-between;
  }

  .register_block {
    display: flex;
    align-items: center;
    flex-direction: column;

    gap: 20px;

    height: 200px;
  }

  .register_block > button {
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
    transition: 0.4s;
  }

  .register_block > button:hover {
    background: #0747a6;
  }

  .register_block > ul {
    display: flex;
    flex-direction: column;
    gap: 15px;

    width: 360px;
    height: 100px;
    padding: 10px;
    overflow-y: auto;

    background-color: var(--grey-2);
  }

  section {
    max-width: 100%;
    border: 1px solid rgba(224, 224, 224, 1);
    border-radius: 8px;
    height: max-content;

    display: flex;
    flex-direction: column;
    gap: 15px;
    padding: 10px;
  }

  section > ul > li {
    display: flex;
    justify-content: space-between;
  }
`;
