import styled from "styled-components";

export const StyledButton = styled.button`
  /*   min-width: 120px;
 */
  max-width: fit-content;
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
  :hover {
    outline: none;
    background-color: var(--Color-primary-2);
  }
`;
