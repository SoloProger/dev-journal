import React from "react";

export default function Textarea({ labelText, ...props }) {
  return (
    <span className="flex flex-col gap-1 justify-center">
      {labelText && (
        <label className="font-medium" htmlFor="input">
          {labelText}
        </label>
      )}
      <textarea className="border p-2 rounded w-full" {...props}></textarea>
    </span>
  );
}
