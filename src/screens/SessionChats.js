import React from 'react';

import {View, StyleSheet, ScrollView} from 'react-native';
import TopTitle from '../components/TopTitle';
import {white} from '../ui/common/colors';

import {deviceHeight} from '../ui/common/responsive';
import SearchInput from '../components/SearchInput';
import TransactionRoomBottomMenu from '../components/Transaction/TransactionRoomBottomMenu';
import ChatItem from '../components/ChatItem';

const SessionChats = ({navigation}) => {
  return (
    <View style={styles.container}>
      <ScrollView
        style={{
          backgroundColor: white,
        }}>
        <TopTitle
          title={'Session Chats'}
          prevPath={'TransactionRoom'}
          isClose={false}
        />
        <View style={styles.searchView}>
          <SearchInput placeholder={'Search Chats'} />
        </View>
        <View style={styles.box}>
          <ChatItem />
          <ChatItem />
          <ChatItem />
          <ChatItem />
          <ChatItem />
          <ChatItem />
          <ChatItem />
        </View>
      </ScrollView>
      <TransactionRoomBottomMenu />
    </View>
  );
};

export default SessionChats;

const styles = StyleSheet.create({
  container: {
    height: deviceHeight,
  },
  box: {
    paddingLeft: 20,
    paddingRight: 20,
    marginTop: 20,
  },
  searchView: {
    paddingLeft: 20,
    paddingRight: 20,
  },
});
