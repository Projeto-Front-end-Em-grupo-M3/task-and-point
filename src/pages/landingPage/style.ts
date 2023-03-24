import styled from "styled-components";

const StyledDiv = styled.div`
  display: flex;
  max-width: 100vw;
  max-height: 100vh;
  background: #19191f;
  > div {
    width: 100%;
    height: 100vh;
  }
  .intro {
    width: 50%;
    /* padding-left: 50px;
 */
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .intro > div {
    width: 467px;
  }
  .logo > img {
    width: 50%;
    margin-bottom: 50px;
  }
  .intro > div > h2 {
    font-family: "Nunito";
    font-style: normal;
    font-weight: 800;
    font-size: 38px;
    line-height: 48px;
    color: #ffffff;
    width: 60%;
    margin: 12px 0;
  }
  .intro > div > h3 {
    font-family: "Nunito";
    font-style: normal;
    font-weight: 400;
    font-size: 32px;
    line-height: 26px;
    color: #ffffff;
    margin: 28px 0;
  }
  .intro > div > h3 > span {
    color: #2380fb;
  }
  .intro > div > button {
    padding: 13px 20px;
    margin-top: 12px;
    width: 369px;
    height: 58px;
    background: #2380fb;
    border: 2px solid #2380fb;
    border-radius: 8px;
    font-family: "Nunito";
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 33px;
    color: #ffffff;
    transition: 0.2s;
  }
  .intro > div > button:hover {
    background: #0747a6;
    border: #0747a6;
  }
  .frame {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50%;
  }
  .frame > img {
    width: 100%;
    height: 398px;
  }
  @media (max-width: 1050px) {
    flex-direction: column;
    max-height: 100%;
    align-items: center;

    > div {
      margin: 120px 0 0 0;
      width: auto;
      height: auto;
    }

    .frame > img {
      width: 90vw;
      margin-bottom: 120px;
    }
  }
  @media (max-width: 550px) {
    .intro > div,
    .intro > div > button,
    .frame > img {
      width: 90vw;
    }
    > div {
      margin-top: 60px;
    }
  }
`;

export default StyledDiv;
