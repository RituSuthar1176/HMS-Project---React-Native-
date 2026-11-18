import React from 'react';
import { Text, TextProps } from 'react-native';
import styles from './customText.style';

interface CustomTextProps extends TextProps {
  variant?:
    | 'heading'
    | 'title'
    | 'label'
    | 'body'
    | 'button'
    | 'link'
    | 'caption';
}

const CustomText = ({
  variant = 'body',
  style,
  children,
  ...rest
}: CustomTextProps) => {
  return (
    <Text style={[styles[variant], style]} {...rest}>
      {children}
    </Text>
  );
};

export default CustomText;
