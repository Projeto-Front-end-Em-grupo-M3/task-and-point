import { TextField } from "@mui/material";
import { SetStateAction } from "react";
import { FieldError, UseFormRegisterReturn } from "react-hook-form/dist/types";
import { Sfieldset } from "./style";
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
  <Sfieldset>
    <TextField
      style={{
        background: "#ffff",
      }}
      value={value}
      label={label}
      type={type}
      {...register}
      onChange={onChange}
    />
    <p> {error?.message} </p>
  </Sfieldset>
);
export default Input;
