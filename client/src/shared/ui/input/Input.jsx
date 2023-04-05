import React from "react";

export default function Input({ labelText, inputRef, ...props }) {
  return (
    <span className="flex flex-col gap-1 justify-center">
      {labelText && (
        <label className="font-medium" htmlFor="input">
          {labelText}
        </label>
      )}
      <input
        ref={inputRef}
        id="input"
        className="border p-2 rounded w-full"
        {...props}
      />
    </span>
  );
}
