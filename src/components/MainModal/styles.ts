import styled from "styled-components";

export const DivMainModalWrapper = styled.div`
  background-color: rgba(128, 128, 128, 0.5);
  max-width: 100%;
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const DivMainModal = styled.div`
  max-width: 100%;
  background-color: var(--grey-2);
  width: 400px;
  height: fit-content;
  border-radius: var(--radius);
  padding-bottom: 20px;

  header {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    border-radius: var(--radius);
    background-color: var(--grey-1);
    padding: 10px;
  }

  header > div {
    display: flex;
    flex-direction: column;
    gap: 5px;
  }

  header > div > h2 {
    color: var(--Color-primary);
  }

  .main_div {
    background-color: var(--grey-2);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin-top: 25px;
    gap: 5px;
  }

  .modal_points {
    margin-top: 15px;
    display: flex;
    background-color: var(--grey-1);
    padding: 5px;
    align-items: flex-start;
    width: 70%;
    border-radius: var(--radius);
  }

  .list_points {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    flex-direction: column;
    gap: 10px;
    margin: 20px 0px 20px 20px;
    width: 250px;
    max-height: 180px;
    overflow: auto;
  }

  .no-points {
    display: flex;
    align-items: center;
    background-color: var(--grey-1);
    border-radius: var(--radius);
    padding: 20px;
    gap: 15px;
    margin-top: 15px;
  }

  .list_points > li {
    width: 95%;
    display: flex;
    justify-content: space-between;
    gap: 10px;
  }

  .list_points > li > p {
    font-weight: bold;
  }

  .list_points > li > span {
    color: var(--Color-primary);
  }

  .dismiss_confirm {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    height: 90px;
    border-radius: var(--radius);
    padding: 10px;
    background-color: var(--grey-1);
    padding: 10px;
    margin-top: 15px;
  }

  .dismiss_confirm > p {
    font-weight: bold;
    margin: 10px 0px 10px;
  }

  .dismiss_confirm > div {
    display: flex;
    align-items: center;
    gap: 10px;
  }
`;
