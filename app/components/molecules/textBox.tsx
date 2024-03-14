import React from 'react';
import Div, { DivProps } from '../atoms/div';
import H, { HeadingProps } from '../atoms/h';
import P, { ParagraphProps } from '../atoms/p';

interface TextBoxProps {
  divProps?: DivProps;
  hProps?: HeadingProps;
  pProps?: ParagraphProps;
  pCount?: number; 
}

const TextBox: React.FC<TextBoxProps> = ({
  divProps,
  hProps,
  pProps,
  pCount = 3
}) => {
  const paragraphs = [];
  for (let i = 0; i < pCount; i++) {
    paragraphs.push(<P key={i} {...pProps}>Paragraph {i + 1}</P>);
  }

  return (
    <Div {...divProps}>
      <H {...hProps}></H>
      {paragraphs}
    </Div>
  );
};

export default TextBox;