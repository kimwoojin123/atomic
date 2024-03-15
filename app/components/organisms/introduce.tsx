import React from 'react';
import Section, { SectionProps } from '../atoms/section';
import TextBox, { TextBoxProps } from '../molecules/textBox';

interface ContentsProps {
  sectionProps?: SectionProps;
  textBoxProps?: TextBoxProps
}

const Introduce: React.FC<ContentsProps> = ({
  sectionProps,
  textBoxProps
}) => {
  const defaultDivStyle = {
    width: '1250px',
    height: '237px'
  };

  const defaultHeadingStyle = {
    fontSize: '44px',
    color: 'transparent',
    textShadow: '0 0 0 white',
  };

  const defaultParagraphStyle = {
    fontSize: '22px',
    color: 'white'
  };

  const pPropsArray = [
    { children: "Paragraph 1", style: defaultParagraphStyle },
    { children: "Paragraph 2", style: defaultParagraphStyle },
    { children: "Paragraph 3", style: defaultParagraphStyle }
  ];

  const customTextBoxProps: TextBoxProps & { pCount?: number } = {
    divProps: { style: defaultDivStyle },
    hProps: { 
      level: 2,
      children : "PER PROJECT", 
      style: defaultHeadingStyle },
    pPropsArray: pPropsArray
  };

  return (
    <Section {...sectionProps}>
      <TextBox {...textBoxProps} {...customTextBoxProps} />
    </Section>
  );
};

export default Introduce;