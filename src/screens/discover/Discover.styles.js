import { StyleSheet } from 'react-native';
import { fonts } from '../../constants/fonts';
import { DEVICE_HEIGHT } from '../../constants/sizes';
import { LIGHTGREY } from '../../constants/colors';

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#000', padding: 20 },
  top: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: DEVICE_HEIGHT * 0.04,
  },
  heading: {
    fontSize: fonts._18,
    fontWeight: 'bold',
  },
  text: {
    fontWeight: '400',
    fontSize: fonts._16,
    textAlign: 'center',
    color: LIGHTGREY,
  },
  sectionHeading: {
    fontWeight: 'bold',
    fontSize: fonts._18,
    marginBottom: 13,
  },
});

export default styles;
