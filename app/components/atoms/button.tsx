import React, { ButtonHTMLAttributes, ReactNode } from 'react';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
}

const Button: React.FC<ButtonProps> = ({ children, ...rest }) => {
  return <button {...rest}>{children}</button>;
};

export default Button;