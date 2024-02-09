import { StyleSheet } from 'react-native';
import { DEVICE_HEIGHT, DEVICE_WIDTH } from '../../constants/sizes';
import { fonts } from '../../constants/fonts';

const styles = StyleSheet.create({
  container: { flex: 1 },
  content: { flex: 1, padding: 18, justifyContent: 'flex-end' },
  heading: {
    fontWeight: 'bold',
    fontSize: 36,
    color: '#fff',
    textAlign: 'center',
  },
  caption: {
    fontSize: fonts._16,
    fontWeight: 'normal',
    marginTop: DEVICE_HEIGHT * 0.02,
    marginBottom: DEVICE_HEIGHT * 0.06,
  },
});

export default styles;
