import { StyleSheet } from 'react-native';
import { DEVICE_HEIGHT, DEVICE_WIDTH } from '../../constants/sizes';
import { fonts } from '../../constants/fonts';

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#000', padding: 14 },
  logo: {
    width: DEVICE_WIDTH * 0.09,
    height: DEVICE_HEIGHT * 0.09,
    position: 'absolute',
    alignSelf: 'center',
  },
  editButton: {
    position: 'absolute',
    right: 14,
    padding: 10,
    top: 14,
  },
  content: {
    top: DEVICE_HEIGHT * 0.13,
    flex: 1,
    padding: 8,
  },
  heading: {
    fontSize: fonts._30,
    textAlign: 'center',
    color: '#fff',
    fontWeight: 'bold',
  },
  userProfiles: {
    marginTop: 30,
    flex: 1,
    paddingBottom: DEVICE_HEIGHT * 0.16,
  },
});

export default styles;
