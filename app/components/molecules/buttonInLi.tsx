'use client'

import React, {useState} from 'react';
import ImageTextBox from '../molecules/imageTextBox';
import Button from '../atoms/button';
import { TextBoxProps } from './textBox';
import UnorderedList, {UnorderedListProps} from '../atoms/ul';


interface Item {
  imageUrl: string;
  altText: string;
  textBoxProps: TextBoxProps;
  imgWidth: number;
  imgHeight: number;
}

interface ButtonInLiProps {
  items: Item[];
  unorderedListProps : UnorderedListProps;
}

const ButtonInLi: React.FC<ButtonInLiProps> = ({ items, unorderedListProps }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <UnorderedList {...unorderedListProps}>
      {items.map((item, index) => (
        <li
          key={index}
          onMouseOver={() => setActiveIndex(index)}
          onMouseOut={() => setActiveIndex(null)}
        >
          <ImageTextBox
            imageUrl={item.imageUrl}
            altText={item.altText}
            imgWidth={item.imgWidth}
            imgHeight={item.imgHeight}
            textBoxProps={item.textBoxProps}
          />
          {activeIndex === index && <Button>Show Details</Button>}
        </li>
      ))}
    </UnorderedList>
  );
};

export default ButtonInLi;