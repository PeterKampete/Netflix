import { StyleSheet } from 'react-native';
import { DEVICE_HEIGHT, DEVICE_WIDTH } from './../../constants/sizes';
import { fonts } from './../../constants/fonts';
import { GREY } from '../../constants/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 22,
    backgroundColor: '#fff',
  },
  coverContainer: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,
    padding: 4,

    elevation: 9,
    width: DEVICE_WIDTH * 0.9,
    height: DEVICE_HEIGHT * 0.4,
    borderRadius: 16,
    marginBottom: DEVICE_HEIGHT * 0.03,
  },
  cover: { width: '100%', height: '100%', borderRadius: 16 },
  title: {
    fontSize: fonts._24,
    color: '#000',
    fontWeight: '500',
  },
  artist: {
    color: GREY,
    marginTop: 5,
    fontSize: 15,
  },
});

export default styles;
