import React from "react";
import { css } from "../../../styled-system/css";
interface ButtonProps {
  label: string;
}
export const Button: React.FC<ButtonProps> = ({ label }) => {
  return <button className={css({ bg: 'GrayText', color: 'white', px: '4', py: '2', rounded: 'md' })}>
    {label}
  </button>
}
