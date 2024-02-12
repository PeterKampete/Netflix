import React from 'react';
import {
  AnimatedTabBarNavigator,
  DotSize,
  TabButtonLayout,
  TabElementDisplayOptions,
} from 'react-native-animated-nav-tab-bar';
import { Ionicons } from '@expo/vector-icons';
import DrawerNavigator from './DrawerNavigator';
import { DARKGREY, GREY, LIGHTGREY, RED } from '../constants/colors';
import { paths } from './paths';
import SearchStack from './stacks/SearchStack';
import DiscoverStack from './stacks/DiscoverStack';
import DownloadsStack from './stacks/DownloadsStack';
import ProfileStack from './stacks/ProfileStack';

const Tabs = AnimatedTabBarNavigator();

const BottomNavigator = () => {
  return (
    <Tabs.Navigator
      screenOptions={{ headerShown: false }}
      appearance={{
        whenActiveShow: TabElementDisplayOptions.ICON_ONLY,
        floating: true,
        tabBarBackground: 'rgba(255,255,255,0.06)',
        dotSize: DotSize.SMALL,
        shadow: true,
      }}
      tabBarOptions={{
        activeTintColor: '#fff',
        inactiveTintColor: '#fff',
        // inactiveTintColor: GREY,
        activeBackgroundColor: RED,
      }}
      initialRouteName={paths.DRAWERNAVIGATOR}
      // backBehavior='initialRoute'
    >
      <Tabs.Screen
        name={paths.DRAWERNAVIGATOR}
        component={DrawerNavigator}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ focused, color, size }) => (
            <Ionicons
              name={focused ? 'home' : 'home-outline'}
              size={size}
              color={focused ? color : '#fff'}
            />
          ),
        }}
      />
      <Tabs.Screen
        name={paths.SEARCHSTACK}
        component={SearchStack}
        options={{
          tabBarLabel: 'Search',
          tabBarIcon: ({ focused, color, size }) => (
            <Ionicons
              name={focused ? 'search' : 'search-outline'}
              size={size}
              color={focused ? color : '#fff'}
            />
          ),
        }}
      />

      <Tabs.Screen
        name={paths.DISCOVERSTACK}
        component={DiscoverStack}
        options={{
          tabBarLabel: 'Discover',
          tabBarIcon: ({ focused, color, size }) => (
            <Ionicons
              name={focused ? 'compass' : 'compass-outline'}
              size={size}
              color={focused ? color : '#fff'}
            />
          ),
        }}
      />
      <Tabs.Screen
        name={paths.DOWNLOADSSTACK}
        component={DownloadsStack}
        options={{
          tabBarLabel: 'Downloads',
          tabBarIcon: ({ focused, color, size }) => (
            <Ionicons
              name={focused ? 'download' : 'download-outline'}
              size={size}
              color={focused ? color : '#fff'}
            />
          ),
        }}
      />
      <Tabs.Screen
        name={paths.PROFILESTACK}
        component={ProfileStack}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ focused, color, size }) => (
            <Ionicons
              name={focused ? 'person' : 'person-outline'}
              size={size}
              color={focused ? color : '#fff'}
            />
          ),
        }}
      />
    </Tabs.Navigator>
  );
};

export default BottomNavigator;
