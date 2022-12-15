import React from 'react';
import {Text, View, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {color28, grayBlack} from '../../ui/common/colors';
import {deviceWidth} from '../../ui/common/responsive';
import ClosingSessionItem from './ClosingSessionItem';
import SessionItem from './SessionItem';

const notiImg = require('./../../../assets/images/nit.png');

const ClosingSession = () => {
  const sessions = [{color: '#70818F', title: 'Wire’s Session'}];

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
          Closing Session{' '}
        </Text>
        <Image source={notiImg} />
      </View>
      <View style={styles.container}>
        {sessions.map((row, key) => {
          return <ClosingSessionItem key={key} row={row} />;
        })}
      </View>
    </View>
  );
};

export default ClosingSession;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: deviceWidth,
    overflow: 'scroll',
  },
});
