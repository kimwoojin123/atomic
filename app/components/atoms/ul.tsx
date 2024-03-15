import React, { HTMLAttributes, ReactNode } from 'react';

export interface UnorderedListProps extends HTMLAttributes<HTMLUListElement> {
  children?: ReactNode;
}

const UnorderedList: React.FC<UnorderedListProps> = ({ children, ...rest }) => {
  return <ul {...rest}>{children}</ul>;
};

export default UnorderedList;