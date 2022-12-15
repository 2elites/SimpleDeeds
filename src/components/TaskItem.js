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

const avatar5 = require('./../../assets/images/users/avatar5.png');

const TaskItem = () => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={{backgroundColor: white}}
      onPress={() => navigation.navigate('Tasks')}>
      <View style={styles.itemBox}>
        <View style={styles.taskView}>
          <Image source={avatar5} style={styles.avatar} />
          <View>
            <Text style={styles.taskName}>Send Legal Document</Text>
            <Text>End Date</Text>
            <Text>22/01/23</Text>
          </View>
        </View>

        <NotifyIcon type={'warn'} />
      </View>
    </TouchableOpacity>
  );
};

export default TaskItem;

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
  taskView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    height: 48,
    width: 48,
    borderRadius: 100,
    marginRight: 10,
  },
  taskName: {
    color: primaryMain,
    fontWeight: '700',
    fontSize: 16,
    lineHeight: 24,
  },
});
