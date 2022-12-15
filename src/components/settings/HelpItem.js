import React from 'react';
import {Text, TouchableOpacity, StyleSheet, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {color41, softBlack} from '../../ui/common/colors';

const rightArrow = require('./../../../assets/images/right_arrow.png');

const HelpItem = ({title, link, isShowRightArrow = true}) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate(link)}
      style={styles.itemView}>
      <Text style={styles.itemText}>{title}</Text>

      {isShowRightArrow ? (
        <Image source={rightArrow} style={styles.rightArrow} />
      ) : null}
    </TouchableOpacity>
  );
};

export default HelpItem;

const styles = StyleSheet.create({
  itemView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: color41,
    paddingBottom: 25,
    paddingTop: 25,
  },
  itemText: {
    color: softBlack,
    fontSize: 16,
    fontWeight: '500',
  },
});
