import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { paths } from '../paths';
import { Downloads } from '../../screens';

const Stack = createNativeStackNavigator();

const DownloadsStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name={paths.DOWNLOADS} component={Downloads} />
    </Stack.Navigator>
  );
};

export default DownloadsStack;