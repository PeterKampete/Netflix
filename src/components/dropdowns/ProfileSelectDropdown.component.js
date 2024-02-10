import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import styles from './ProfileSelectDropdown.styles';
import { DARKGREY, GREY, LIGHTGREY } from '../../constants/colors';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from 'react-native-reanimated';
import { DEVICE_HEIGHT, DEVICE_WIDTH } from '../../constants/sizes';
import { profiles } from '../../constants/dummy_data/profiles';

const ProfileSelectDropdown = ({ data, style }) => {
  const [open, setOpen] = useState(false);
  const [profile, setProfile] = useState(null);
  const height = useSharedValue(0);
  const borderBottomLeftRadius = useSharedValue(0);
  const borderBottomRightRadius = useSharedValue(0);
  const OFFSET = DEVICE_HEIGHT * 0.25;

  const animatedStyles = useAnimatedStyle(() => ({
    height: open ? withSpring(OFFSET) : withTiming(0),
  }));
  const dropdownButtonAnimatedStyles = useAnimatedStyle(() => ({
    borderBottomLeftRadius: open ? withTiming(0) : withTiming(14),
    borderBottomRightRadius: open ? withTiming(0) : withTiming(14),
  }));

  const toggleDropdown = () => {
    setOpen(!open);
  };

  return (
    <View style={[styles.dropdownContainer, style]}>
      <TouchableOpacity onPress={toggleDropdown}>
        <Animated.View
          style={[
            styles.dropdownButton,
            {
              borderBottomRightRadius,
              borderBottomLeftRadius,
              borderRadius: 14,
            },
            dropdownButtonAnimatedStyles,
          ]}
        >
          <View style={{ flexDirection: 'row', height: '100%' }}>
            <Image
              source={require('../../assets/images/pro2.jpg')}
              style={styles.profile}
            />
            <View style={styles.details}>
              <Text style={styles.name}>Kampete</Text>
              <Text style={styles.switchText}>Switch Profiles</Text>
            </View>
          </View>
          <Ionicons name='chevron-down' size={20} color={GREY} />
        </Animated.View>
      </TouchableOpacity>
      <Animated.View
        style={[
          {
            height,
            width: '100%',
            borderRadius: 14,
            zIndex: 1,
          },
          animatedStyles,
        ]}
      >
        <ScrollView>
          {profiles.slice(0, 3).map((item, index) => (
            <TouchableOpacity
              key={item.id}
              style={[
                styles.dropdownButton,
                {
                  borderTopRightRadius: 0,
                  borderTopLeftRadius: 0,
                  borderBottomLeftRadius:
                    index === 2 ? 14 : 0,
                  borderBottomRightRadius:
                    index === 2 ? 14 : 0,
                },
              ]}
            >
              <View style={{ flexDirection: 'row', height: '100%' }}>
                <Image
                  source={item.image}
                  style={[styles.profile, { width: DEVICE_WIDTH * 0.12 }]}
                />
                <View style={styles.details}>
                  <Text style={[styles.name, { fontSize: 15 }]}>
                    {item.name}
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </Animated.View>
    </View>
  );
};

export default ProfileSelectDropdown;
