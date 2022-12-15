import React from 'react';

import {View, StyleSheet, ScrollView} from 'react-native';
import TopTitle from '../../components/TopTitle';
import {white} from '../../ui/common/colors';

import {deviceHeight} from '../../ui/common/responsive';
import TaskSubMenu from '../../components/TaskSubMenu';
import BottomAddBtn from '../../components/BottomAddBtn';
import TaskRoomBottomMenu from '../../components/TaskRoomBottomMenu';
import TaskItem from '../../components/TaskItem';

const Tasks = () => {
  return (
    <View style={styles.container}>
      <TopTitle
        title={'Tasks'}
        prevPath={'TransactionRoom'}
        closePath="SignUp"
      />
      <TaskSubMenu selectedItem={'Tasks'} />
      <ScrollView
        style={{
          backgroundColor: white,
        }}>
        <View style={styles.box}>
          <TaskItem />
          <TaskItem />
          <TaskItem />
        </View>
      </ScrollView>
      <BottomAddBtn clickPath={''} />
      <TaskRoomBottomMenu />
    </View>
  );
};

export default Tasks;

const styles = StyleSheet.create({
  container: {
    height: deviceHeight,
  },
  box: {
    paddingLeft: 20,
    paddingRight: 20,
    marginTop: 20,
  },
});
