import {
  FlatList,
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useEffect, useRef, useState } from 'react';
import styles from './MovieDetails.styles';
import { Ionicons, AntDesign } from '@expo/vector-icons';
import SwipeModal from '@birdwingo/react-native-swipe-modal';
import { DEVICE_HEIGHT, DEVICE_WIDTH } from '../../constants/sizes';
import { CustomBlurview, MovieCard } from '../../components';
import { GOLD } from '../../constants/colors';
import { posters } from '../../constants/dummy_data/posters';

const MovieDetails = ({ navigation }) => {
  const modalRef = useRef(null);
  const showModal = () => modalRef.current?.show();
  const hideModal = () => modalRef.current?.hide();
  const [numberOfLines, setNumberOfLines] = useState(3);

  const handleNumberOfLines = () => {
    if (numberOfLines === 3) {
      setNumberOfLines(5);
      return;
    }
    setNumberOfLines(3);
  };

  useEffect(() => {
    showModal();
  }, []);

  return (
    <ImageBackground
      source={require('../../assets/images/landing.jpg')}
      style={styles.container}
      blurRadius={10}
    >
      <TouchableOpacity style={styles.playIcon}>
        <Ionicons name='play' size={24} color='#fff' />
      </TouchableOpacity>
      <View>
        <SwipeModal
          ref={modalRef}
          fixedHeight
          topOffset={DEVICE_HEIGHT * 0.2}
          closeOnPressBack
          scrollEnabled
          onHide={() => navigation.goBack()}
          bg='rgba(0,0,0,0.2)'
          style={{ flex: 1 }}
        >
          <CustomBlurview
            blurType='dark'
            blurAmount={20}
            style={{ flex: 1 }}
          >
            <View style={styles.blurView}>
              <View>
                <Text style={styles.title}>Venom</Text>
                <Text style={styles.caption}>Drama | Action | Thriller</Text>
                <View style={styles.hairline} />
                <TouchableOpacity style={styles.heartIcon}>
                  <Ionicons name='heart' size={20} color='#fff' />
                </TouchableOpacity>
                <View style={styles.flexDetails}>
                  <View style={styles.miniDetail}>
                    <Text style={styles.detailHeading}>Year</Text>
                    <Text style={styles.detailCaption}>2019</Text>
                  </View>
                  <View style={styles.miniDetail}>
                    <Text style={styles.detailHeading}>Country</Text>
                    <Text style={styles.detailCaption}>Africa</Text>
                  </View>
                  <View style={styles.miniDetail}>
                    <Text style={styles.detailHeading}>Length</Text>
                    <Text style={styles.detailCaption}>119 min</Text>
                  </View>
                </View>
                <View style={[styles.flexDetails, { marginBottom: 20 }]}>
                  <View
                    style={[
                      styles.flexDetails,
                      { marginVertical: 0, width: 'auto' },
                    ]}
                  >
                    <View style={styles.detailRounded}>
                      <Text>18+</Text>
                    </View>
                    <View style={[styles.detailRounded, { marginLeft: 10 }]}>
                      <Text style={{ marginRight: 5 }}>4.5</Text>
                      <AntDesign name='star' size={12} color={GOLD} />
                    </View>
                  </View>
                  <View
                    style={[
                      styles.flexDetails,
                      { marginVertical: 0, gap: 10, width: 'auto' },
                    ]}
                  >
                    <Ionicons name='share-outline' size={24} color='#fff' />
                  </View>
                </View>
                <View style={styles.section}>
                  <Text style={styles.sectionHeading}>Story line</Text>
                  <TouchableOpacity onPress={handleNumberOfLines}>
                    <Text
                      style={styles.sectionCaption}
                      numberOfLines={numberOfLines}
                    >
                      In publishing and graphic design, Lorem ipsum is a
                      placeholder text commonly used to demonstrate the visual
                      form of a document or a typeface without relying on
                      meaningful content. Lorem ipsum may be used as a
                      placeholder before the final copy is available
                    </Text>
                  </TouchableOpacity>
                </View>
                <View style={styles.section}>
                  <Text style={styles.sectionHeading}>Cast</Text>
                </View>
              </View>
              <ScrollView
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{
                  flexWrap: 'wrap',
                  flexDirection: 'row',
                  justifyContent: 'center',
                  gap: 20,
                }}
              >
                {posters.map((item) => (
                  <Image
                    source={item.image}
                    key={item.id}
                    style={styles.posterImage}
                  />
                ))}
              </ScrollView>
            </View>
          </CustomBlurview>
        </SwipeModal>
      </View>
    </ImageBackground>
  );
};

export default MovieDetails;
