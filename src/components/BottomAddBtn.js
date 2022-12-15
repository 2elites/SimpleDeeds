import React from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';
import {primaryMain, white} from '../ui/common/colors';
import {useNavigation} from '@react-navigation/native';

const BottomAddBtn = ({clickPath}) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={styles.view}
      onPress={() => navigation.navigate(clickPath)}>
      <Text style={styles.text}>+</Text>
    </TouchableOpacity>
  );
};

export default BottomAddBtn;

const styles = StyleSheet.create({
  view: {
    backgroundColor: primaryMain,
    height: 56,
    width: 56,
    position: 'absolute',
    borderRadius: 100,
    bottom: 130,
    right: 20,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: white,
    fontSize: 25,
  },
});
