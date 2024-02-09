import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import styles from './CustomInput.styles';
import { heights } from '../../constants/sizes';
import { DARKGREY, GREY } from '../../constants/colors';

const CustomInput = ({
  title,
  onPress,
  bgColor = DARKGREY,
  fontSize,
  rightIcon,
  leftIcon,
  height = heights.normal,
  borderRadius = 10,
  borderWidth,
  borderColor,
  color = GREY,
  placeholder,
  style,
  ...props
}) => {
  return (
    <View
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
      {leftIcon && (
        <View
          style={[styles.icon, { left: 0, height, width: height - 8 }]}
        >
          {leftIcon()}
        </View>
      )}

      <TextInput
        placeholder={placeholder}
        placeholderTextColor={color}
        style={[
          styles.input,
          { borderRadius, width: '100%', paddingLeft: leftIcon && height - 8, paddingRight: rightIcon && height - 8, color: '#fff' },
        ]}
        {...props}
      />
      {rightIcon && (
        <View style={[styles.icon, { height, width: height - 12 }]}>
          {rightIcon()}
        </View>
      )}
    </View>
  );
};

export default CustomInput;
