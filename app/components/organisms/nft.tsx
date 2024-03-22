import React from "react";
import Section, {SectionProps} from "../atoms/section";
import TextBox, {TextBoxProps} from "../molecules/textBox";
import ButtonInLi from "../molecules/buttonInLi";
import {UnorderedListProps} from "../atoms/ul";
import {ButtonProps} from "../atoms/button";

interface ContentsProps {
  sectionProps?: SectionProps;
  textBoxProps?: TextBoxProps;
  unorderedListProps?: UnorderedListProps;
  buttonProps: ButtonProps;
}

const Nft: React.FC<ContentsProps> = ({sectionProps, textBoxProps, unorderedListProps, buttonProps}) => {
  const defaultDivStyle = {
    width: "1250px",
    height: "237px",
  };

  const defaultHeadingStyle = {
    fontSize: "34px",
    color: "transparent",
    textShadow: "0 0 0 white",
    lineHeight: "100px",
    fontWeight: "bold",
  };

  const defaultParagraphStyle = {
    fontSize: "22px",
    color: "white",
  };

  const pPropsArray = [
    {children: "PER PROJECT에서 발는 NFT를 획득하고, 생태계에 참여해보세요.", style: defaultParagraphStyle},
  ];

  const customTextBoxProps: TextBoxProps & {pCount?: number} = {
    divProps: {style: defaultDivStyle},
    hProps: {
      level: 2,
      children: "NFT",
      style: defaultHeadingStyle,
    },
    pPropsArray: pPropsArray,
  };

  const items = [
    {
      imageUrl: "https://www.perproject.io/assets/aien.jpg",
      altText: "alt_text_1",
      textBoxProps: {
        divProps: {style: {width: "300px", height: "150px"}},
        hProps: {level: 3, children: "Your Heading 1"},
        pPropsArray: [{children: "Your paragraph 1"}],
      },
      imgWidth: 410,
      imgHeight: 410,
    },
    {
      imageUrl: "https://www.perproject.io/assets/perfriends.jpg",
      altText: "alt_text_2",
      textBoxProps: {
        divProps: {style: {width: "300px", height: "150px"}},
        hProps: {level: 3, children: "Your Heading 2"},
        pPropsArray: [{children: "Your paragraph 2"}],
      },
      imgWidth: 410,
      imgHeight: 410,
    },
    {
      imageUrl: "https://www.perproject.io/assets/rubyon.jpg",
      altText: "alt_text_3",
      textBoxProps: {
        divProps: {style: {width: "300px", height: "150px"}},
        hProps: {level: 3, children: "Your Heading 2"},
        pPropsArray: [{children: "Your paragraph 2"}],
      },
      imgWidth: 410,
      imgHeight: 410,
    },
  ];

  const ulStyle = {display: "flex", justifyContent: "center", gap: "30px"};

  const buttonContent = "자세히보기";
  const buttonStyle = {};

  return (
    <Section {...sectionProps}>
      <TextBox {...textBoxProps} {...customTextBoxProps} />
      <ButtonInLi
        items={items}
        unorderedListProps={{...unorderedListProps, style: ulStyle}}
        buttonProps={{...buttonProps, children: buttonContent, style: buttonStyle}}
      />
    </Section>
  );
};

export default Nft;
