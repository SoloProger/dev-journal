import { ButtonProps } from "@props/button";
import React from "react";

function Button({ name, ...props }: ButtonProps) {
  return (
    <button className="bg-[#EDF7FA] p-3 rounded-2xl text-black" {...props}>
      {name}
    </button>
  );
}

export default Button;
