import React, {useEffect, useState} from 'react';
import DatePicker from 'react-native-date-picker';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';

import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
  Button,
} from 'react-native';
import TopTitle from '../components/TopTitle';
import {
  black,
  black1,
  color20,
  color21,
  color22,
  gray1,
  grayBlack,
  primaryMain,
  white,
} from '../ui/common/colors';

import {ProgressSteps, ProgressStep} from 'react-native-progress-steps';

import {deviceHeight} from '../ui/common/responsive';
import UnlockifyNav from '../components/UnlocakifyNav';
import BottomAddBtn from '../components/BottomAddBtn';
import TaskRoomBottomMenu from '../components/TaskRoomBottomMenu';
import PrivateSession from '../components/chatroom/PrivateSession';
import ClosingSession from '../components/chatroom/ClosingSession';

const notiImg = require('./../../assets/images/nit.png');
const ChatRoom = ({navigation}) => {
  const buttonTextStyle = {display: 'none'};

  return (
    <View style={styles.container}>
      <UnlockifyNav title="Simple Deeds" />
      <ScrollView
        style={{
          backgroundColor: white,
        }}>
        <View style={styles.box}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text
              style={{
                fontSize: 18,
                color: grayBlack,
                fontSize: 18,
                fontWeight: '700',
              }}>
              Status{' '}
            </Text>
            <Image source={notiImg} />
          </View>
          <View style={styles.progressView}>
            <ProgressSteps
              activeStep={2}
              labelColor="#050942"
              activeLabelColor="#FBBF24"
              activeStepIconBorderColor="#FBBF24"
              //   disabledStepIconColor="transparent"
              completedLabelColor="#050942"
              activeStepNumColor="#FBBF24">
              <ProgressStep
                label="Step 1"
                nextBtnTextStyle={buttonTextStyle}
                previousBtnTextStyle={buttonTextStyle}></ProgressStep>
              <ProgressStep
                label="Step 2"
                nextBtnTextStyle={buttonTextStyle}
                previousBtnTextStyle={buttonTextStyle}></ProgressStep>
              <ProgressStep
                label="Pending"
                nextBtnTextStyle={buttonTextStyle}
                previousBtnTextStyle={buttonTextStyle}></ProgressStep>
              <ProgressStep
                label="Step 4"
                nextBtnTextStyle={buttonTextStyle}
                previousBtnTextStyle={buttonTextStyle}></ProgressStep>
              <ProgressStep
                label="Step 5"
                nextBtnTextStyle={buttonTextStyle}
                previousBtnTextStyle={buttonTextStyle}></ProgressStep>
            </ProgressSteps>
          </View>
          <PrivateSession />
          <ClosingSession />
        </View>
      </ScrollView>
      <BottomAddBtn clickPath={'AddContact'} />
      <TaskRoomBottomMenu />
    </View>
  );
};

export default ChatRoom;

const styles = StyleSheet.create({
  container: {
    height: deviceHeight,
  },
  box: {
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 20,
  },
  progressView: {
    flex: 1,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.25,
    shadowRadius: 1,
    elevation: 1,
    height: 120,
    marginTop: 4,
    borderRadius: 20,
  },
});
