import {StyleSheet} from 'react-native';
import {primaryMain, white} from './colors';
import {deviceHeight} from './responsive';

const g_styles = StyleSheet.create({
  container: {
    height: deviceHeight,
    backgroundColor: white,
  },
  box: {
    paddingLeft: 20,
    paddingRight: 20,
  },
  itemsCenter: {alignItems: 'center'},
  mt_20: {marginTop: 20},
  submitText: {
    textAlign: 'center',
    color: white,
    fontWeight: '700',
    fontSize: 18,
  },
  submitBtn: {
    padding: 20,
    backgroundColor: primaryMain,
    borderRadius: 32,
  },
  submitView: {padding: 20, marginBottom: 30, marginTop: 20},
});

export default g_styles;
