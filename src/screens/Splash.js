import React, {useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Logo from '../components/Logo';
import {primaryMain, white} from '../ui/common/colors';
import {deviceWidth, deviceHeight} from '../ui/common/responsive';

const Splash = ({navigation}) => {
  // after 3 seconds it should redirect to Login
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('SignIn');
    }, 2000);
  }, []);

  return (
    <View
      style={{
        height: deviceHeight,
        width: deviceWidth,
        paddingTop: 100,
        backgroundColor: primaryMain,
      }}>
      <View
        style={{
          alignItems: 'center',
        }}>
        <Logo h={140} />
      </View>

      <Text
        style={{
          color: white,
          textAlign: 'center',
          fontSize: 24,
          marginTop: 20,
          fontWeight: '700',
        }}>
        Simple Deeds
      </Text>

      <View style={styles.bottomView}>
        <Text style={styles.bottomText}>
          This is another great message, this is your true choice
        </Text>
      </View>
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  bottomView: {
    position: 'absolute',
    bottom: 140,
    left: 0,
    right: 0,
    alignItems: 'center',
  },
  bottomText: {
    color: white,
    fontSize: 20,
    lineHeight: 28,
    maxWidth: 300,
    textAlign: 'center',
    fontWeight: '700',
  },
});
