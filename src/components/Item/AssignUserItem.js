import React, {useEffect, useState} from 'react';
import {Text, View, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {
  color17,
  color18,
  color27,
  color32,
  color33,
  grayBlack,
  primaryMain,
  white,
} from '../../ui/common/colors';
import NotifyIcon from './../NotifyIcon';

const avatar5 = require('./../../../assets/images/users/avatar5.png');

const AssignUserItem = ({isSelected = false}) => {
  return (
    <TouchableOpacity style={{backgroundColor: white}} onPress={() => {}}>
      <View style={styles.itemBox}>
        <View style={styles.taskView}>
          <Image source={avatar5} style={styles.avatar} />
          <View>
            <Text style={styles.type}>Seller’s Agent</Text>
            <Text style={styles.name}>Rico Smith</Text>
            <Text style={styles.email}>rico@nutechadvisors.com</Text>
          </View>
        </View>
        {isSelected ? <NotifyIcon type={'success'} /> : null}
      </View>
    </TouchableOpacity>
  );
};

export default AssignUserItem;

const styles = StyleSheet.create({
  itemBox: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 20,
    elevation: 3,
    borderRadius: 8,
    marginTop: 10,
    marginBottom: 10,
  },
  taskView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    height: 48,
    width: 48,
    borderRadius: 100,
    marginRight: 15,
  },
  type: {
    color: primaryMain,
    fontSize: 14,
    fontWeight: '700',
    marginBottom: 0,
  },
  name: {
    color: color33,
    fontSize: 20,
    fontWeight: '600',
    fontFamily: 'Inter',
    lineHeight: 32,
  },
  email: {
    color: color32,
    fontSize: 14,
    fontWeight: '400',
    fontFamily: 'SF Pro Display',
    lineHeight: 20,
  },
});
