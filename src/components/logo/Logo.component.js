import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import styles from './Logo.styles';
import { DEVICE_HEIGHT, DEVICE_WIDTH, heights } from '../../constants/sizes';

const Logo = ({ width = '100%', height = heights.small, style }) => {
  return (
    <View style={[styles.container, { height, width, ...style }]}>
      <Image
        source={require('../../assets/images/logo.png')}
        style={{
          height: '100%',
          width: '100%',
          resizeMode: 'contain',
        }}
      />
    </View>
  );
};
export const Logo2 = ({ size = DEVICE_WIDTH * 0.09, style, source }) => {
  return (
    <View style={[styles.logo2, { height: size, width: size, ...style }]}>
      <Image
        source={source}
        style={{ width: '100%', height: '100%', resizeMode: 'contain' }}
      />
    </View>
  );
};

export default Logo;
