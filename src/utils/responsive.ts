import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export const screenWidth = width;

// width and horizontal spacing
export const wp = (size: number) => (width / 375) * size;

// height and vertical spacing
export const hp = (size: number) => (height / 812) * size;

// font size
export const fs = (size: number) => Math.min(width / 375, 1.2) * size;