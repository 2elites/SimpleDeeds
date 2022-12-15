import React from 'react';
import {View, Image, StyleSheet} from 'react-native';
import {color23, color27, color31} from '../ui/common/colors';

const bell = require('./../../assets/images/bell.png');
const warn = require('./../../assets/images/warn.png');
const success = require('./../../assets/images/success.png');

const NotifyIcon = ({type}) => {
  return (
    <View>
      {type === 'bell' ? (
        <View style={[styles.bellView, styles.view]}>
          <Image source={bell} />
        </View>
      ) : null}
      {type === 'warn' ? (
        <View style={[styles.warnView, styles.view]}>
          <Image source={warn} />
        </View>
      ) : null}
      {type === 'success' ? (
        <View style={[styles.successView, styles.view]}>
          <Image source={success} />
        </View>
      ) : null}
    </View>
  );
};

export default NotifyIcon;

const styles = StyleSheet.create({
  view: {
    height: 48,
    width: 48,
    borderRadius: 100,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bellView: {
    backgroundColor: color23,
  },
  warnView: {
    backgroundColor: color27,
  },
  successView: {
    backgroundColor: color31,
  },
});
