import React from 'react';
import {TouchableOpacity, View, Text, Image, StyleSheet} from 'react-native';

import {color17, color25, color36, gray1} from '../../ui/common/colors';
import {useNavigation} from '@react-navigation/native';

const fileImg = require('./../../../assets/images/file.png');

const FileItem = ({row}) => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.leftView}>
        <Image source={fileImg} />
        <View style={styles.textView}>
          <Text style={styles.text}>{row.name}</Text>
          <Text style={styles.fileSize}>{row.fileSize}</Text>
        </View>
      </View>
      <View>
        <Text style={styles.date}>01/10/2023</Text>
      </View>
    </View>
  );
};

export default FileItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    paddingTop: 15,
    paddingBottom: 15,
    borderBottomWidth: 1,
    borderColor: color17,
  },
  leftView: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  textView: {
    marginLeft: 20,
  },
  text: {
    color: color25,
    fontSize: 16,
    fontWeight: '500',
    lineHeight: 24,
  },
  fileSize: {
    color: gray1,
    fintSize: 14,
    fontWeight: '500',
    lineHeight: 20,
  },
  date: {
    color: color36,
    fontSize: 14,
    fontWeight: '500',
    lineHeight: 20,
  },
});
