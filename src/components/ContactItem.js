import React, {useEffect, useState} from 'react';
import {Text, View, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {
  color17,
  color18,
  color37,
  grayBlack,
  primaryMain,
  white,
} from '../ui/common/colors';

const avatar = require('../../assets/images/avatar.png');
const link = require('../../assets/images/link.png');

const ContactItem = ({row, selectedList, setSelectedList}) => {
  const [isSelected, setSelected] = useState(false);

  useEffect(() => {
    console.log(selectedList);
    const temp = selectedList.includes(row.id);
    setSelected(temp);
  }, [row.id, selectedList]);

  return (
    // <TouchableOpacity
    //   style={{backgroundColor: isSelected ? white : color17}}
    <TouchableOpacity
      style={{backgroundColor: white}}
      onPress={() => {
        let tempList = selectedList;
        // eslint-disable-next-line no-alert
        const temp = tempList.includes(row.id);
        if (temp) {
          const index = tempList.indexOf(row.id);
          if (index > -1) {
            tempList.splice(index, 1);
          }
          console.log('tempList', tempList);
          // setSelectedList(tempList);
        } else {
          tempList.push(row.id);
          console.log('tempList', tempList);
          // setSelectedList(tempList);
        }
      }}>
      <View style={[styles.itemBox, row.code ? styles.borderColor : null]}>
        <Image source={avatar} style={styles.avatar} />
        <View>
          <Text style={styles.type}>{row.type}</Text>
          <Text style={styles.name}>{row.name}</Text>
          <Text style={styles.email}>{row.email}</Text>
          <Text style={styles.text}>{row.phone}</Text>
          <Text style={styles.text}>{row.address}</Text>
          <Text style={styles.text}>{row.city}</Text>
        </View>
        <Image source={link} style={styles.link} />
        <Text style={styles.code}>{row.code}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ContactItem;

const styles = StyleSheet.create({
  itemBox: {
    flex: 1,
    flexDirection: 'row',
    padding: 20,
    elevation: 2,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 20,
  },
  borderColor: {
    borderWidth: 1,
    borderColor: color37,
  },
  avatar: {
    borderRadius: 100,
    height: 48,
    width: 48,
    marginRight: 20,
  },
  link: {
    position: 'absolute',
    right: 20,
    top: 20,
  },
  code: {
    position: 'absolute',
    right: 20,
    bottom: 20,
    color: color18,
    fontWeight: '700',
    fontSize: 14,
  },
  type: {
    color: primaryMain,
    fontSize: 14,
    fontWeight: '700',
    marginBottom: 0,
  },
  name: {
    color: grayBlack,
    fontSize: 18,
    fontWeight: '500',
    fontFamily: 'SF Pro Display',
    lineHeight: 24,
  },
  email: {
    color: color18,
    fontSize: 14,
    fontWeight: '400',
    fontFamily: 'SF Pro Display',
    lineHeight: 20,
  },
  text: {
    color: color18,
    fontSize: 12,
    fontWeight: '400',
    fontFamily: 'SF Pro Display',
    lineHeight: 18,
  },
});
