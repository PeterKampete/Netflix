import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { BlurView } from '@react-native-community/blur';
import styles from './MovieCard.styles';
import { AntDesign, Ionicons } from '@expo/vector-icons';
import { GREY, LIGHTGREY } from '../../../constants/colors';

const MovieCard = ({ image, title, rating, views = '10M+' }) => {
  return (
    <ImageBackground source={image} borderRadius={16} style={styles.container}>
      <View style={{ position: 'relative' }}>
        <BlurView
          blurType='dark'
          blurAmount={2}
          reducedTransparencyFallbackColor='white'
          style={styles.blurView}
          overlayColor=''
        >
          <View>
            <Text style={styles.title}>{title}</Text>
          </View>
          <View style={[styles.flexRow, { justifyContent: 'space-between', marginTop: 6 }]}>
            <View style={styles.flexRow}>
              <AntDesign name='star' size={10} color='#faab14' />
              <Text style={{ color: '#fff', fontSize: 12 }}>{rating}</Text>
            </View>
            <View style={styles.flexRow}>
              <Ionicons name='eye-sharp' size={16} color='#fff' />
              <Text style={{ color: '#fff', fontSize: 12, marginLeft: 4 }}>
                {views} views
              </Text>
            </View>
          </View>
        </BlurView>
      </View>
    </ImageBackground>
  );
};

export default MovieCard;
