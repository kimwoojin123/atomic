import React, { HTMLAttributes, ReactNode, CSSProperties } from 'react';

export interface ParagraphProps extends HTMLAttributes<HTMLParagraphElement> {
  children?: ReactNode;
  style?: CSSProperties;
}

const P: React.FC<ParagraphProps> = ({ children, style, ...rest }) => {
  return <p style={style} {...rest}>{children}</p>;
};

export default P;