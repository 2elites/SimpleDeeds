import React from 'react';
import {StyleSheet, Image, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import BottomMenuLayout from './layout/BottomMenuLayout';

const item3 = require('./../../assets/images/item3.png');
const item4 = require('./../../assets/images/item4.png');

const TaskRoomBottomMenu = () => {
  const navigation = useNavigation();

  return (
    <BottomMenuLayout>
      <TouchableOpacity onPress={() => navigation.navigate('SessionChats')}>
        <Image source={item3} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('TaskList')}>
        <Image source={item4} />
      </TouchableOpacity>
    </BottomMenuLayout>
  );
};

export default TaskRoomBottomMenu;

const styles = StyleSheet.create({});
