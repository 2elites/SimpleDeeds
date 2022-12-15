import React from 'react';

import {View, StyleSheet, ScrollView} from 'react-native';
import TopTitle from '../../components/TopTitle';
import {white} from '../../ui/common/colors';

import {deviceHeight} from '../../ui/common/responsive';
import TaskSubMenu from '../../components/TaskSubMenu';
import TaskRoomBottomMenu from '../../components/TaskRoomBottomMenu';
import ChatInput from '../../components/chat/ChatInput';
import MsgItem from '../../components/chat/MsgItem';

const ChatBox = () => {
  return (
    <View style={styles.container}>
      <TopTitle
        title={'Chat'}
        prevPath={'TransactionRoom'}
        closePath="SignUp"
      />
      <TaskSubMenu selectedItem={'Chat'} />
      <ScrollView>
        <View style={styles.box}>
          <MsgItem type="out" />
          <MsgItem type="in" />
        </View>
      </ScrollView>
      <ChatInput />
      <TaskRoomBottomMenu />
    </View>
  );
};

export default ChatBox;

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
