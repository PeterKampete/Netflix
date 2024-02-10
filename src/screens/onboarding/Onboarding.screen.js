import React, { useEffect, useRef, useState } from 'react';
import { View, ImageBackground, Text } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { CustomButton, Login, Logo, Signup } from '../../components';
import styles from './Onboarding.styles';
import { DEVICE_HEIGHT } from '../../constants/sizes';
import { useSelector } from 'react-redux';

const Onboarding = ({ navigation }) => {
  const signupModalRef = useRef(null);
  const loginModalRef = useRef(null);

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../../assets/images/landing.jpg')}
        resizeMode='cover'
        style={{ flex: 1 }}
      >
        <LinearGradient
          colors={['transparent', 'transparent', '#000']}
          style={styles.content}
        >
          <Logo
            source={require('../../assets/images/logo.png')}
            style={{
              position: 'absolute',
              top: DEVICE_HEIGHT * 0.08,
              alignSelf: 'center',
            }}
          />
          <View style={{ alignItems: 'center' }}>
            <Text style={styles.heading}>
              Unlimited Offers of Movies, Series & Programs
            </Text>
            <Text style={[styles.heading, styles.caption]}>
              Watch anytime, anywhere. Cancel Subscription at anytime at no
              extra cost
            </Text>
          </View>
          <CustomButton
            title='Get Started'
            onPress={() => signupModalRef.current?.show()}
          />
        </LinearGradient>
      </ImageBackground>
      <Signup
        ref={signupModalRef}
        hideSignupModal={() => signupModalRef.current?.hide()}
        showLoginModal={() => loginModalRef.current?.show()}
        navigation={navigation}
      />
      <Login
        ref={loginModalRef}
        hideLoginModal={() => loginModalRef.current?.hide()}
        showSignupModal={() => signupModalRef.current?.show()}
        navigation={navigation}
      />
    </View>
  );
};

export default Onboarding;
