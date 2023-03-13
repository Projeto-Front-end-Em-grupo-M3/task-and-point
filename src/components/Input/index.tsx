import { TextField } from "@mui/material";
import { FieldError, UseFormRegisterReturn } from "react-hook-form/dist/types";
import { StyledFieldset } from "./style";

interface IInput {
  label?: string;
  register: UseFormRegisterReturn<string>;
  error?: FieldError;
  type: "text" | "password" | "email" | "checkbox";
}

const Input = ({ label, register, error, type }: IInput) => (
  <StyledFieldset>
    <TextField label={label} type={type} {...register} />
    <p> {error?.message} </p>
  </StyledFieldset>
);

export default Input;
