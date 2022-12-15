import React, {useEffect, useState} from 'react';
import {Text, View, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {
  color17,
  color18,
  color27,
  grayBlack,
  primaryMain,
  white,
} from '../ui/common/colors';
import NotifyIcon from './NotifyIcon';
import {useNavigation} from '@react-navigation/native';

const avatar1 = require('./../../assets/images/users/avatar1.png');
const avatar2 = require('./../../assets/images/users/avatar2.png');
const avatar3 = require('./../../assets/images/users/avatar3.png');
const avatar4 = require('./../../assets/images/users/avatar4.png');
const avatar5 = require('./../../assets/images/users/avatar5.png');

const ChatItem = ({}) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={{backgroundColor: white}}
      onPress={() => navigation.navigate('ChatBox')}>
      <View style={styles.itemBox}>
        <View>
          <Text style={styles.sessionName}>Seller’s Session #1202</Text>
          <View style={styles.usersView}>
            <Image source={avatar1} style={styles.avatar} />
            <Image source={avatar2} style={styles.avatar} />
            <Image source={avatar3} style={styles.avatar} />
            <Image source={avatar4} style={styles.avatar} />
            <Image source={avatar5} style={styles.avatar} />
          </View>
        </View>
        <NotifyIcon type={'warn'} />
      </View>
    </TouchableOpacity>
  );
};

export default ChatItem;

const styles = StyleSheet.create({
  itemBox: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 20,
    elevation: 3,
    borderRadius: 8,
    marginBottom: 20,
  },
  sessionName: {
    color: primaryMain,
    fontWeight: '700',
    fontSize: 16,
    lineHeight: 24,
  },
  usersView: {
    flexDirection: 'row',
    marginTop: 10,
  },
  avatar: {
    height: 24,
    width: 24,
    borderRadius: 100,
    marginRight: -8,
  },
});
