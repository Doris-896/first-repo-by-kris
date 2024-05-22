import * as React from "react";
import Button from "@mui/material/Button";

interface IButtonProps {
  childrenProp: any;
  handleClick: () => void;
  additionalClassname?: string; // ? wildcard means it is optional
}

export default function ButtonComp(props: IButtonProps) {
  const { childrenProp, handleClick, additionalClassname } = props;
  return (
    <Button
      className={`bg-purple-500 p-2 min-w-14 ${additionalClassname}`}
      variant="contained"
      size="large"
      onClick={handleClick}
    >
      {childrenProp}
    </Button>
  );
}
