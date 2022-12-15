import React, {useEffect, useState} from 'react';
import {Text, View, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {black1, color13, color25, primaryMain} from '../ui/common/colors';

const fileItemImg = require('./../../assets/images/fileItem.png');
const rightArrowImg = require('./../../assets/images/rightArrow.png');

const LogItem = () => {
  return (
    <View style={styles.box}>
      <View style={styles.logItem}>
        <View style={styles.iconView}>
          <Image source={fileItemImg} />
        </View>
        <View>
          <Text style={styles.logTitle}>Contract_4234.pdf</Text>
          <Text style={styles.logDescription}>Uploaded Date</Text>
          <Text style={styles.logDate}>22/01/23</Text>
        </View>
        <Image source={rightArrowImg} style={styles.rightArrow} />
      </View>
    </View>
  );
};

export default LogItem;

const styles = StyleSheet.create({
  logItem: {
    borderLeftWidth: 8,
    borderColor: primaryMain,
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 10,
    borderRadius: 8,
    elevation: 2,
  },
  iconView: {
    backgroundColor: color13,
    borderRadius: 100,
    height: 48,
    width: 48,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 20,
  },
  logTitle: {
    color: primaryMain,
    fontSize: 16,
    fontWeight: '700',
    lineHeight: 24,
  },
  logDescription: {
    color: black1,
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 20,
  },
  logDate: {
    color: color25,
    fontSize: 12,
    fontWeight: '500',
    lineHeight: 20,
  },
  rightArrow: {
    position: 'absolute',
    right: 10,
  },
});
