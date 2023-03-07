import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyledDash = styled.div`
  width: 800px;
  margin: 0 auto;

  header {
    display: flex;
    justify-content: space-between;
  }

  .search_div {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  section > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  section > ul > li {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

export const StyledLink = styled(Link)``;
