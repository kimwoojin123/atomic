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
    fontWeight: 'bold',
    lineHeight : '100px',
    textShadow : '0 0 0 white'
  };

  const defaultParagraphStyle = {
    fontSize: '22px',
    color: 'white'
  };

  const pPropsArray = [
    { children: "생명의 생성과 소멸이 반복하는 과정 속에서", style: defaultParagraphStyle },
    { children: "소행성의 주인이 되어 PER PROJECT 차원의", style: defaultParagraphStyle },
    { children: "생태계 재건에 참여하고, 보상을 획득해보세요.", style: defaultParagraphStyle }
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