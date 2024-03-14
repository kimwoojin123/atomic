import React, { HTMLAttributes, ReactNode, CSSProperties } from 'react';

interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {
  level: number;
  children?: ReactNode;
  style?: CSSProperties; 
}

const Heading: React.FC<HeadingProps> = ({ level, children, style }) => {
  const TagName = `h${level}` as keyof JSX.IntrinsicElements;

  return <TagName style={style}>{children}</TagName>;
};

export default Heading;