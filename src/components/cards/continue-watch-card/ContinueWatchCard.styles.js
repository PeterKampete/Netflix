import { StyleSheet } from 'react-native';
import { DEVICE_HEIGHT, DEVICE_WIDTH } from '../../../constants/sizes';

const styles = StyleSheet.create({
  container: {
    // padding: 10,
    width: DEVICE_WIDTH * 0.435,
    height: DEVICE_HEIGHT * 0.202,
    borderRadius: 10,
  },
  title: {
    marginVertical: 10
  },
  image: {
    width: '100%',
    height: DEVICE_HEIGHT * 0.15,
    borderRadius: 10,
  },
});

export default styles;
