import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { Bar } from 'react-native-progress';
import styles from './ContinueWatchCard.styles';
import { DEVICE_WIDTH } from '../../../constants/sizes';
import { DARKGREY, GREY, RED } from '../../../constants/colors';

const ContinueWatchCard = ({ image, title, progress = 0.3, onPress }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Image source={image} style={styles.image} />
      <Text style={styles.title} numberOfLines={1}>{title}</Text>
      <Bar
        progress={progress}
        width={DEVICE_WIDTH * 0.435}
        height={3}
        style={{ alignSelf: 'center' }}
        unfilledColor={DARKGREY}
        borderWidth={0}
        color={RED}
      />
    </TouchableOpacity>
  );
};

export default ContinueWatchCard;
