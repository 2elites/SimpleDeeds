import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';

import {useNavigation} from '@react-navigation/native';
import {bigBlack, white} from '../ui/common/colors';

const leftArrow = require('./../../assets/images/left.png');

const TopTitle = ({title, prevPath, closePath, isClose = true}) => {
  const navigation = useNavigation();

  return (
    <View style={styles.view}>
      <TouchableOpacity onPress={() => navigation.navigate(prevPath)}>
        <Image source={leftArrow} style={styles.leftArrow} />
      </TouchableOpacity>
      <Text style={styles.title}>{title}</Text>
      {isClose ? (
        <TouchableOpacity onPress={() => navigation.navigate(closePath)}>
          <Text style={styles.closeBtn}>&#x2715;</Text>
        </TouchableOpacity>
      ) : (
        <Text> </Text>
      )}
    </View>
  );
};

export default TopTitle;

const styles = StyleSheet.create({
  view: {
    backgroundColor: white,
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  leftArrow: {
    fontWeight: '700',
    letter: 0.4,
    fontSize: 20,
    color: bigBlack,
  },
  title: {
    color: bigBlack,
    fontSize: 20,
    fontWeight: '700',
  },
  closeBtn: {
    color: bigBlack,
    fontSize: 16,
    fontWeight: '700',
  },
});
