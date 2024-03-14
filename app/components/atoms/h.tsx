import React, { HTMLAttributes, ReactNode, CSSProperties } from 'react';

export interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {
  level?: number;
  children?: ReactNode;
  style?: CSSProperties; 
}

const H: React.FC<HeadingProps> = ({ level, children, style }) => {
  const TagName = `h${level}` as keyof JSX.IntrinsicElements;

  return <TagName style={style}>{children}</TagName>;
};

export default H;