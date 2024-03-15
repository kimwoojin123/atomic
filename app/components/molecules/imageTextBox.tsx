import React from 'react';
import Image from 'next/image'
import TextBox, {TextBoxProps} from './textBox';
import Div, {DivProps} from '../atoms/div';
import styled from 'styled-components'

export interface ImageTextBoxProps {
  imageUrl: string;
  altText: string;
  textBoxProps: TextBoxProps;
  divProps?:DivProps
  imgWidth: number;
  imgHeight : number;
}

const StyledDiv = styled.div`
  display:flex;
  flex-direction:column; 
  justify-content:center;
  align-items:center;
  height:600px;
`;

const ImageTextBox: React.FC<ImageTextBoxProps> = ({ imageUrl, altText, imgWidth, imgHeight, textBoxProps, divProps }) => {
  return (
    <Div {...divProps}>
      <StyledDiv>
        <Image src={imageUrl} alt={altText} width={imgWidth} height={imgHeight} />
        <TextBox {...textBoxProps} />
      </StyledDiv>
    </Div>
  );
};

export default ImageTextBox;