import React from 'react';
import Image from 'next/image'
import TextBox, {TextBoxProps} from './textBox';
import Div, {DivProps} from '../atoms/div';

interface ImageTextBoxProps {
  imageUrl: string;
  altText: string;
  textBoxProps: TextBoxProps;
  divProps?:DivProps
  width: number;
  height : number;
}

const ImageTextBox: React.FC<ImageTextBoxProps> = ({ imageUrl, altText, width, height, textBoxProps, divProps }) => {
  return (
    <Div {...divProps}>
      <Div {...divProps}>
        <Image src={imageUrl} alt={altText} width={width} height={height} />
      </Div>
      <Div {...divProps}>
        <TextBox {...textBoxProps} />
      </Div>
    </Div>
  );
};

export default ImageTextBox;