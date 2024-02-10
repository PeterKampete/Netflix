import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import styles from './ProfileSelectDropdown.styles';
import { DARKGREY, GREY } from '../../constants/colors';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from 'react-native-reanimated';
import { DEVICE_HEIGHT, DEVICE_WIDTH } from '../../constants/sizes';

const ProfileSelectDropdown = ({ data, style }) => {
  const [open, setOpen] = useState(false);
  const height = useSharedValue(0);
  const OFFSET = DEVICE_HEIGHT * 0.35;

  const animatedStyles = useAnimatedStyle(() => ({
    height: open ? withSpring(OFFSET) : withTiming(0),
  }));

  const toggleDropdown = () => {
    setOpen(!open);
  };

  return (
    <View style={[styles.dropdownContainer, style]}>
      <TouchableOpacity style={styles.dropdownButton} onPress={toggleDropdown}>
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
        <Ionicons name='chevron-down' size={24} color={GREY} />
      </TouchableOpacity>
      <Animated.View
        style={[
          {
            gap: 12,
            marginTop: 10,
            height,
            position: 'absolute',
            top: DEVICE_HEIGHT * 0.085,
            width: '100%',
            borderRadius: 14,
            zIndex: 1,
            backgroundColor: '#fff',
          },
          animatedStyles,
        ]}
      >
        <ScrollView style={{ flex: 1 }}>
          {Array(6)
            .fill(0)
            .map((_, index) => (
              <TouchableOpacity style={styles.dropdownButton} key={index}>
                <View style={{ flexDirection: 'row', height: '100%' }}>
                  <Image
                    source={require('../../assets/images/pro2.jpg')}
                    style={[styles.profile, { width: DEVICE_WIDTH * 0.15 }]}
                  />
                  <View style={styles.details}>
                    <Text style={[styles.name, { color: GREY }]}>Kampete</Text>
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
