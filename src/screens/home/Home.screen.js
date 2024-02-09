import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import styles from './Home.styles';
import { LIGHTGREY } from '../../constants/colors';
import { posters } from '../../constants/dummy_data/posters';
import AnimatedHorizontalScroll from '../../components/animated-horizontal-scroll/AnimatedHorizontalScroll.component';
import ContinueWatchCard from '../../components/cards/continue-watch-card/ContinueWatchCard.component';
import { MovieCard } from '../../components';
import { DEVICE_HEIGHT } from '../../constants/sizes';

const Home = () => {
  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={{ paddingBottom: DEVICE_HEIGHT * 0.06 }}
      >
        <View style={[styles.flexRow, { paddingHorizontal: 14 }]}>
          <View style={styles.logo}>
            <Image
              source={require('../../assets/images/logo2.png')}
              style={{ width: '100%', height: '100%', resizeMode: 'contain' }}
            />
          </View>
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
              <TouchableOpacity key={item} style={styles.topItem}>
                <Text style={{ color: LIGHTGREY }}>{item}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
        <View style={styles.posterHorizontalScroll}>
          <AnimatedHorizontalScroll data={posters} />
        </View>
        <View style={[styles.section, { paddingHorizontal: 18 }]}>
          <Text style={styles.heading}>Continue Watching</Text>
          <View style={[styles.flexRow, { justifyContent: 'space-between' }]}>
            <ContinueWatchCard image={posters[4].image} title='Depression' />
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
                />
              ))}
            </ScrollView>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Home;
