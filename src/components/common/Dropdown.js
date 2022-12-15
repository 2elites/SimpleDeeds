import React, {useEffect, useState} from 'react';
import DropDownPicker from 'react-native-dropdown-picker';

import {StyleSheet} from 'react-native';
import {color20} from '../../ui/common/colors';

const Dropdown = ({
  open,
  value,
  items,
  setOpen,
  setValue,
  setItems,
  dropDownDirection = 'DEFAULT',
}) => {
  return (
    <DropDownPicker
      open={open}
      value={value}
      items={items}
      setOpen={setOpen}
      setValue={setValue}
      setItems={setItems}
      listMode="SCROLLVIEW"
      style={styles.dropdown}
      dropDownContainerStyle={
        dropDownDirection === 'DEFAULT'
          ? styles.dropDownContainerStyle
          : styles.upDropDownContainerStyle
      }
      dropDownDirection={dropDownDirection}
    />
  );
};

export default Dropdown;

const styles = StyleSheet.create({
  dropdown: {
    borderColor: color20,
    borderRadius: 25,
  },
  dropDownContainerStyle: {
    borderColor: color20,
    borderTopWidth: 0,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
    paddingBottom: 5,
  },
  upDropDownContainerStyle: {
    borderColor: color20,
    borderBottomWidth: 0,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingTop: 5,
  },
});
