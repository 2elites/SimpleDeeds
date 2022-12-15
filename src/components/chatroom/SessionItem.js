import React, {useEffect, useState} from 'react';
import {Text, View, Image, StyleSheet, TouchableOpacity} from 'react-native';
import * as Progress from 'react-native-progress';
import {
  color17,
  color18,
  color37,
  color38,
  grayBlack,
  primaryMain,
  white,
} from '../../ui/common/colors';

const notImage = require('./../../../assets/images/not.png');

const keyImg = require('./../../../assets/images/key.png');

const avatar1 = require('./../../../assets/images/users/avatar1.png');
const avatar2 = require('./../../../assets/images/users/avatar2.png');
const avatar3 = require('./../../../assets/images/users/avatar3.png');
const avatar4 = require('./../../../assets/images/users/avatar4.png');
const avatar5 = require('./../../../assets/images/users/avatar5.png');

const SessionItem = ({row}) => {
  return (
    <View style={styles.itemBox}>
      <View style={[styles.header, {backgroundColor: row.color}]}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <Text style={styles.title}>{row.title}</Text>
          <Image source={notImage} />
        </View>
        <View style={{flexDirection: 'row'}}>
          <Image srouce={keyImg} />
          <Text style={{color: white, fontSize: 12, fontWeight: '500'}}>
            Open
          </Text>
        </View>
      </View>
      <View style={styles.body}>
        <Text style={{color: row.color, fontSize: 14, fontWeight: '500'}}>
          Session members
        </Text>
        <View style={styles.usersView}>
          <Image source={avatar1} style={styles.avatar} />
          <Image source={avatar2} style={styles.avatar} />
          <Image source={avatar3} style={styles.avatar} />
          <Image source={avatar4} style={styles.avatar} />
          <Image source={avatar5} style={styles.avatar} />
        </View>
        <View>
          <Text style={styles.progressText}>Progress</Text>
          <Progress.Bar
            progress={0.8}
            borderWidth={0}
            unfilledColor={'#F5F5F5'}
            color={row.color}
            width={260}
          />
          <Text
            style={{
              fontSize: 12,
              lineHeight: 20,
              fontWeight: '500',
              marginTop: 5,
            }}>
            Status:<Text style={{color: '#166534'}}> Good</Text>
          </Text>
        </View>
      </View>
    </View>
  );
};

export default SessionItem;

const styles = StyleSheet.create({
  itemBox: {
    elevation: 2,
    borderRadius: 15,
    overflow: 'scroll',
    alignItems: 'center',
    marginRight: 20,
    width: 300,
    marginBottom: 10,
  },
  header: {padding: 20, width: '100%'},
  title: {
    color: white,
    fontSize: 16,
    fontWeight: '700',
  },
  body: {
    padding: 20,
    width: '100%',
  },
  usersView: {
    flexDirection: 'row',
    marginTop: 10,
  },
  avatar: {
    height: 24,
    width: 24,
    borderRadius: 100,
    marginRight: -8,
  },
  progressText: {
    color: color38,
    marginTop: 10,
    fontSize: 10,
    lineHeight: 15,
    fontWeight: '500',
    marginBottom: 5,
  },
});
