import { FlatList, Image, Text, View } from 'react-native';
import React, { useEffect } from 'react';
import styles from './MusicDetail.styles';
import Slider from '@react-native-community/slider';
import { DEVICE_HEIGHT } from '../../constants/sizes';

const MusicDetail = () => {
  useEffect(() => {
    console.log('acasbckjabsj');
  }, []);
  return (
    <View style={styles.container}>
      <View style={styles.coverContainer}>
        <Image
          style={styles.cover}
          source={require('../../assets/images/landing.jpg')}
        />
      </View>
      <View style={{ marginHorizontal: 30, zIndex: -1, paddingVertical: 3 }}>
        <Text style={styles.title}>MindFields</Text>
        <Text style={styles.artist}>John Legend ft Faouzia</Text>
      </View>
      <View style={{ marginTop: DEVICE_HEIGHT * 0.08 }}>
        <Slider
          style={{ width: 200, height: 40 }}
          minimumValue={0}
          maximumValue={1}
          minimumTrackTintColor='#FFFFFF'
          maximumTrackTintColor='#000000'
        />
      </View>
    </View>
  );
};

export default MusicDetail;
