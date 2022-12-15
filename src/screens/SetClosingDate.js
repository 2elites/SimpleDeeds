import React, {useEffect, useState} from 'react';
import DatePicker from 'react-native-date-picker';
import {Calendar} from 'react-native-calendars';

import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import TopTitle from '../components/TopTitle';
import {
  black1,
  color20,
  color21,
  color39,
  gray1,
  primaryMain,
  white,
} from '../ui/common/colors';

import {deviceHeight} from '../ui/common/responsive';

const calendar = require('./../../assets/images/calendar.png');
const timeImg = require('./../../assets/images/time.png');

const SetClosingDate = ({navigation}) => {
  const [endDate, setEndDate] = useState(new Date());
  const [openEnd, setOpenEnd] = useState(false);
  const [deadline, setDeadline] = useState(new Date());
  const [openDeadline, setOpenDeadline] = useState(false);

  const [markedDates, setMarketdDates] = useState({});

  useEffect(() => {
    console.log('Changed Enddate', endDate);
    if (endDate) {
      setMarketdDates({
        '2022-11-24': {
          selected: true,
          selectedColor: color21,
        },
      });
    }
  }, [endDate]);

  return (
    <View style={styles.container}>
      <ScrollView
        style={{
          backgroundColor: white,
        }}>
        <TopTitle
          title={'Set Closing Date'}
          prevPath={'ConfirmInformation'}
          closePath="SignUp"
        />
        <View style={styles.box}>
          <Text style={styles.title}>Closing Date</Text>
          <View style={{flexDirection: 'row'}}>
            <View style={{width: '50%', paddingRight: 10}}>
              <Text style={styles.label}>End Date</Text>
              <TouchableOpacity
                style={styles.inputBox}
                onPress={() => setOpenEnd(true)}>
                <Image source={calendar} />
                <Text style={styles.inputText}>
                  {endDate.getDate() +
                    '/' +
                    (endDate.getMonth() + 1) +
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
            <Calendar
              markedDates={markedDates}
              renderArrow={direction =>
                direction === 'left' ? (
                  <Text style={styles.arrowIcon}>&lsaquo;</Text>
                ) : (
                  <Text style={styles.arrowIcon}>&rsaquo;</Text>
                )
              }
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default SetClosingDate;

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
  arrowIcon: {
    color: color39,
    fontSize: 20,
    fontWeight: '700',
    lineHeight: 20,
  },
});
