import { createDrawerNavigator } from '@react-navigation/drawer';
import { paths } from './paths';
import HomeStack from './stacks/HomeStack';
import CustomDrawerContent from './custom-drawer-content/CustomDrawerContent';
import { DEVICE_WIDTH } from '../constants/sizes';
import { LIGHTGREY, MEDIUMGREY } from '../constants/colors';
import { Ionicons, EvilIcons, MaterialIcons } from '@expo/vector-icons';
import SearchStack from './stacks/SearchStack';
import { Categories, Movies, Music, MyList } from '../screens';
import BottomNavigator from './BottomNavigator';
import MusicStack from './stacks/MusicStack';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerTitle: '',
        headerShown: false,
        drawerStyle: {
          backgroundColor: 'transparent',
          width: DEVICE_WIDTH * 0.8,
          borderTopRightRadius: 40,
          borderBottomRightRadius: 40,
          zIndex: 1,
        },
        drawerItemStyle: {
          borderRadius: 0,
          width: '100%',
          marginLeft: 0,
        },
        drawerLabelStyle: {
          marginLeft: -10,
          paddingLeft: 0,
          fontSize: 15,
        },
        drawerActiveTintColor: LIGHTGREY,
        drawerInactiveTintColor: MEDIUMGREY,
        drawerActiveBackgroundColor: 'transparent',
      }}
      drawerContent={(props) => <CustomDrawerContent {...props} />}
    >
      <Drawer.Screen
        name={paths.BOTTOMNAVIGATOR}
        options={{
          title: 'Home',
          drawerIcon: ({ color, size }) => (
            <Ionicons name='home' size={size ? size : 24} color={color} />
          ),
        }}
        component={BottomNavigator}
      />
      <Drawer.Screen
        name={paths.MOVIES}
        options={{
          title: 'Movie Library',
          drawerIcon: ({ color, size }) => (
            <Ionicons name='tv-outline' size={size ? size : 24} color={color} />
          ),
        }}
        component={Movies}
      />
      <Drawer.Screen
        name={paths.CATEGORIES}
        options={{
          title: 'Categories',
          drawerIcon: ({ color, size }) => (
            <MaterialIcons
              name='category'
              size={size ? size : 24}
              color={color}
            />
          ),
        }}
        component={Categories}
      />
      <Drawer.Screen
        name={paths.MYLIST}
        options={{
          title: 'My List',
          drawerIcon: ({ color, size }) => (
            <Ionicons name='list' size={size ? size : 24} color={color} />
          ),
        }}
        component={MyList}
      />
      <Drawer.Screen
        name={paths.FAVORITES}
        options={{
          title: 'Favorites',
          drawerIcon: ({ color, size }) => (
            <Ionicons
              name='heart-outline'
              size={size ? size : 24}
              color={color}
            />
          ),
        }}
        component={MyList}
      />
      <Drawer.Screen
        name={paths.MUSICSTACK}
        options={{
          title: 'Music',
          drawerIcon: ({ color, size }) => (
            <MaterialIcons
              name='library-music'
              size={size ? size : 24}
              color={color}
            />
          ),
        }}
        component={MusicStack}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
