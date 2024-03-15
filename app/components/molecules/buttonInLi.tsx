'use client'

import React, { useState } from 'react';
import ImageTextBox from '../molecules/imageTextBox';
import Button from '../atoms/button';
import { TextBoxProps } from './textBox';
import UnorderedList, { UnorderedListProps } from '../atoms/ul';
import Div from '../atoms/div';

interface Item {
  imageUrl: string;
  altText: string;
  textBoxProps: TextBoxProps;
  imgWidth: number;
  imgHeight: number;
}

interface ButtonInLiProps {
  items: Item[];
  unorderedListProps: UnorderedListProps;
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
          style={{
            backgroundColor: activeIndex === index ? 'lightgray' : 'white',
            width: '450px',
            height: '600px',
          }}
        >
          
          <ImageTextBox
            imageUrl={item.imageUrl}
            altText={item.altText}
            imgWidth={item.imgWidth}
            imgHeight={item.imgHeight}
            textBoxProps={item.textBoxProps}
          />
          {activeIndex === index && (
            <Div
              width='400px'
              height='50px'
              style={{
                position: 'relative',
                bottom:'300px',
                left:'225px',
                transform: 'translate(-50%, -50%)',
                backgroundColor: 'white',
                padding: '10px',
              }}
            >
              <Button>Show Details</Button>
            </Div>
          )}
        </li>
      ))}
    </UnorderedList>
  );
};

export default ButtonInLi;