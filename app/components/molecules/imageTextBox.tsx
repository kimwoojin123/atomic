import React from 'react';
import Image from 'next/image'
import TextBox, {TextBoxProps} from './textBox';
import Div, {DivProps} from '../atoms/div';

export interface ImageTextBoxProps {
  imageUrl: string;
  altText: string;
  textBoxProps: TextBoxProps;
  divProps?:DivProps
  imgWidth: number;
  imgHeight : number;
}

const ImageTextBox: React.FC<ImageTextBoxProps> = ({ imageUrl, altText, imgWidth, imgHeight, textBoxProps, divProps }) => {
  return (
    <Div {...divProps}>
      <Div {...divProps}>
        <Image src={imageUrl} alt={altText} width={imgWidth} height={imgHeight} />
      </Div>
      <Div {...divProps}>
        <TextBox {...textBoxProps} />
      </Div>
    </Div>
  );
};

export default ImageTextBox;