import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {color17, primaryMain, white} from '../../ui/common/colors';
import {useNavigation} from '@react-navigation/native';
import {deviceWidth} from '../../ui/common/responsive';

const BottomMenuLayout = ({children}) => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.box}>{children}</View>
    </View>
  );
};

export default BottomMenuLayout;

const styles = StyleSheet.create({
  container: {
    backgroundColor: color17,
    width: deviceWidth,
    // position: 'absolute',
    // bottom: 25,
    // right: 0,
  },
  box: {
    width: deviceWidth,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 80,
    paddingLeft: 20,
    paddingRight: 20,
    marginBottom: 25,
  },
});
