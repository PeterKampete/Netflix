import { StyleSheet } from 'react-native';
import { DEVICE_HEIGHT, DEVICE_WIDTH } from '../../../constants/sizes';
import { fonts } from '../../../constants/fonts';

const styles = StyleSheet.create({
  container: {
    padding: 10,
    width: '100%',
    height: DEVICE_HEIGHT * 0.1,
    borderRadius: 10,
    justifyContent: 'space-between'
  },
  title: {
    marginLeft: 10,
    fontWeight: 'bold',
    fontSize: fonts._16
  },
  imageContainer: {
    width: DEVICE_WIDTH * 0.22,
    height: '100%',
    borderRadius: 10,
    backgroundColor: 'red',
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
  },
  flexRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default styles;
