import { FlatList, Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import styles from './Music.styles';
import { songs } from '../../constants/dummy_data/songs';
import AudioCard from '../../components/cards/audio-card/AudioCard.component';
import { DEVICE_HEIGHT } from '../../constants/sizes';
import { paths } from '../../navigation/paths';

const Music = ({ navigation }) => {
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
      <FlatList
        data={songs}
        contentContainerStyle={{
          gap: DEVICE_HEIGHT * 0.05,
          paddingVertical: 16,
          paddingTop: DEVICE_HEIGHT * 0.08,
        }}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <AudioCard
            image={item.image}
            title={item.title}
            artist={item.artist}
            isPlaying={item.isPlaying}
            onPress={() => navigation.navigate(paths.MUSICDETAIL)}
          />
        )}
      />
    </View>
  );
};

export default Music;
