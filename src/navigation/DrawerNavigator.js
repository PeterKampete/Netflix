import { createDrawerNavigator } from '@react-navigation/drawer';
import { paths } from './paths';
import HomeStack from './stacks/HomeStack';
import CustomDrawerContent from './custom-drawer-content/CustomDrawerContent';
import { DEVICE_WIDTH } from '../constants/sizes';
import { LIGHTGREY, MEDIUMGREY } from '../constants/colors';
import { Ionicons, EvilIcons } from '@expo/vector-icons';
import SearchStack from './stacks/SearchStack';

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
        },
        drawerActiveTintColor: LIGHTGREY,
        drawerInactiveTintColor: MEDIUMGREY,
        drawerActiveBackgroundColor: 'transparent',
      }}
      drawerContent={(props) => <CustomDrawerContent {...props} />}
    >
      <Drawer.Screen
        name={paths.HOMESTACK}
        options={{
          title: 'Home',
          drawerIcon: ({ color, size }) => (
            <Ionicons name='home' size={size ? size : 24} color={color} />
          ),
        }}
        component={HomeStack}
      />
      <Drawer.Screen
        name={paths.SEARCHSTACK}
        options={{
          title: 'Search',
          drawerIcon: ({ color, size }) => (
            <Ionicons name='search' size={size ? size : 24} color={color} />
          ),
        }}
        component={SearchStack}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
