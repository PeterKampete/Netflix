import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import React from 'react';
import { CustomBlurview, Logo, ProfileSelectDropdown } from '../../components';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { DEVICE_HEIGHT, heights } from '../../constants/sizes';
import styles from './CustomDrawerContent.styles';
import { Ionicons } from '@expo/vector-icons';
import { GREY } from '../../constants/colors';

const CustomDrawerContent = (props) => {
  return (
    <DrawerContentScrollView {...props}>
      <CustomBlurview blurAmount={22}>
        <View
          style={{
            height: DEVICE_HEIGHT,
            justifyContent: 'flex-start',
            borderTopRightRadius: 40,
            borderBottomRightRadius: 40,
            padding: 25,
            // backgroundColor: 'black',
          }}
        >
          <View style={{ height: heights.small, width: '45%' }}>
            <Logo />
          </View>
          <ProfileSelectDropdown
            style={{ marginVertical: DEVICE_HEIGHT * 0.05 }}
          />
          <DrawerItemList {...props} />
          <DrawerItem
            label='Help'
            onPress={() => Linking.openURL('https://mywebsite.com/help')}
          />
          <DrawerItem
            label='Help'
            onPress={() => Linking.openURL('https://mywebsite.com/help')}
          />
        </View>
      </CustomBlurview>
    </DrawerContentScrollView>
  );
};

export default CustomDrawerContent;
