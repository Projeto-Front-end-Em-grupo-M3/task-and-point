interface IButton {
  clickFunction: any;
  buttonText: string;
}

const Button = ({ clickFunction, buttonText }: IButton) => {
  return <button onClick={clickFunction}>{buttonText}</button>;
};
export default Button;
