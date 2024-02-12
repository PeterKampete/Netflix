import { MMKV } from 'react-native-mmkv';

const localStore = new MMKV();

const storage = {
  setItem: async (key, value) => {
    try {
      localStore.set(key, value);
    } catch (error) {
      console.log(error);
    }
  },
  getItem: async (key) => {
    try {
      const value = await localStore.getString(key);
      return value;
    } catch (error) {
      console.log(error);
    }
  },
  removeItem: async (key) => {
    try {
      await localStore.delete(key);
    } catch (error) {
      console.log(error);
    }
  },
};

export default storage;
