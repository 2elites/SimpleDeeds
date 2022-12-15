import React from 'react';
import {TextInput, View, Image, StyleSheet} from 'react-native';
import {black1, color15, color16} from '../ui/common/colors';

const searchIcon = require('../../assets/images/search.png');

const SearchInput = ({placeholder, value, onChangeValue}) => {
  return (
    <View style={styles.searchSection}>
      <Image source={searchIcon} style={styles.searchIcon} />
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        onChangeText={onChangeValue}
        value={value}
      />
    </View>
  );
};

export default SearchInput;

const styles = StyleSheet.create({
  searchSection: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: color15,
    borderRadius: 100,
  },
  searchIcon: {
    marginLeft: 15,
  },
  input: {
    flex: 1,
    color: black1,
    paddingLeft: 10,
    fontSize: 12,
    fontWeight: '500',
    lineHeight: 20,
  },
});
