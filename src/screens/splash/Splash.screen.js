import { StyleSheet, Text, View } from 'react-native';
import React, { useEffect } from 'react';
import LottieView from 'lottie-react-native';
import styles from './Splash.styles';
import { paths } from '../../navigation/paths';

const animation = require('../../assets/lottie/netflix.json');

const Splash = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate(paths.ONBOARDING);
    }, 4000);
  }, []);
  return (
    <View style={styles.container}>
      <LottieView
        source={animation}
        autoPlay
        style={{ flex: 1, backgroundColor: '#000' }}
      />
    </View>
  );
};

export default Splash;
