import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import styles from './SearchedMovieCard.styles';
import { Ionicons } from '@expo/vector-icons';

const SearchedMovieCard = ({ image, title, onPress }) => {
  return (
    <View style={[styles.container, styles.flexRow]}>
      <View style={styles.flexRow}>
        <View style={styles.imageContainer}>
          <Image source={image} style={styles.image} />
        </View>
        <Text style={styles.title}>{title}</Text>
      </View>
      <TouchableOpacity onPress={onPress}>
        <Ionicons name='play' size={18} />
      </TouchableOpacity>
    </View>
  );
};

export default SearchedMovieCard;
