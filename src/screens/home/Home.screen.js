import { Image, SafeAreaView, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import React, { useEffect, useRef } from 'react';
import styles from './Home.styles';
import { LIGHTGREY } from '../../constants/colors';
import { posters } from '../../constants/dummy_data/posters';
import AnimatedHorizontalScroll from '../../components/animated-horizontal-scroll/AnimatedHorizontalScroll.component';
import ContinueWatchCard from '../../components/cards/continue-watch-card/ContinueWatchCard.component';
import { MovieCard } from '../../components';
import { DEVICE_HEIGHT, DEVICE_WIDTH } from '../../constants/sizes';
import { paths } from '../../navigation/paths';
import { tvShows } from '../../constants/dummy_data/tvShows';
import { genres } from '../../constants/dummy_data/genres';
import { fonts } from '../../constants/fonts';
import SwipeModal from '@birdwingo/react-native-swipe-modal';
import { useGetMoviesQuery } from '../../redux/api/moviesSlice';
import axios from 'axios';
import { TMDB_API_ACCESS_TOKEN } from '@env';

const Home = ({ navigation }) => {
  const modalRef = useRef(null);
  const showModal = () => modalRef.current?.show();

  const { data, error, isLoading, refetch } = useGetMoviesQuery();
  console.log('dta', data?.backdrop_path);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        contentContainerStyle={{ paddingBottom: DEVICE_HEIGHT * 0.06 }}
      >
        <View style={[styles.flexRow, { paddingHorizontal: 14 }]}>
          <TouchableOpacity
            onPress={() => navigation.toggleDrawer()}
            style={styles.logo}
          >
            <Image
              source={require('../../assets/images/logo2.png')}
              style={{ width: '100%', height: '100%', resizeMode: 'contain' }}
            />
          </TouchableOpacity>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{
              gap: 16,
              paddingRight: 10,
              paddingLeft: 20,
            }}
          >
            {['Movies', 'TV Shows', 'Categrories'].map((item) => (
              <TouchableOpacity
                key={item}
                style={styles.topItem}
                onPress={() => {
                  if (item === 'Categrories') {
                    console.log('is ');
                    showModal();
                    return;
                  }
                }}
              >
                <Text style={{ color: LIGHTGREY }}>{item}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
        <View style={styles.posterHorizontalScroll}>
          <AnimatedHorizontalScroll
            data={posters}
            onPress={() => navigation.navigate(paths.MOVIEDETAILS)}
          />
        </View>
        <View style={[styles.section, { paddingHorizontal: 18 }]}>
          <Text style={styles.heading}>Continue Watching</Text>
          <View style={[styles.flexRow, { justifyContent: 'space-between' }]}>
            <ContinueWatchCard image={posters[4].image} title='Depression'  />
            <ContinueWatchCard
              image={posters[3].image}
              title='Behind the smiles'
            />
          </View>
        </View>
        <View style={styles.section}>
          <Text style={[styles.heading, { marginLeft: 18 }]}>
            Popular Movies
          </Text>
          <View style={[styles.flexRow]}>
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{
                gap: 16,
                paddingRight: 10,
                paddingLeft: 20,
              }}
            >
              {posters.map((item) => (
                <MovieCard
                  image={item.image}
                  title='Overkill'
                  rating={4.3}
                  key={item.id}
                  onPress={() => navigation.navigate(paths.MOVIEDETAILS)}
                />
              ))}
            </ScrollView>
          </View>
        </View>
      </ScrollView>
      <SwipeModal
        ref={modalRef}
        // topOffset={DEVICE_HEIGHT * 0.2}
        style={{
          width: DEVICE_WIDTH,
          height: DEVICE_HEIGHT,
          paddingBottom: DEVICE_HEIGHT * 0.12,
        }}
        scrollEnabled
      >
        <View
          style={{
            alignItems: 'center',
            gap: 34,
          }}
        >
          <Text
            style={[
              styles.genreText,
              { fontWeight: 'bold', fontSize: fonts._18, color: '#fff' },
            ]}
          >
            Movies
          </Text>
          {genres.map((item) => (
            <TouchableOpacity key={item.id}>
              <Text style={styles.genreText}>{item.name}</Text>
            </TouchableOpacity>
          ))}
        </View>
        <View
          style={{
            alignItems: 'center',
            gap: 34,
          }}
        >
          <Text
            style={[
              styles.genreText,
              {
                fontWeight: 'bold',
                fontSize: fonts._18,
                color: '#fff',
                marginTop: 34,
              },
            ]}
          >
            TV Shows
          </Text>
          {tvShows.map((item) => (
            <TouchableOpacity key={item.id}>
              <Text style={styles.genreText}>{item.name}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </SwipeModal>
    </SafeAreaView>
  );
};

export default Home;
