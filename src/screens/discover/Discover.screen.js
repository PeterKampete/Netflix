import {
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useRef } from 'react';
import styles from './Discover.styles';
import { CustomInput, MovieCard, SearchedMovieCard } from '../../components';
import { Ionicons } from '@expo/vector-icons';
import { GREY } from '../../constants/colors';
import { posters } from '../../constants/dummy_data/posters';
import { profiles } from '../../constants/dummy_data/profiles';
import { DEVICE_HEIGHT, DEVICE_WIDTH } from '../../constants/sizes';
import { paths } from '../../navigation/paths';
import SwipeModal from '@birdwingo/react-native-swipe-modal';
import { genres } from '../../constants/dummy_data/genres';
import { fonts } from '../../constants/fonts';
import { tvShows } from '../../constants/dummy_data/tvShows';
import { genresAndMovies } from '../../constants/dummy_data/genresAndMovies';

const Discover = ({ navigation }) => {
  const modalRef = useRef(null);
  const showModal = () => modalRef.current?.show();
  const hideModal = () => modalRef.current?.hide();
  return (
    <View style={styles.container}>
      <CustomInput
        placeholder='Search movie, show or genre'
        leftIcon={() => <Ionicons name='search' size={20} color={GREY} />}
        cursorColor={GREY}
        borderRadius={8}
      />
      <View style={{ flex: 1 }}>
        <FlatList
          data={genresAndMovies}
          contentContainerStyle={{
            gap: 14,
            paddingBottom: DEVICE_HEIGHT * 0.09,
            paddingTop: DEVICE_HEIGHT * 0.04,
          }}
          renderItem={({ item }) => (
            <View style={{ flex: 1, marginBottom: 16 }}>
              <Text style={[styles.sectionHeading, { marginLeft: 12 }]}>
                {item.genre}
              </Text>
              <FlatList
                showsHorizontalScrollIndicator={false}
                horizontal
                data={item.movies}
                contentContainerStyle={{ gap: 14, paddingHorizontal: 12 }}
                renderItem={({ item }) => (
                  <MovieCard
                    image={item.image}
                    title='Overkill'
                    rating={4.3}
                    key={item.id}
                    width={DEVICE_WIDTH * 0.33}
                    height={DEVICE_HEIGHT * 0.2}
                    fontSize={14}
                  />
                )}
              />
            </View>
          )}
        />
      </View>
    </View>
  );
};

export default Discover;
