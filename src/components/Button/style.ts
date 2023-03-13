import styled from "styled-components";

export const StyledButton = styled.button`
  min-width: 129px;
  max-width: fit-content;
  height: 40px;
  border-radius: 8px;
  border: none;
  background-color: var(--Color-primary);
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;

  :hover {
    outline: none;
    background-color: var(--Color-primary-2);
  }
`;