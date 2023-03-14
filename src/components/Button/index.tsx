
import { StyledButton } from "./style";

interface IButton {
  clickFunction?: any;
  buttonText?: string;
  type?: "reset" | "button" | "submit" | undefined;
}

const Button = ({ clickFunction, buttonText, type }: IButton) => {
  return (
    <StyledButton type={type} onClick={clickFunction}>
      {buttonText}
    </StyledButton>
  );

};
export default Button;
