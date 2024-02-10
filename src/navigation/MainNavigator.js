import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { MovieDetails, Onboarding, Splash, UserProfiles } from '../screens';
import { paths } from './paths';
import BottomNavigator from './BottomNavigator';

const Stack = createNativeStackNavigator();

const MainNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName={paths.MOVIEDETAILS}
      >
        <Stack.Screen name={paths.SPLASH} component={Splash} />
        <Stack.Screen name={paths.ONBOARDING} component={Onboarding} />
        <Stack.Screen
          name={paths.USERPROFILES}
          component={UserProfiles}
          options={{
            animation: 'slide_from_right',
          }}
        />
        <Stack.Screen
          name={paths.MOVIEDETAILS}
          component={MovieDetails}
          options={{
            animation: 'slide_from_right',
          }}
        />
        <Stack.Screen
          name={paths.BOTTOMNAVIGATOR}
          component={BottomNavigator}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigator;
