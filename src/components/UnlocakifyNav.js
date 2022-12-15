import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';

import {useNavigation} from '@react-navigation/native';
import {black1, white} from '../ui/common/colors';

const setting = require('./../../assets/images/setting.png');
const search = require('./../../assets/images/black_search.png');

const UnlockifyNav = ({title}) => {
  const navigation = useNavigation();

  return (
    <View style={styles.view}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.rightBlock}>
        <Image source={search} />

        <TouchableOpacity onPress={() => navigation.navigate('Settings')}>
          <Image source={setting} style={{marginLeft: 15}} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default UnlockifyNav;

const styles = StyleSheet.create({
  view: {
    backgroundColor: white,
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    color: black1,
    fontSize: 24,
    fontWeight: '700',
    lineHeight: 24,
  },
  rightBlock: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
