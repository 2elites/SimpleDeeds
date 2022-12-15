import React from 'react';
import {StyleSheet, Image, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import BottomMenuLayout from '../layout/BottomMenuLayout';

const item1 = require('./../../../assets/images/item1.png');
const item2 = require('./../../../assets/images/item2.png');

const TransactionRoomBottomMenu = () => {
  const navigation = useNavigation();

  return (
    <BottomMenuLayout>
      <TouchableOpacity onPress={() => navigation.navigate('SessionChats')}>
        <Image source={item1} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('TaskList')}>
        <Image source={item2} />
      </TouchableOpacity>
    </BottomMenuLayout>
  );
};

export default TransactionRoomBottomMenu;

const styles = StyleSheet.create({});
