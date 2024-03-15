import React from 'react';
import Section, { SectionProps } from '../atoms/section';
import TextBox, { TextBoxProps } from '../molecules/textBox';

interface ContentsProps {
  sectionProps?: SectionProps;
  textBoxProps?: TextBoxProps
}

const Vision: React.FC<ContentsProps> = ({
  sectionProps,
  textBoxProps
}) => {
  const defaultDivStyle = {
    width: '1250px',
    height: '237px'
  };

  const defaultHeadingStyle = {
    fontSize: '34px',
    color: 'transparent',
    textShadow: '0 0 0 white',
    lineHeight : '100px',
    fontWeight:'bold',
  };

  const defaultParagraphStyle = {
    fontSize: '22px',
    color: 'white'
  };

  const pPropsArray = [
    { children: "PERPROJECT는 블록체인을 기반으로 한", style: defaultParagraphStyle },
    { children: "인플루언서 마케팅 플랫폼 CHANNEL-iN을 중심으로,", style: defaultParagraphStyle },
    { children: "탈중앙화 서비스의 실현을 통해", style: defaultParagraphStyle },
    { children : "이용자들이 자율적인 커뮤니티를 형성하는 것을 목표로 합니다.", style: defaultParagraphStyle },
  ];

  const customTextBoxProps: TextBoxProps & { pCount?: number } = {
    divProps: { style: defaultDivStyle },
    hProps: { 
      level: 2,
      children : "Vision", 
      style: defaultHeadingStyle },
    pPropsArray: pPropsArray
  };

  return (
    <Section {...sectionProps}>
      <TextBox {...textBoxProps} {...customTextBoxProps} />
    </Section>
  );
};

export default Vision;