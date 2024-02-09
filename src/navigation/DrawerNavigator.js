import { createDrawerNavigator } from '@react-navigation/drawer';
import { Ionicons } from '@expo/vector-icons';
import { paths } from './paths';
import HomeStack from './stacks/HomeStack';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerTitle: '',
        headerShown: false,
      }}
    >
      <Drawer.Screen
        name={paths.HOMESTACK}
        options={{
          title: 'Home',
          drawerIcon: ({ color, size }) => (
            <Ionicons
              name='home'
              size={size ? size : 24}
              color={color}
            />
          ),
        }}
        component={HomeStack}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
