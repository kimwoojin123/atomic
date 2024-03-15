'use client'

import React, { useState } from 'react';
import ImageTextBox from '../molecules/imageTextBox';
import Button from '../atoms/button';
import { TextBoxProps } from './textBox';
import UnorderedList, { UnorderedListProps } from '../atoms/ul';
import styled from 'styled-components';


const Li = styled.li<{ isActive: boolean }>`
    background-color: ${(props: { isActive: boolean }) => (props.isActive ? 'lightgray' : 'white')};
    width: 450px;
    height: 600px;
    `;

const StyledDiv = styled.div`
  width: 400px;
  height: 50px;
  position: relative;
  bottom: 300px;
  left: 225px;
  transform: translate(-50%, -50%);
  background-color: white;
  padding: 10px;
`;


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
        <Li
          key={index}
          isActive={activeIndex === index}
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
          {activeIndex === index && (
          <StyledDiv>
            <Button>Show Details</Button>
          </StyledDiv>
          )}
        </Li>
      ))}
    </UnorderedList>
  );
};

export default ButtonInLi;