import React, {useEffect, useState} from 'react';
import {Text, View, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {
  black1,
  color17,
  color18,
  color25,
  color27,
  color32,
  color33,
  grayBlack,
  primaryMain,
  secondaryMain,
  white,
} from '../../ui/common/colors';

const fileItemImg = require('./../../../assets/images/fileItem.png');

const FileItem = () => {
  return (
    <TouchableOpacity style={{backgroundColor: white}} onPress={() => {}}>
      <View style={styles.itemBox}>
        <View style={styles.iconView}>
          <Image source={fileItemImg} />
        </View>
        <View>
          <Text style={styles.name}>Contract_4234.pdf</Text>
          <Text style={styles.type}>Uploaded Date</Text>
          <Text style={styles.date}>22/01/23</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default FileItem;

const styles = StyleSheet.create({
  itemBox: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 20,
    borderRadius: 8,
    marginTop: 10,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 2,
  },
  iconView: {
    backgroundColor: secondaryMain,
    borderRadius: 100,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 48,
    width: 48,
    marginRight: 20,
  },
  avatar: {
    height: 48,
    width: 48,
    borderRadius: 100,
    marginRight: 15,
  },
  name: {
    color: primaryMain,
    fontSize: 16,
    fontWeight: '700',
    lineHeight: 24,
  },
  type: {
    color: black1,
    fontSize: 14,
    fontWeight: '400',
    fontFamily: 'Inter',
    lineHeight: 20,
  },
  email: {
    color: color25,
    fontSize: 12,
    fontWeight: '500',
    fontFamily: 'SF Pro Display',
    lineHeight: 20,
  },
});
