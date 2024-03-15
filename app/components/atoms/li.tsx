import React, { HTMLAttributes, ReactNode } from 'react';

export interface ListItemProps extends HTMLAttributes<HTMLLIElement> {
  children?: ReactNode;
}

const ListItem: React.FC<ListItemProps> = ({ children, ...rest }) => {
  return <li {...rest}>{children}</li>;
};

export default ListItem;