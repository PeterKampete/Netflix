import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import React from 'react';
import { CustomBlurview, Logo, ProfileSelectDropdown } from '../../components';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { DEVICE_HEIGHT, DEVICE_WIDTH, heights } from '../../constants/sizes';
import styles from './CustomDrawerContent.styles';
import { Ionicons } from '@expo/vector-icons';
import { GREY, LIGHTGREY, MEDIUMGREY, RED } from '../../constants/colors';
import { paths } from '../paths';

const customDrawerItemStyles = {
  borderRadius: 0,
  width: '100%',
  marginLeft: 0,
  marginLeft: -10,
  paddingLeft: 0,
  fontSize: 15,
};

const CustomDrawerContent = (props) => {
  return (
    <DrawerContentScrollView {...props}>
       <Image
        key={'blurryImage'}
        source={{ uri: 'https://imageio.forbes.com/specials-images/imageserve/5d35eacaf1176b0008974b54/0x0.jpg?format=jpg&crop=4560,2565,x790,y784,safe&height=900&width=1600&fit=bounds' }}
        style={styles.absoluteImage}
      />
      <CustomBlurview
        blurAmount={10}
      >
        <View
          style={{
            height: DEVICE_HEIGHT,
            justifyContent: "flex-start",
            borderTopRightRadius: 40,
            borderBottomRightRadius: 40,
            padding: 25,
            borderRightWidth: 0.2,
            borderRightColor: "#fff",
            width: DEVICE_WIDTH * 0.8,
          }}
        >
          <View style={{ height: heights.small, width: "45%" }}>
            <Logo />
          </View>
          <ProfileSelectDropdown
            style={{
              marginVertical: DEVICE_HEIGHT * 0.05,
              marginBottom: DEVICE_HEIGHT * 0.03,
            }}
          />
          <DrawerItemList {...props} />
          <View style={styles.hairline} />
          <DrawerItem
            label="Get Help"
            onPress={() => props.navigation.navigate(paths.HELP)}
            icon={({ focused, color, size }) => (
              <Ionicons
                name="help"
                size={size ? size : 24}
                color={color}
                style={{ left: 10 }}
              />
            )}
            style={customDrawerItemStyles}
            activeTintColor={LIGHTGREY}
            inactiveTintColor={MEDIUMGREY}
            activeBackgroundColor="transparent"
          />
          <DrawerItem
            label="Logout"
            icon={({ focused, color, size }) => (
              <Ionicons
                name="exit"
                size={size ? size : 24}
                color={color}
                style={{ left: 10 }}
              />
            )}
            style={customDrawerItemStyles}
            activeTintColor="#fff"
            inactiveTintColor="#fff"
            activeBackgroundColor="transparent"
          />
        </View>
      </CustomBlurview>
    </DrawerContentScrollView>
  );
};

export default CustomDrawerContent;
