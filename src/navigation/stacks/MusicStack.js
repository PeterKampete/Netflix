import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { paths } from '../paths';
import {  Music, MusicDetail } from '../../screens';

const Stack = createNativeStackNavigator();

const MusicStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name={paths.MUSIC} component={Music} />
      <Stack.Screen name={paths.MUSICDETAIL} component={MusicDetail} />
    </Stack.Navigator>
  );
};

export default MusicStack;
