import React from 'react';

import {View, StyleSheet, ScrollView, Text} from 'react-native';
import TopTitle from '../components/TopTitle';
import {primaryMain, white} from '../ui/common/colors';

import {deviceHeight} from '../ui/common/responsive';
import TaskRoomBottomMenu from '../components/TaskRoomBottomMenu';
import LogItem from '../components/LogItem';

const ActivityLog = ({navigation}) => {
  return (
    <View style={styles.container}>
      <TopTitle title={'Activity Log'} prevPath={'TransactionRoom'} />
      <ScrollView>
        <View style={styles.box}>
          <Text style={styles.logText}>Jan 10, 2023</Text>
          <LogItem />
          <LogItem />
          <LogItem />
          <Text style={styles.logText}>Jan 8, 2023</Text>
          <LogItem />
          <LogItem />
          <LogItem />
        </View>
      </ScrollView>
      <TaskRoomBottomMenu />
    </View>
  );
};

export default ActivityLog;

const styles = StyleSheet.create({
  container: {
    height: deviceHeight,
    backgroundColor: white,
  },
  box: {
    paddingRight: 20,
    paddingLeft: 20,
  },
  logText: {
    color: primaryMain,
    fontSize: 18,
    fontWeight: '700',
    marginTop: 20,
  },
});
