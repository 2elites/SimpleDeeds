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
  color19,
  color20,
  color21,
  color22,
  color33,
  gray1,
  primaryMain,
  white,
} from '../ui/common/colors';

import {deviceHeight} from '../ui/common/responsive';

const calendar = require('./../../assets/images/calendar.png');
const timeImg = require('./../../assets/images/time.png');

const SetOptionPeriodDate = ({navigation}) => {
  const [startDate, setStartDate] = useState(new Date());
  const [openStart, setOpenStart] = useState(false);
  const [endDate, setEndDate] = useState(new Date());
  const [openEnd, setOpenEnd] = useState(false);
  const [deadline, setDeadline] = useState(new Date());
  const [openDeadline, setOpenDeadline] = useState(false);

  const [markedDates, setMarketdDates] = useState({});

  const selectedStyle = {
    selected: true,
    selectedColor: color21,
  };

  const dotStyle = {marked: true, dotColor: color19, activeOpacity: 0};

  const commonStyle = {
    customStyles: {
      container: {
        backgroundColor: color22,
        borderRadius: 0,
      },
      text: {
        color: color33,
        fontSize: 14,
        lineHeight: 20,
      },
    },
  };

  useEffect(() => {
    let temp = markedDates;
    temp['2022-11-05'] = dotStyle;
    temp['2022-11-06'] = dotStyle;
    temp['2022-11-21'] = selectedStyle;
    temp['2022-11-22'] = commonStyle;
    temp['2022-11-23'] = commonStyle;
    temp['2022-11-24'] = commonStyle;
    temp['2022-11-25'] = selectedStyle;
    setMarketdDates(temp);
  }, [startDate, endDate]);

  return (
    <View style={styles.container}>
      <ScrollView
        style={{
          backgroundColor: white,
        }}>
        <TopTitle
          title={'Set Option Period Date'}
          prevPath={'ConfirmInformation'}
        />
        <View style={styles.box}>
          <Text style={styles.title}>Option Period</Text>
          <View style={{flexDirection: 'row'}}>
            <View style={{width: '50%', paddingRight: 10}}>
              <Text style={styles.label}>Starting Date</Text>
              <TouchableOpacity
                style={styles.inputBox}
                onPress={() => setOpenStart(true)}>
                <Image source={calendar} />
                <Text style={styles.inputText}>
                  {startDate.getDate() +
                    '/' +
                    startDate.getMonth() +
                    '/' +
                    startDate.getFullYear()}
                </Text>
              </TouchableOpacity>
              <DatePicker
                modal
                open={openStart}
                date={startDate}
                mode="date"
                onConfirm={data => {
                  setOpenStart(false);
                  setStartDate(data);
                }}
                onCancel={() => {
                  setOpenStart(false);
                }}
              />
            </View>
            <View style={{width: '50%', paddingLeft: 10}}>
              <Text style={styles.label}>End Date</Text>
              <TouchableOpacity
                style={styles.inputBox}
                onPress={() => setOpenEnd(true)}>
                <Image source={calendar} />
                <Text style={styles.inputText}>
                  {endDate.getDate() +
                    '/' +
                    endDate.getMonth() +
                    '/' +
                    endDate.getFullYear()}
                </Text>
              </TouchableOpacity>
              <DatePicker
                modal
                open={openEnd}
                date={endDate}
                mode="date"
                onConfirm={data => {
                  setOpenEnd(false);
                  setEndDate(data);
                }}
                onCancel={() => {
                  setOpenEnd(false);
                }}
              />
            </View>
          </View>
          <View style={{width: '50%', paddingRight: 10}}>
            <Text style={styles.label}>Deadline Hour</Text>
            <TouchableOpacity
              style={styles.inputBox}
              onPress={() => setOpenDeadline(true)}>
              <Image source={timeImg} />
              <Text style={styles.inputText}>
                {deadline.getHours() + ':' + deadline.getMinutes()}
              </Text>
            </TouchableOpacity>
            <DatePicker
              modal
              open={openDeadline}
              date={deadline}
              mode="time"
              onConfirm={data => {
                setOpenDeadline(false);
                setDeadline(data);
              }}
              onCancel={() => {
                setOpenDeadline(false);
              }}
            />
          </View>
          <View style={styles.calendarView}>
            <Calendar markingType={'custom'} markedDates={markedDates} />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default SetOptionPeriodDate;

const styles = StyleSheet.create({
  container: {
    height: deviceHeight,
  },
  title: {
    color: primaryMain,
    fontSize: 18,
    fontWeight: '700',
    lineHeight: 24,
  },
  box: {
    paddingLeft: 20,
    paddingRight: 20,
  },
  label: {
    color: gray1,
    fontSize: 12,
    fontWeight: '500',
    lineHeight: 20,
    marginTop: 15,
  },
  inputBox: {
    flex: 1,
    flexDirection: 'row',
    borderColor: color20,
    borderWidth: 1,
    borderRadius: 100,
    alignItems: 'center',
    paddingLeft: 20,
    marginTop: 5,
  },
  inputText: {
    fontSize: 14,
    fontWeight: '500',
    lineHeight: 20,
    padding: 10,
    color: black1,
  },
  calendarView: {
    marginTop: 30,
    borderColor: color20,
    borderWidth: 1,
    borderRadius: 10,
  },
});
