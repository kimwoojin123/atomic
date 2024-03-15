import React from 'react';
import Section, { SectionProps } from '../atoms/section';
import TextBox, { TextBoxProps } from '../molecules/textBox';


interface RoadMapProps {
  sectionProps?: SectionProps;
  textBoxProps?: TextBoxProps;
}

const RoadMap: React.FC<RoadMapProps> = ({
  sectionProps,
  textBoxProps,
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
    fontWeight:'bold'
  };

  const defaultParagraphStyle = {
    fontSize: '22px',
    color: 'white'
  };

  const pPropsArray = [
    { children: "우리가 함께 걸어온 길, 앞으로도 함께 나아가겠습니다.", style: defaultParagraphStyle },
  ];

  const customTextBoxProps: TextBoxProps & { pCount?: number } = {
    divProps: { style: defaultDivStyle },
    hProps: { 
      level: 2,
      children : "ROADMAP", 
      style: defaultHeadingStyle },
    pPropsArray: pPropsArray
  };

  return (
    <Section {...sectionProps}>
      <TextBox {...textBoxProps} {...customTextBoxProps} />
    </Section>
  );
};

export default RoadMap;