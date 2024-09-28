import { InputHTMLAttributes } from "react";

type InputProps = InputHTMLAttributes<HTMLInputElement>

export default function Input(props: InputProps) {
  return (
    <input
      className="border-0 h-9 rounded-md outline-none px-2 mb-3"
      {...props}
    />
  );
}
