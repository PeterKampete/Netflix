import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { AntDesign } from '@expo/vector-icons';
import { GOLD } from '../../constants/colors';

const Stars = ({ rating }) => {
  return (
    <View style={{ flexDirection: 'row', alignItems: 'center', gap: 4 }}>
      {Array(rating)
        .fill(0)
        .map((_, index) => (
          <AntDesign name='star' size={10} color={GOLD} key={index} />
        ))}
    </View>
  );
};

export default Stars;
