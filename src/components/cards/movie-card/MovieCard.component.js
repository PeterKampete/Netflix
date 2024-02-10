import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import styles from './MovieCard.styles';
import { AntDesign, Ionicons } from '@expo/vector-icons';
import { GOLD, GREY, LIGHTGREY } from '../../../constants/colors';
import CustomBlurview from '../../custom-blurview/CustomBlurview.component';
import { DEVICE_HEIGHT, DEVICE_WIDTH } from '../../../constants/sizes';

const MovieCard = ({
  image,
  title,
  rating,
  views = '10M+',
  width = DEVICE_WIDTH * 0.435,
  height = DEVICE_HEIGHT * 0.25,
  onPress,
}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <ImageBackground
        source={image}
        borderRadius={16}
        style={[styles.container, { width, height }]}
      >
        <View style={{ position: 'relative' }}>
          <CustomBlurview style={styles.blurView}>
            <View>
              <Text style={styles.title}>{title}</Text>
            </View>
            <View
              style={[
                styles.flexRow,
                { justifyContent: 'space-between', marginTop: 6 },
              ]}
            >
              <View style={styles.flexRow}>
                <AntDesign name='star' size={10} color={GOLD} />
                <Text style={{ color: '#fff', fontSize: 12 }}>{rating}</Text>
              </View>
              <View style={styles.flexRow}>
                <Ionicons name='eye-sharp' size={16} color='#fff' />
                <Text style={{ color: '#fff', fontSize: 12, marginLeft: 4 }}>
                  {views} views
                </Text>
              </View>
            </View>
          </CustomBlurview>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
};

export default MovieCard;
