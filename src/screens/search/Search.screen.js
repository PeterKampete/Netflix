import {
  FlatList,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useRef } from 'react';
import styles from './Search.styles';
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

const Search = ({ navigation }) => {
  const modalRef = useRef(null);
  const showModal = () => modalRef.current?.show();
  const hideModal = () => modalRef.current?.hide();
  return (
    <SafeAreaView style={styles.container}>
      <CustomInput
        placeholder='Search movie, show or genre'
        leftIcon={() => <Ionicons name='search' size={20} color={GREY} />}
        cursorColor={GREY}
        borderRadius={8}
      />
      <View style={styles.top}>
        <Text style={styles.heading}>Previosly Searched</Text>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <TouchableOpacity>
            <Text style={{ fontWeight: 'bold' }}>Clear All</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={showModal} style={{ marginLeft: 20 }}>
            <Ionicons name='filter' size={24} color='#fff' />
          </TouchableOpacity>
        </View>
      </View>
      <View style={{ flex: 1 }}>
        <FlatList
          data={profiles.slice(0, 2)}
          contentContainerStyle={{
            gap: 14,
            paddingBottom: DEVICE_HEIGHT * 0.09,
            paddingTop: DEVICE_HEIGHT * 0.04,
          }}
          renderItem={({ item }) => (
            <SearchedMovieCard
              image={item.image}
              title={item.name}
              onPress={() => navigation.navigate(paths.MOVIEDETAILS)}
            />
          )}
          ListFooterComponent={
            <View style={{ gap: 20 }}>
              <View>
                <Text style={[styles.sectionHeading, { marginLeft: 18 }]}>
                  Popular Movies
                </Text>
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
                      width={DEVICE_WIDTH * 0.33}
                      height={DEVICE_HEIGHT * 0.2}
                      fontSize={14}
                    />
                  ))}
                </ScrollView>
              </View>
              <View>
                <Text style={[styles.sectionHeading, { marginLeft: 18 }]}>
                  Popular Movies
                </Text>
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
                      width={DEVICE_WIDTH * 0.33}
                      height={DEVICE_HEIGHT * 0.2}
                      fontSize={14}
                    />
                  ))}
                </ScrollView>
              </View>
            </View>
          }
        />
      </View>
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
              styles.text,
              { fontWeight: 'bold', fontSize: fonts._18, color: '#fff' },
            ]}
          >
            Movies
          </Text>
          {genres.map((item) => (
            <TouchableOpacity key={item.id}>
              <Text style={styles.text}>{item.name}</Text>
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
              styles.text,
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
              <Text style={styles.text}>{item.name}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </SwipeModal>
    </SafeAreaView>
  );
};

export default Search;
