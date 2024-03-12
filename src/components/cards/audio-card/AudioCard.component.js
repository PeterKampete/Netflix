import { Image, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import styles from './AudioCard.styles';
import { Ionicons } from '@expo/vector-icons';

const AudioCard = ({
  image,
  title,
  artist,
  isPlaying,
  onPlayPreview,
  onPausePreview,
  onPress,
}) => {
  return (
    <TouchableOpacity
      style={[
        styles.container,
        { backgroundColor: isPlaying ? '#000' : '#F9F9FB' },
      ]}
      onPress={onPress}
    >
      <View style={{ flexDirection: 'row' }}>
        <View style={styles.coverContainer}>
          <Image
            source={image}
            style={{ width: '100%', height: '100%', borderRadius: 14 }}
          />
        </View>
        <View>
          <Text style={[styles.title, { color: isPlaying ? '#fff' : '#000' }]}>
            {title}
          </Text>
          <Text style={styles.artist}>{artist}</Text>
        </View>
      </View>
      <TouchableOpacity
        onPress={isPlaying ? onPausePreview : onPlayPreview}
        style={{ zIndex: 1 }}
      >
        {isPlaying ? (
          <Ionicons
            name='pause-sharp'
            size={26}
            color={isPlaying ? '#fff' : '#000'}
          />
        ) : (
          <Ionicons name='play' size={26} color={isPlaying ? '#fff' : '#000'} />
        )}
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

export default AudioCard;
