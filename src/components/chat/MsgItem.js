import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import {color34, color35, white} from '../../ui/common/colors';
import UserAvatar from './UserAvatar';

const MsgItem = ({type = 'in'}) => {
  return (
    <View>
      {type === 'out' ? (
        <View style={styles.inContainer}>
          <UserAvatar online="on" />
          <View style={styles.inChatContent}>
            <Text style={styles.name}>
              Rico Smith <Text style={styles.date}> 27 Jan 11:05 a.m.</Text>
            </Text>
            <Text style={styles.content}>
              Please send me the documents as soon as you have them.
            </Text>
          </View>
        </View>
      ) : (
        <View style={styles.outContainer}>
          <View style={styles.outChatContent}>
            <Text style={styles.name}>
              Lorenzo Garza <Text style={styles.date}> 27 Jan 11:07 a.m. </Text>
            </Text>
            <Text style={styles.content}>I’m uploading them right now...</Text>
          </View>
          <UserAvatar online="on" />
        </View>
      )}
    </View>
  );
};

export default MsgItem;

const styles = StyleSheet.create({
  inContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginBottom: 20,
  },
  inChatContent: {
    backgroundColor: color34,
    padding: 20,
    marginRight: 50,
    marginLeft: 15,
    borderTopRightRadius: 22,
    borderBottomRightRadius: 22,
    borderBottomLeftRadius: 22,
  },
  outContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginBottom: 20,
  },
  outChatContent: {
    backgroundColor: color35,
    padding: 20,
    marginRight: 15,
    marginLeft: 50,
    borderTopLeftRadius: 22,
    borderBottomRightRadius: 22,
    borderBottomLeftRadius: 22,
  },
  name: {
    color: white,
    fontSize: 12,
    fontWeight: '700',
    lineHeight: 24,
  },
  date: {
    fontWeight: '500',
  },
  content: {
    color: white,
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 20,
  },
});
