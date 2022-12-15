import React from 'react';
import {
  ScrollView,
  View,
  StyleSheet,
  Image,
  Text,
  Button,
  TouchableOpacity,
} from 'react-native';

import {deviceWidth, deviceHeight} from '../../ui/common/responsive';
import {
  white,
  black,
  primaryMain,
  grayBlack,
  secondaryMain,
} from '../../ui/common/colors';
import {useNavigation} from '@react-navigation/native';

const Room00 = ({title, description, step, bgImg, nextPath}) => {
  const navigation = useNavigation();

  return (
    <View style={{height: deviceHeight}}>
      <Image style={styles.bgImage} source={bgImg}></Image>
      <View style={styles.modalView}>
        <Text style={styles.modalTitle}>{title}</Text>
        <Text style={styles.modalDescription}>{description}</Text>

        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'center',
            marginTop: 15,
          }}>
          <View style={step == 0 ? styles.selectedDot : styles.unSelectedDot} />
          <View style={step == 1 ? styles.selectedDot : styles.unSelectedDot} />
          <View style={step == 2 ? styles.selectedDot : styles.unSelectedDot} />
        </View>

        <TouchableOpacity
          style={{
            backgroundColor: white,
            padding: 15,
            borderRadius: 32,
            marginTop: 10,
          }}>
          <Text
            style={{
              textAlign: 'center',
              color: primaryMain,
              fontWeight: '400',
              fontSize: 18,
            }}>
            Skip
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            backgroundColor: primaryMain,
            padding: 15,
            borderRadius: 32,
            marginTop: 5,
          }}
          onPress={() => navigation.navigate(nextPath)}>
          <Text
            style={{
              textAlign: 'center',
              color: white,
              fontWeight: '700',
              fontSize: 18,
            }}>
            Next
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Room00;

const styles = StyleSheet.create({
  bgImage: {
    width: deviceWidth,
  },
  modalView: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: white,
    width: deviceWidth,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 40,
    paddingBottom: 40,
  },
  modalTitle: {
    color: primaryMain,
    fontSize: 24,
    textAlign: 'center',
    fontFamily: 'SF Pro Display',
    fontWeight: '700',
    lineHeight: 32,
  },
  modalDescription: {
    marginTop: 15,
    color: grayBlack,
    fontSize: 18,
    textAlign: 'center',
    fontFamily: 'SF Pro Display',
    fontWeight: '400',
    lineHeight: 28,
  },
  nextBtn: {
    backgroundColor: primaryMain,
    borderRadius: 20,
    fontWeight: 'bold',
  },
  selectedDot: {
    height: 6,
    width: 6,
    margin: 4,
    borderRadius: 10,
    backgroundColor: primaryMain,
  },
  unSelectedDot: {
    height: 6,
    width: 6,
    margin: 4,
    borderRadius: 10,
    backgroundColor: secondaryMain,
  },
});
