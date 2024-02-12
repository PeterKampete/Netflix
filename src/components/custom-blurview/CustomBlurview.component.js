import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { BlurView } from '@react-native-community/blur';

const CustomBlurview = ({ children, style, blurType = 'dark', ...props }) => {
  return (
    <BlurView
      blurType={blurType}
      blurAmount={50}
      reducedTransparencyFallbackColor='white'
      overlayColor=''
      style={style}
      {...props}
    >
      {children}
    </BlurView>
  );
};

export default CustomBlurview;
