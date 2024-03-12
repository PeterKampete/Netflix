import { StyleSheet } from 'react-native';
import { DEVICE_HEIGHT, DEVICE_WIDTH } from '../../../constants/sizes';
import { fonts } from '../../../constants/fonts';
import { GREY } from '../../../constants/colors';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 18,
    justifyContent: 'space-between',
    height: DEVICE_HEIGHT * 0.13,
    borderRadius: 16,
    alignItems: 'center'
  },
  coverContainer: {
    width: DEVICE_WIDTH * 0.2,
    height: DEVICE_WIDTH * 0.2,
    marginRight: 14,
    borderRadius: 16,
    bottom: 30,
    zIndex: 1,
  },
  title: {
    fontSize: fonts._18,
    color: '#000',
  },
  artist: {
    color: GREY,
    marginTop: 3,
    fontSize: 15,
  },
});

export default styles;
