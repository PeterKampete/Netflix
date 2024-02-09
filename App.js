import { GestureHandlerRootView } from 'react-native-gesture-handler';
import React from 'react';
import MainNavigator from './src/navigation/MainNavigator';

const App = () => (
  <GestureHandlerRootView style={{ flex: 1 }}>
    <MainNavigator />
  </GestureHandlerRootView>
);

export default App;
