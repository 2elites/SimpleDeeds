import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {color13, grayBlack, primaryMain, softGray} from '../ui/common/colors';
import {useNavigation} from '@react-navigation/native';

const link = require('./../../assets/images/link.png');

const TransactionInfoItem = ({icon, title, content, linkPath}) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={styles.submitBtn}
      onPress={() => navigation.navigate(linkPath)}>
      <View style={styles.view}>
        <View style={styles.iconView}>
          <Image source={icon} />
        </View>
        <View>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.content}>{content}</Text>
        </View>
        <View style={styles.link}>
          <Image source={link} />
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default TransactionInfoItem;

const styles = StyleSheet.create({
  view: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 8,
    padding: 20,
    elevation: 2,
    shadowOpacity: 0.2,
    shadowColor: softGray,
    marginTop: 10,
  },
  iconView: {
    backgroundColor: color13,
    borderRadius: 100,
    height: 50,
    width: 50,
    marginRight: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: primaryMain,
    fontSize: 16,
    fontWeight: '700',
    marginBottom: 5,
  },
  content: {
    color: grayBlack,
    fontSize: 14,
    fontWeight: '400',
    maxWidth: 300,
  },
  link: {
    position: 'absolute',
    right: 20,
  },
});
