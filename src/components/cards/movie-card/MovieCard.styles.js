import { StyleSheet } from 'react-native';
import { DEVICE_HEIGHT, DEVICE_WIDTH } from '../../../constants/sizes';
import { fonts } from '../../../constants/fonts';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-end',
  },
  title: {
    fontWeight: 'bold',
    fontSize: fonts._16
  },
  image: {
    width: '100%',
    height: DEVICE_HEIGHT * 0.15,
    borderRadius: 10,
  },
  blurView: {
    height: DEVICE_HEIGHT * 0.08,
    padding: 10,
    borderTopRightRadius: 16,
    borderTopLeftRadius: 16,
    justifyContent: 'center',
  },
  flexRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default styles;
