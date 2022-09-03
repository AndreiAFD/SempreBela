import React from 'react';
import {Text as TextMaterial, TextProps} from '@react-native-material/core';

type FontWeightType = keyof typeof fontWeights;

interface ITextProps extends TextProps {
  fontWeight: FontWeightType;
  fontSize?: number;
  margin?: number;
  marginTop?: number;
}

const fontWeights = {
  regular: 'FiraSans-Regular',
  medium: 'FiraSans-Medium',
  semiBold: 'FiraSans-SemiBold',
  bold: 'FiraSans-Bold',
};
const Text = ({children, ...props}: ITextProps) => {
  return (
    <TextMaterial
      {...props}
      style={{
        fontFamily: fontWeights[props.fontWeight],
        fontSize: props.fontSize,
        margin: props.margin,
        marginTop: props.marginTop,
      }}>
      {children}
    </TextMaterial>
  );
};

export default Text;
