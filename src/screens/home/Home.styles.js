import { StyleSheet } from 'react-native';
import { DEVICE_HEIGHT, DEVICE_WIDTH } from '../../constants/sizes';
import { LIGHTGREY } from '../../constants/colors';
import { fonts } from '../../constants/fonts';

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#000' },
  logo: {
    width: DEVICE_WIDTH * 0.09,
    height: DEVICE_HEIGHT * 0.09,
  },
  flexRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 14,
  },
  topItem: {
    height: DEVICE_HEIGHT * 0.045,
    width: 'auto',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 0.5,
    borderColor: LIGHTGREY,
    borderRadius: 20,
    paddingHorizontal: 18,
  },
  posterHorizontalScroll: {
    height: DEVICE_HEIGHT * 0.4,
    marginBottom: DEVICE_HEIGHT * 0.03,
    // backgroundColor: 'red',
  },
  heading: {
    fontWeight: 'bold',
    fontSize: fonts._18,
    marginBottom: 13,
  },
  section: {
    marginBottom: DEVICE_HEIGHT * 0.03,
  },
  heading: {
    fontWeight: 'bold',
    fontSize: fonts._18,
    marginBottom: 13,
  },
  genreText: {
    fontWeight: '400',
    fontSize: fonts._16,
    textAlign: 'center',
    color: LIGHTGREY,
  },
});

export default styles;
