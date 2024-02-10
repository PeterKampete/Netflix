import { StyleSheet } from 'react-native';
import { DEVICE_HEIGHT, DEVICE_WIDTH } from '../../constants/sizes';
import { fonts } from '../../constants/fonts';
import { GREY, LIGHTGREY } from '../../constants/colors';

const size = DEVICE_WIDTH * 0.15;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: DEVICE_HEIGHT,
    flex: 1,
    justifyContent: 'flex-end',
    // top: -90
  },
  playIcon: {
    width: size,
    height: size,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255,255,255,0.2)',
    borderRadius: size,
    position: 'absolute',
    top: 0,
    alignSelf: 'center',
    zIndex: 1,
    top: DEVICE_HEIGHT * 0.1,
  },
  image: {
    width: '100%',
    height: DEVICE_HEIGHT * 0.3,
  },
  blurView: {
    height: DEVICE_HEIGHT,
    // width: DEVICE_WIDTH,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    borderWidth: 0.5,
    borderColor: LIGHTGREY,
    borderBottomWidth: 0,
    padding: 30,
    flex: 1,
  },
  title: { fontWeight: 'bold', fontSize: fonts._35, textAlign: 'center' },
  caption: { textAlign: 'center', fontSize: fonts._16 },
  hairline: {
    width: '100%',
    height: 0.5,
    backgroundColor: LIGHTGREY,
    marginVertical: DEVICE_HEIGHT * 0.035,
  },
  miniDetail: { alignItems: 'center' },
  detailHeading: { color: LIGHTGREY, fontSize: 12, marginBottom: 3 },
  detailCaption: { fontWeight: 'bold' },
  flexDetails: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    marginBottom: 25,
  },
  detailRounded: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255,255,255,0.2)',
    paddingVertical: 4,
    paddingHorizontal: 16,
    borderRadius: 16,
    flexDirection: 'row',
  },
  heartIcon: {
    position: 'absolute',
    top: DEVICE_HEIGHT * 0.02,
    right: DEVICE_WIDTH * 0.01,
  },
  section: {},
  sectionHeading: { fontWeight: 'bold', fontSize: fonts._18, marginBottom: 8 },
  sectionCaption: { marginBottom: 10, color: LIGHTGREY, lineHeight: 20 },
  posterImage: {
    width: DEVICE_WIDTH * 0.25,
    height: DEVICE_HEIGHT * 0.12,
    borderRadius: 10,
  },
});

export default styles;
