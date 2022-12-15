import React, {useEffect, useState} from 'react';
import {Text, View, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {color29, color30, primaryMain} from '../ui/common/colors';

const selected_tasks = require('./../../assets/images/selected_tasks.png');
const unSelected_tasks = require('./../../assets/images/unSelected_tasks.png');

const selected_chat = require('./../../assets/images/selected_chat.png');
const unSelected_chat = require('./../../assets/images/unSelected_chat.png');

const selected_files = require('./../../assets/images/selected_files.png');
const unSelected_files = require('./../../assets/images/unSelected_files.png');

const TaskSubMenu = ({selectedItem}) => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[
          styles.item,
          selectedItem === 'Tasks'
            ? styles.selectedBorder
            : styles.unSelectedBorder,
        ]}
        onPress={() => navigation.navigate('Tasks')}>
        <Image
          source={selectedItem === 'Tasks' ? selected_tasks : unSelected_tasks}
        />
        <Text
          style={[
            styles.text,
            selectedItem === 'Tasks' ? styles.selectedText : null,
          ]}>
          Tasks
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[
          styles.item,
          selectedItem === 'Chat'
            ? styles.selectedBorder
            : styles.unSelectedBorder,
        ]}
        onPress={() => navigation.navigate('ChatBox')}>
        <Image
          source={selectedItem === 'Chat' ? selected_chat : unSelected_chat}
        />
        <Text
          style={[
            styles.text,
            selectedItem === 'Chat' ? styles.selectedText : null,
          ]}>
          Chat
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[
          styles.item,
          selectedItem === 'Files'
            ? styles.selectedBorder
            : styles.unSelectedBorder,
        ]}
        onPress={() => navigation.navigate('Files')}>
        <Image
          source={selectedItem === 'Files' ? selected_files : unSelected_files}
        />
        <Text
          style={[
            styles.text,
            selectedItem === 'Files' ? styles.selectedText : null,
          ]}>
          Files
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default TaskSubMenu;

const styles = StyleSheet.create({
  container: {
    backgroundColor: color29,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 50,
    paddingRight: 50,
  },
  item: {
    padding: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    marginLeft: 5,
    fontSize: 18,
    fontWegiht: 500,
    fontFamily: 'SF Pro Display',
    lineHeight: 24,
    color: color30,
  },
  selectedText: {
    color: primaryMain,
  },
  selectedBorder: {
    borderBottomWidth: 1,
    borderColor: primaryMain,
  },
  unSelectedBorder: {
    borderBottomWidth: 1,
    borderColor: color30,
  },
});
