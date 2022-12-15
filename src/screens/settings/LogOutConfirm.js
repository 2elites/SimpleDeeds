import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import {primaryMain, softGray, white} from '../../ui/common/colors';
import {deviceWidth} from '../../ui/common/responsive';

const logoutImg = require('./../../../assets/images/settings/blue_logout.png');

const LogOutConfirm = ({onCancel, onConfirm}) => {
  return (
    <View style={styles.container}>
      <Image source={logoutImg} />
      <Text style={styles.text}>Are you sure want to logout?</Text>
      <View style={styles.buttonView}>
        <TouchableOpacity style={styles.cancelButton} onPress={onCancel}>
          <Text style={styles.cancelText}>Cancel</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.confirmButton} onPress={onConfirm}>
          <Text style={styles.confirmText}>Yes, Logout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LogOutConfirm;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingTop: 10,
  },
  text: {
    color: softGray,
    fontSize: 16,
    fontWeight: '500',
    marginTop: 30,
  },
  buttonView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 30,
  },
  cancelButton: {
    borderWidth: 1,
    borderColor: primaryMain,
    borderRadius: 100,
    padding: 10,
    textAlign: 'center',
    marginRight: 10,
    width: 170,
  },
  cancelText: {
    color: primaryMain,
    fontSize: 18,
    fontWeight: '500',
    textAlign: 'center',
  },
  confirmButton: {
    borderWidth: 1,
    backgroundColor: primaryMain,
    borderColor: primaryMain,
    borderRadius: 100,
    padding: 10,
    textAlign: 'center',
    marginLeft: 10,
    width: 170,
  },
  confirmText: {
    color: white,
    fontSize: 18,
    fontWeight: '500',
    textAlign: 'center',
  },
});
