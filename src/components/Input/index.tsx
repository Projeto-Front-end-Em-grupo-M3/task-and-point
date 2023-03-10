import { TextField } from "@mui/material";
import { SetStateAction } from "react";
import { FieldError, UseFormRegisterReturn } from "react-hook-form/dist/types";
import { StyledDiv } from "./style";

interface IInput {
  label?: string;
  register?: UseFormRegisterReturn<string>;
  error?: FieldError;
  type: "text" | "password" | "email";
  placeholder?: string;
  value?: string;
  onChange?: (event: {
    target: {
      value: SetStateAction<string>;
    };
  }) => void;
}

const Input = ({
  label,
  register,
  error,
  type,
  placeholder,
  value,
  onChange,
}: IInput) => (
  <fieldset>
    <TextField
      label={label}
      type={type}
      {...register}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
    <p> {error?.message} </p>
  </fieldset>
);

export default Input;
