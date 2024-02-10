import { StyleSheet } from 'react-native';
import { DEVICE_HEIGHT, DEVICE_WIDTH } from '../../../constants/sizes';
import { fonts } from '../../../constants/fonts';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-end',
  },
  title: {
    fontWeight: 'bold',
  },
  blurView: {
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
