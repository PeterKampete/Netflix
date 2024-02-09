import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
  },
  content: {
    justifyContent: 'flex-end',
    alignItems: 'center',
    flex: 1,
    padding: 14,
  },
  active: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 17,
    paddingHorizontal: 16,
  },
  name: { fontWeight: 'bold', fontSize: 13 },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 8,
    marginRight: 5,
  },
});

export default styles;
