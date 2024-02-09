import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { AntDesign } from '@expo/vector-icons';

const Stars = ({ rating }) => {
  return (
    <View style={{ flexDirection: 'row', alignItems: 'center', gap: 4 }}>
      {Array(rating)
        .fill(0)
        .map((_, index) => (
          <AntDesign name='star' size={10} color='#faab14' key={index} />
        ))}
    </View>
  );
};

export default Stars;
