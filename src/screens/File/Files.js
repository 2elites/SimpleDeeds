import React from 'react';

import {View, StyleSheet, ScrollView} from 'react-native';
import TopTitle from '../../components/TopTitle';
import {white} from '../../ui/common/colors';

import {deviceHeight} from '../../ui/common/responsive';
import TaskSubMenu from '../../components/TaskSubMenu';
import BottomAddBtn from '../../components/BottomAddBtn';
import TaskRoomBottomMenu from '../../components/TaskRoomBottomMenu';
import FileItem from '../../components/Item/FileItem';

const Files = () => {
  return (
    <View style={styles.container}>
      <TopTitle
        title={'Files'}
        prevPath={'TransactionRoom'}
        closePath="SignUp"
      />
      <TaskSubMenu selectedItem={'Files'} />
      <ScrollView>
        <View style={styles.box}>
          <FileItem />
          <FileItem />
          <FileItem />
        </View>
      </ScrollView>
      <BottomAddBtn clickPath={'Files'} />
      <TaskRoomBottomMenu />
    </View>
  );
};

export default Files;

const styles = StyleSheet.create({
  container: {
    height: deviceHeight,
    backgroundColor: white,
  },
  box: {
    paddingRight: 20,
    paddingLeft: 20,
    marginTop: 20,
  },
});
