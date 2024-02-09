import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import styles from './CustomButton.styles';
import { heights } from '../../constants/sizes';

const CustomButton = ({
  title,
  onPress,
  bgColor = 'red',
  fontSize,
  rightIcon,
  leftIcon,
  height = heights.normal,
  borderRadius = 8,
  borderWidth,
  borderColor,
  color = '#fff',
  style,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.container,
        {
          backgroundColor: bgColor,
          height,
          borderRadius,
          borderWidth,
          borderColor,
          ...style,
        },
      ]}
    >
      {leftIcon && leftIcon()}

      <Text
        style={{
          fontSize,
          color,
          marginRight: rightIcon && 10,
          marginLeft: leftIcon && 10,
        }}
      >
        {title}
      </Text>
      {rightIcon && rightIcon()}
    </TouchableOpacity>
  );
};

export default CustomButton;
