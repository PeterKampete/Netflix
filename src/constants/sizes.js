import { Dimensions } from 'react-native';

// Dimensions
export const DEVICE_WIDTH = Dimensions.get('window').width;
export const DEVICE_HEIGHT = Dimensions.get('window').height;

//heights
export const heights = {
  small: DEVICE_HEIGHT * 0.05,
  normal: DEVICE_HEIGHT * 0.07,
  large: DEVICE_HEIGHT * 0.15,
};
