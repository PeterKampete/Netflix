import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import styles from './AnimatedHorizontalScroll.styles';
import Animated, {
  Extrapolation,
  interpolate,
  interpolateColor,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated';
import { DEVICE_HEIGHT, DEVICE_WIDTH } from '../../constants/sizes';
import { GREY, RED } from '../../constants/colors';

const textColor = '#2A3B38';
const gray = '#A0A0A0';
const slideWidth = DEVICE_WIDTH * 0.55;
const slideHeight = DEVICE_HEIGHT * 0.38;

const Slide = ({ item, scrollOffset, index }) => {
  const animatedStyle = useAnimatedStyle(() => {
    const input = scrollOffset.value / slideWidth;
    const inputRange = [index - 1, index, index + 1];

    const scale = interpolate(
      input,
      inputRange,
      [0.8, 1, 0.8],
      Extrapolation.CLAMP
    );

    const opacity = interpolate(
      input,
      inputRange,
      [0.4, 1, 0.4],
      Extrapolation.CLAMP
    );

    return {
      transform: [{ scale }],
      opacity,
    };
  });

  return (
    <TouchableOpacity>
      <Animated.View
        key={index}
        style={[
          {
            width: slideWidth,
            height: slideHeight,
            paddingVertical: 10,
          },
          animatedStyle,
        ]}
      >
        <Image source={item.image} style={styles.posterImage} />
      </Animated.View>
    </TouchableOpacity>
  );
};

const Indicator = ({ scrollOffset, index }) => {
  const animatedStyle = useAnimatedStyle(() => {
    const input = scrollOffset.value / slideWidth;
    const inputRange = [index - 1, index, index + 1];
    const animatedColor = interpolateColor(input, inputRange, [
      GREY,
      RED,
      GREY,
    ]);

    return {
      width: interpolate(input, inputRange, [10, 20, 10], Extrapolation.CLAMP),
      backgroundColor: animatedColor,
    };
  });

  return (
    <Animated.View
      style={[
        {
          marginHorizontal: 5,
          height: 5,
          borderRadius: 10,
          backgroundColor: textColor,
        },
        animatedStyle,
      ]}
    />
  );
};

const AnimatedHorizontalScroll = ({ data }) => {
  const scrollOffset = useSharedValue(0);

  const scrollHandler = useAnimatedScrollHandler((event) => {
    scrollOffset.value = event.contentOffset.x;
  });

  return (
    <View style={{ flex: 1 }}>
      <Animated.FlatList
        horizontal
        data={data}
        keyExtractor={(item) => '_' + item.id}
        renderItem={({ item, index }) => (
          <Slide
            key={index}
            index={index}
            item={item}
            scrollOffset={scrollOffset}
          />
        )}
        scrollEventThrottle={1}
        snapToInterval={slideWidth}
        decelerationRate='normal'
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          paddingRight: (DEVICE_WIDTH - slideWidth) / 2,
          alignItems: 'center',
          paddingLeft: 18
        }}
        onScroll={scrollHandler}
      />
      <Animated.FlatList
        horizontal
        style={{ flex: 1, alignSelf: 'center' }}
        data={data}
        keyExtractor={(item) => '_' + item.id}
        renderItem={({ _, index }) => (
          <Indicator key={index} index={index} scrollOffset={scrollOffset} />
        )}
      />
    </View>
  );
};

export default AnimatedHorizontalScroll;
