import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import BottomMenuLayout from '../layout/BottomMenuLayout';
import {
  color18,
  color23,
  color24,
  color25,
  color26,
  softGray,
} from '../../ui/common/colors';

const bell = require('./../../../assets/images/bell.png');

const TransactionItem = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.box}>
      <View style={styles.bellView}>
        <Image source={bell} />
      </View>
      <View>
        <Text style={styles.label}>File Number</Text>
        <Text style={styles.text}>#23123213234234</Text>
        <Text style={[styles.label, {marginTop: 10}]}>Address</Text>
        <Text style={styles.text}>#(830) 202-6100</Text>
        <Text style={styles.text}>1276 County Rd #4206</Text>
        <Text style={styles.text}>Knox City, Texas(TX), 79529</Text>
      </View>
      <View style={styles.percentView}>
        <Text style={styles.percentText}>00%</Text>
      </View>
    </View>
  );
};

export default TransactionItem;

const styles = StyleSheet.create({
  box: {
    borderRadius: 4,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    borderTopWidth: 8,
    borderColor: color24,
    marginBottom: 15,
    elevation: 4,
    shadowColor: '#52006A',
  },
  bellView: {
    borderRadius: 100,
    backgroundColor: color23,
    padding: 20,
    marginRight: 15,
  },
  label: {
    color: color18,
    fontSize: 14,
    fontWeight: '700',
    lineHeight: 20,
  },
  text: {
    color: color25,
    fontSize: 12,
    fontWeight: '400',
    lineHeight: 18,
  },
  percentView: {
    position: 'absolute',
    right: 20,
  },
  percentText: {
    borderColor: color26,
    borderWidth: 1,
    borderRadius: 100,
    padding: 10,
    paddingLeft: 20,
    paddingRight: 20,
    color: color26,
    fontSize: 14,
    lineHeight: 20,
    fontWeight: '500',
  },
});
