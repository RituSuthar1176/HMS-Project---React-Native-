import React from 'react';
import { StyleProp, TouchableOpacity, ViewStyle } from 'react-native';
import CustomText from '../customText';
import styles from './customButton.style';

interface CustomButtonProps {
  title: string;
  onPress: () => void;
  style?: StyleProp<ViewStyle>;
}

const CustomButton = ({ title, onPress, style }: CustomButtonProps) => {
  return (
    <TouchableOpacity style={[styles.container, style]} onPress={onPress}>
      <CustomText variant="button">{title}</CustomText>
    </TouchableOpacity>
  );
};

export default CustomButton;
