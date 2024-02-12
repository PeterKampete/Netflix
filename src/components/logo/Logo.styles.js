import { StyleSheet } from 'react-native';
import { DEVICE_HEIGHT, DEVICE_WIDTH } from '../../constants/sizes';

const styles = StyleSheet.create({
  container: { flex: 1 },
  logo2: {
    width: DEVICE_WIDTH * 0.09,
    height: DEVICE_HEIGHT * 0.09,
  },
});

export default styles;
