import React from 'react';
import {View, Text, Image, TextInput, StyleSheet} from 'react-native';

import {useNavigation} from '@react-navigation/native';
import {color26, primaryMain} from '../../ui/common/colors';
import {deviceWidth} from '../../ui/common/responsive';

const userImg1 = require('./../../../assets/images//users/avatar1.png');

const UserAvatar = ({online = 'on'}) => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Image source={userImg1} style={styles.avatar} />
      <View style={styles.onLine}></View>
    </View>
  );
};

export default UserAvatar;

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    height: 40,
    width: 40,
  },
  avatar: {
    height: 40,
    width: 40,
  },
  onLine: {
    backgroundColor: color26,
    position: 'absolute',
    right: 0,
    bottom: 0,
    height: 10,
    width: 10,
    borderRadius: 100,
  },
});
