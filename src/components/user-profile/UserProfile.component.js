import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import styles from './UserProfile.styles';
import { GREY, LIGHTGREY } from '../../constants/colors';
import { DEVICE_HEIGHT } from '../../constants/sizes';

const UserProfile = ({
  image,
  name,
  isActive,
  width = '100%',
  height = DEVICE_HEIGHT * 0.3,
  borderRadius = 25,
  children,
  borderWidth,
  borderColor,
  onPress,
  ...props
}) => {
  return (
    <TouchableOpacity
      style={[styles.container, { width, height, borderWidth }]}
      onPress={onPress}
    >
      <ImageBackground
        source={image}
        style={[styles.content, { borderWidth, borderColor, borderRadius }]}
        resizeMode='cover'
        borderRadius={borderRadius}
        {...props}
      >
        {children ? (
          children
        ) : (
          <View style={styles.active}>
            <View
              style={[
                styles.dot,
                { backgroundColor: isActive ? 'green' : LIGHTGREY },
              ]}
            />
            <Text style={styles.name}>{name}</Text>
          </View>
        )}
      </ImageBackground>
    </TouchableOpacity>
  );
};

export default UserProfile;
