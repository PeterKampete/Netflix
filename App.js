import { GestureHandlerRootView } from 'react-native-gesture-handler';
import React, { useEffect } from 'react';
import MainNavigator from './src/navigation/MainNavigator';
import { Provider, useDispatch } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { Text } from 'react-native';
import store, { persistor } from './src/redux/store';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate
        loading={<Text style={{ padding: 20 }}>Loading persisted data...</Text>}
        persistor={persistor}
      >
        <GestureHandlerRootView style={{ flex: 1 }}>
          <MainNavigator />
        </GestureHandlerRootView>
      </PersistGate>
    </Provider>
  );
};

export default App;
