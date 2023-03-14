import { TextField } from "@mui/material";
import { SetStateAction } from "react";
import { FieldError, UseFormRegisterReturn } from "react-hook-form/dist/types";
import { StyledFieldset } from "./style";
interface IInput {
  label?: string;
  register?: UseFormRegisterReturn<string>;
  error?: FieldError;
  type: "text" | "password" | "email" | "checkbox";
  value?: string;
  onChange?: (event: {
    target: {
      value: SetStateAction<string>;
    };
  }) => void;
}
const Input = ({ label, register, error, value, type, onChange }: IInput) => (
  <StyledFieldset>
    <TextField
      value={value}
      label={label}
      type={type}
      {...register}
      onChange={onChange}
    />
    <p> {error?.message} </p>
  </StyledFieldset>
);
export default Input;