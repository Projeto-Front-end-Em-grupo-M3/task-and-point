import { TextField } from "@mui/material";
import { FieldError, UseFormRegisterReturn } from "react-hook-form/dist/types";
import { StyledDiv } from "./style";

interface IInput {
  label: string;
  register: UseFormRegisterReturn<string>;
  error?: FieldError;
  type: "text" | "password" | "email";
}

const Input = ({ label, register, error, type }: IInput) => (
  <fieldset>
    <TextField label={label} type={type} {...register} />
    <p> {error?.message} </p>
  </fieldset>
);

export default Input;
