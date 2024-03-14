import React, { HTMLAttributes, ReactNode, CSSProperties } from 'react';

interface ParagraphProps extends HTMLAttributes<HTMLParagraphElement> {
  children?: ReactNode;
  style?: CSSProperties;
}

const Paragraph: React.FC<ParagraphProps> = ({ children, style, ...rest }) => {
  return <p style={style} {...rest}>{children}</p>;
};

export default Paragraph;