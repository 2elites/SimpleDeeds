import React from 'react';
import {Text, View, Image, StyleSheet} from 'react-native';
import {color28} from '../../ui/common/colors';

const rightArrow = require('./../../../assets/images/right_arrow.png');

const SettingLinkItem = ({icon, title, isShowRightArrow = true}) => {
  return (
    <View style={styles.itemView}>
      {icon && (
        <View style={styles.iconView}>
          <Image source={icon} />
        </View>
      )}
      <Text style={styles.itemTitle}>{title}</Text>
      {isShowRightArrow ? (
        <Image source={rightArrow} style={styles.rightArrow} />
      ) : null}
    </View>
  );
};

export default SettingLinkItem;

const styles = StyleSheet.create({
  itemView: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 5,
    marginBottom: 20,
  },
  iconView: {
    backgroundColor: 'rgba(82, 101, 255, 0.1)',
    height: 56,
    width: 56,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 100,
    marginRight: 15,
  },
  itemTitle: {
    color: color28,
    fontSize: 16,
    fontWeight: '600',
  },
  rightArrow: {
    position: 'absolute',
    right: 0,
  },
});
