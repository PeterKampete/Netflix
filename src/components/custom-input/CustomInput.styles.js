import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    width: '90%',
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center'
  },
  input: { height: '100%', padding: 10 },
  icon: {
    position: 'absolute',
    right: 0,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    flexShrink: 1,
  },
});

export default styles;
