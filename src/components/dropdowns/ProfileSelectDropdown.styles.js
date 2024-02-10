import { StyleSheet } from 'react-native';
import { DEVICE_HEIGHT, DEVICE_WIDTH } from '../../constants/sizes';
import { GREY, MEDIUMGREY } from '../../constants/colors';
import { fonts } from '../../constants/fonts';

const styles = StyleSheet.create({
  //profiles dropdown

  dropdownContainer: {
    width: '100%',
    zIndex: 1,
  },
  dropdownButton: {
    padding: 8,
    borderRadius: 14,
    width: '100%',
    height: DEVICE_HEIGHT * 0.085,
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  profile: {
    width: DEVICE_WIDTH * 0.2,
    height: '100%',
    borderRadius: 10,
  },
  details: {
    marginLeft: 10,
  },
  name: { fontSize: fonts._18 },
  switchText: { color: MEDIUMGREY, marginTop: 2, fontSize: 13 },
});

export default styles;
