import React, { HTMLAttributes } from 'react';

export interface SectionProps extends HTMLAttributes<HTMLElement> {}

const Section: React.FC<SectionProps> = ({ children, ...rest }) => {
  return <section {...rest}>{children}</section>;
};

export default Section;