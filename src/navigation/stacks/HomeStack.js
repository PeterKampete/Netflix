import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { paths } from '../paths';
import { Home, MovieDetails } from '../../screens';

const Stack = createNativeStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name={paths.HOME} component={Home} />
      <Stack.Screen
        name={paths.MOVIEDETAILS}
        component={MovieDetails}
        options={{
          animation: 'fade_from_bottom',
        }}
      />
    </Stack.Navigator>
  );
};

export default HomeStack;
