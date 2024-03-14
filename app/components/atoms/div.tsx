import React, { HTMLAttributes, ReactNode } from 'react';

export interface DivProps extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
  width?: string;
  height?: string;
}

const Div: React.FC<DivProps> = ({ children, width, height, ...rest }) => {
  const divStyle: React.CSSProperties = {
    width: width || '100%',
    height: height || '100%',
    ...rest.style 
  };

  return <div {...rest} style={divStyle}>{children}</div>;
};

export default Div;