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
  fontSize = 16,
  padding = 10,
}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <ImageBackground
        source={image}
        borderRadius={10}
        style={[styles.container, { width, height }]}
      >
        <View style={{ position: 'relative' }}>
          <CustomBlurview>
            <View style={[styles.blurView, { padding: fontSize / 1.6 }]}>
              <View>
                <Text style={[styles.title, { fontSize }]} numberOfLines={2}>{title}</Text>
              </View>
              <View
                style={[
                  styles.flexRow,
                  { justifyContent: 'space-between', marginTop: 6 },
                ]}
              >
                <View style={styles.flexRow}>
                  <AntDesign name='star' size={fontSize / 1.6} color={GOLD} />
                  <Text
                    style={{
                      color: '#fff',
                      fontSize: fontSize / 1.3,
                      marginLeft: fontSize / 3.2,
                    }}
                  >
                    {rating}
                  </Text>
                </View>
                <View style={styles.flexRow}>
                  <Ionicons name='eye-sharp' size={fontSize} color='#fff' />
                  <Text
                    style={{
                      color: '#fff',
                      fontSize: fontSize / 1.3,
                      marginLeft: fontSize / 3.2,
                    }}
                  >
                    {views}
                  </Text>
                </View>
              </View>
            </View>
          </CustomBlurview>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
};

export default MovieCard;
