import React from 'react';
import {Text, View, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {color28, grayBlack} from '../../ui/common/colors';
import {deviceWidth} from '../../ui/common/responsive';
import SessionItem from './SessionItem';

const notiImg = require('./../../../assets/images/nit.png');

const PrivateSession = () => {
  const sessions = [
    {color: '#4A7EE2', title: 'Seller’s Session'},
    {color: '#E24A4A', title: 'Main Session'},
    {color: '#4A7EE2', title: 'Seller’s Session'},
    {color: '#E24A4A', title: 'Main Session'},
  ];

  return (
    <View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginTop: 25,
          marginBottom: 20,
        }}>
        <Text
          style={{
            fontSize: 18,
            color: grayBlack,
            fontSize: 18,
            fontWeight: '700',
          }}>
          Private Sessions{' '}
        </Text>
        <Image source={notiImg} />
      </View>
      <View style={styles.container}>
        {sessions.map((row, key) => {
          return <SessionItem key={key} row={row} />;
        })}
      </View>
    </View>
  );
};

export default PrivateSession;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: deviceWidth,
    overflow: 'scroll',
  },
});
