import React, {useState} from 'react';

import {
  View,
  StyleSheet,
  ScrollView,
  Text,
  TouchableOpacity,
  Image,
} from 'react-native';
import TopTitle from '../../components/TopTitle';
import {color29, primaryMain, white} from '../../ui/common/colors';

import {deviceHeight} from '../../ui/common/responsive';
import FileItem from '../../components/chat/FileItem';

const documentImg = require('./../../../assets/images/item4.png');

const UploadFiles = ({navigation}) => {
  const [files, setFiles] = useState([
    {
      name: 'Scanned_Contract_23234.pdf',
      fileSize: '3.6 MB',
      date: '01/10/2023',
    },
    {
      name: 'Scanned_Contract_23234.pdf',
      fileSize: '3.6 MB',
      date: '01/10/2023',
    },
    {
      name: 'Scanned_Contract_23234.pdf',
      fileSize: '3.6 MB',
      date: '01/10/2023',
    },
    {
      name: 'Scanned_Contract_23234.pdf',
      fileSize: '3.6 MB',
      date: '01/10/2023',
    },
    {
      name: 'Scanned_Contract_23234.pdf',
      fileSize: '3.6 MB',
      date: '01/10/2023',
    },
  ]);

  return (
    <View style={styles.container}>
      <TopTitle title={'Upload Files'} prevPath={'ChatBox'} />
      <View style={styles.searchView}>
        <Image source={documentImg} />
        <Text style={styles.searchText}>Search other documents</Text>
      </View>
      <ScrollView>
        <View style={styles.box}>
          {files.map((row, key) => {
            return <FileItem row={row} key={key} />;
          })}
        </View>
      </ScrollView>
      <View style={styles.submitView}>
        <TouchableOpacity
          style={styles.submitBtn}
          onPress={() => navigation.navigate('ChatBox')}>
          <Text style={styles.submitText}>Upload File</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default UploadFiles;

const styles = StyleSheet.create({
  container: {
    height: deviceHeight,
    backgroundColor: white,
  },
  searchView: {
    backgroundColor: color29,
    flexDirection: 'row',
    padding: 20,
    alignItems: 'center',
  },
  searchText: {
    color: primaryMain,
    fontSize: 18,
    lineHeight: 24,
    fontWeight: '500',
    paddingLeft: 10,
  },
  box: {
    paddingRight: 20,
    paddingLeft: 20,
  },
  submitView: {
    padding: 20,
    backgroundColor: 'transparent',
  },
  submitText: {
    textAlign: 'center',
    color: white,
    fontWeight: '700',
    fontSize: 18,
  },
  submitBtn: {
    backgroundColor: primaryMain,
    padding: 20,
    borderRadius: 32,
    marginBottom: 25,
  },
});
