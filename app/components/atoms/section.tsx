import React, {HTMLAttributes, ReactNode} from "react";

export interface SectionProps extends HTMLAttributes<HTMLElement> {
  children?: ReactNode;
}

const Section: React.FC<SectionProps> = ({children, ...rest}) => {
  return <section {...rest}>{children}</section>;
};

export default Section;
