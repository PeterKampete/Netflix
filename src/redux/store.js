/* eslint-disable no-duplicate-imports */
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './rootReducer';
import { persistReducer, persistStore } from 'redux-persist';
import storage from '../storage/mmkvStorage';
import { apiSlice } from './api/apiSlice';

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
  timeout: 0,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
      immutableCheck: false,
    }).concat(apiSlice.middleware),
});

export const persistor = persistStore(store);
export default store;
