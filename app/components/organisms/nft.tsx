import React from 'react';
import Section, { SectionProps } from '../atoms/section';
import TextBox, { TextBoxProps } from '../molecules/textBox';

interface ContentsProps {
  sectionProps?: SectionProps;
  textBoxProps?: TextBoxProps
}

const Nft: React.FC<ContentsProps> = ({
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
    fontWeight:'bold'
  };

  const defaultParagraphStyle = {
    fontSize: '22px',
    color: 'white'
  };

  const pPropsArray = [
    { children: "PER PROJECT에서 발행하는 NFT를 획득하고, 생태계에 참여해보세요.", style: defaultParagraphStyle },
  ];

  const customTextBoxProps: TextBoxProps & { pCount?: number } = {
    divProps: { style: defaultDivStyle },
    hProps: { 
      level: 2,
      children : "NFT", 
      style: defaultHeadingStyle },
    pPropsArray: pPropsArray
  };

  return (
    <Section {...sectionProps}>
      <TextBox {...textBoxProps} {...customTextBoxProps} />
    </Section>
  );
};

export default Nft;