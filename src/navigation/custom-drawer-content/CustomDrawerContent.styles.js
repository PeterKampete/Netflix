import { StyleSheet } from 'react-native';
import { DEVICE_HEIGHT, DEVICE_WIDTH, heights } from '../../constants/sizes';
import { fonts } from '../../constants/fonts';
import { GREY, LIGHTGREY, MEDIUMGREY } from '../../constants/colors';

const styles = StyleSheet.create({
  flexRow: { flexDirection: 'row', alignItems: 'center' },
  hairline: {
    height: 0.3,
    width: '100%',
    backgroundColor: MEDIUMGREY,
    position:'relative',
    bottom: 1
  },
});

export default styles;
