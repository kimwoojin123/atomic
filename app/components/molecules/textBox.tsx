import React from 'react';
import Div, { DivProps } from '../atoms/div';
import H, { HeadingProps } from '../atoms/h';
import P, { ParagraphProps } from '../atoms/p';

export interface TextBoxProps {
  divProps?: DivProps;
  hProps?: HeadingProps;
  pCount?: number; 
  pPropsArray?: ParagraphProps[];
}

const TextBox: React.FC<TextBoxProps> = ({
  divProps,
  hProps,
  pCount = 3,
  pPropsArray = []
}) => {
  const paragraphs = Array.from({ length: pCount }).map((_, index) => (
    <P key={index} {...pPropsArray[index]}></P>
  ));

  return (
    <Div {...divProps}>
      <H {...hProps}></H>
      {paragraphs}
    </Div>
  );
};

export default TextBox;