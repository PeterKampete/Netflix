import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import styles from './Logo.styles';
import { DEVICE_HEIGHT, heights } from '../../constants/sizes';

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

export default Logo;
