import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { forwardRef, useRef, useState } from 'react';
import SwipeModal from '@birdwingo/react-native-swipe-modal';
import styles from './Auth.styles';
import { DEVICE_HEIGHT } from '../../constants/sizes';
import { MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';
import { GREY } from '../../constants/colors';
import CustomInput from '../custom-input/CustomInput.component';
import CustomButton from '../custom-button/CustomButton.component';
import { paths } from '../../navigation/paths';

const Login = forwardRef(
  ({ showLoginModal, hideLoginModal, showSignupModal, navigation }, ref) => {
    const [checked, setChecked] = useState(false);

    return (
      <SwipeModal ref={ref} fixedHeight style={styles.swipeModal} scrollEnabled closeOnPressBack>
        <View style={{ flex: 1, paddingHorizontal: 30, paddingVertical: 10 }}>
          <Text style={styles.signupText}>Welcom Back</Text>
          <Text style={{ color: '#fff', marginTop: 8 }}>
            Sign in to continue
          </Text>
          <CustomInput
            placeholder='Email or phone number'
            style={{ marginTop: DEVICE_HEIGHT * 0.06 }}
            borderWidth={0.3}
            borderColor={GREY}
          />
          <CustomInput
            placeholder='Email or phone number'
            style={{ marginVertical: 20 }}
            borderWidth={0.3}
            borderColor={GREY}
          />
          <View style={styles.checkRow}>
            <TouchableOpacity
              onPress={() => setChecked(!checked)}
              style={styles.checkRow}
            >
              {checked ? (
                <Ionicons name='checkbox' size={20} color='#fff' />
              ) : (
                <MaterialCommunityIcons
                  name='checkbox-blank-outline'
                  size={20}
                  color={GREY}
                />
              )}
              <Text style={[styles.rememberText, { marginLeft: 6 }]}>
                Remember Me
              </Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.rememberText}>Need Help?</Text>
            </TouchableOpacity>
          </View>
          <CustomButton
            title='Login'
            style={{ marginTop: DEVICE_HEIGHT * 0.055, marginBottom: 20 }}
            onPress={() => navigation.navigate(paths.USERPROFILES)}
          />
          <View style={[styles.checkRow, { justifyContent: 'center' }]}>
            <Text style={styles.rememberText}>New to netflix?</Text>
            <TouchableOpacity
              style={{ marginLeft: 6 }}
              onPress={() => {
                hideLoginModal();
                showSignupModal();
              }}
            >
              <Text
                style={[
                  styles.rememberText,
                  { fontSize: 14, fontWeight: 'bold' },
                ]}
              >
                Sign up
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </SwipeModal>
    );
  }
);

export default Login;
