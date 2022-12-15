import React from 'react';
import {Text, View, StyleSheet, Switch} from 'react-native';
import {color41, softBlack, white} from '../../ui/common/colors';

const ToggleItem = ({title, value, setValue}) => {
  return (
    <View style={styles.itemView}>
      <Text style={styles.itemText}>{title}</Text>
      <Switch
        trackColor={{false: '#9098A1', true: '#2633ED'}}
        thumbColor={white}
        ios_backgroundColor="#3e3e3e"
        onValueChange={() => setValue(!value)}
        value={value}
      />
    </View>
  );
};

export default ToggleItem;

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
