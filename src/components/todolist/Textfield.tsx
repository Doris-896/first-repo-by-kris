import * as React from "react";
import { TextField } from "@mui/material";

interface ITextFieldProps {
  childrenProp: any;
  value: string;
  handleChange: (e: any) => void; //hàm k return gì cả, chỉ xử lý logic
  handleKeyDown: (event: { key: string }) => void;
  additionalClassname?: string; // ? wildcard means it is optional
}

export default function TextFieldComp(props: ITextFieldProps) {
  const { childrenProp, value, handleChange, handleKeyDown } = props;
  return (
    <TextField
      className="w-full mr-2 font-sans font-normal text-2xl"
      placeholder={childrenProp}
      onChange={handleChange}
      onKeyDown={handleKeyDown}
      value={value}
    />
  );
}
