import React from 'react';
import {TouchableOpacity, Text, Image, StyleSheet} from 'react-native';

import {color25} from '../../ui/common/colors';
import {useNavigation} from '@react-navigation/native';

const FileSelectItem = ({row}) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => {
        navigation.navigate(row.path);
      }}>
      <Image source={row.image} />
      <Text style={styles.text}>{row.name}</Text>
    </TouchableOpacity>
  );
};

export default FileSelectItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginBottom: 15,
    marginTop: 15,
  },
  text: {
    color: color25,
    marginLeft: 20,
    fontSize: 16,
    fontWeight: '500',
    lineHeight: 24,
  },
});
