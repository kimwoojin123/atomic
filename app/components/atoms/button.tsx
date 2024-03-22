import React, {ButtonHTMLAttributes, ReactNode} from "react";
import {CSSProperties} from "styled-components";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
  style?: CSSProperties;
}

const Button: React.FC<ButtonProps> = ({children, ...rest}) => {
  return <button {...rest}>{children}</button>;
};

export default Button;
