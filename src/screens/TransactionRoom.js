import React, {useEffect, useState} from 'react';

import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import {black1, white} from '../ui/common/colors';

import {deviceHeight} from '../ui/common/responsive';
import UnlockifyNav from '../components/UnlocakifyNav';
import SearchInput from '../components/SearchInput';
import BottomAddBtn from '../components/BottomAddBtn';
import TransactionRoomBottomMenu from '../components/Transaction/TransactionRoomBottomMenu';
import useFileSelector from '../hooks/useFileSelector';
import TransactionItem from '../components/Transaction/TransactionItem';

const Avatar = require('./../../assets/images/large-avatar.png');
const PlusImage = require('./../../assets/images/plus.png');

const TransactionRoom = ({navigation}) => {
  const {openImageLibrary} = useFileSelector();
  const [resourcePath, setResourcePath] = useState({});
  const [searchValue, setSearchValue] = useState();
  const [transactions, setTransactions] = useState([
    {
      fileNumber: '#23123213234234',
      address:
        '#(830) 202-6100 1276 County Rd #4206 Knox City, Texas(TX), 79529}',
    },
    {
      fileNumber: '#23123213234241',
      address:
        '#(830) 202-6100 1276 County Rd #4206 Knox City, Texas(TX), 79529}',
    },
    {
      fileNumber: '#23123213234231',
      address:
        '#(830) 202-6100 1276 County Rd #4206 Knox City, Texas(TX), 79529}',
    },
  ]);

  const onSelectAvatar = async () => {
    const res = await openImageLibrary();
    setResourcePath(res);
  };

  return (
    <View style={styles.container}>
      <ScrollView
        style={{
          backgroundColor: white,
        }}>
        <UnlockifyNav title="Simple Deeds" />
        <View style={styles.box}>
          <View style={styles.avatarView}>
            <View>
              <Image
                source={resourcePath.uri ? {uri: resourcePath.uri} : Avatar}
                style={styles.avatar}
              />
              <TouchableOpacity onPress={onSelectAvatar}>
                <Image source={PlusImage} style={styles.addView} />
              </TouchableOpacity>
            </View>
            <Text style={styles.title}>Michael Garcla</Text>
            <Text style={styles.subTitle}>Title Agent</Text>
          </View>
          <View style={styles.searchView}>
            <SearchInput
              placeholder={'Type file number, address or phone number.'}
              value={searchValue}
              onChangeText={setSearchValue}
            />
          </View>
          <View style={styles.itemView}>
            {transactions.map((row, key) => {
              if (searchValue === row.fileNumber) {
                return <TransactionItem key={key} />;
              }
            })}
          </View>
        </View>
      </ScrollView>
      <BottomAddBtn clickPath={'AddContact'} />
      <TransactionRoomBottomMenu />
    </View>
  );
};

export default TransactionRoom;

const styles = StyleSheet.create({
  container: {
    height: deviceHeight,
  },
  box: {
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 20,
  },
  avatarView: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 10,
  },
  avatar: {
    height: 128,
    width: 128,
    borderRadius: 100,
  },
  addView: {
    position: 'absolute',
    // backgroundColor: black1,
    borderRadius: 100,
    height: 20,
    width: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    bottom: 10,
    right: 10,
  },
  addBtn: {
    color: white,
    fontSize: 16,
    fontWeight: 'bold',
  },
  title: {
    color: black1,
    fontSize: 24,
    fontWeight: '700',
    lineHeight: 32,
    marginTop: 15,
  },
  subTitle: {
    color: black1,
    fontSize: 18,
    fontWeight: '500',
    lineHeight: 24,
  },
  searchView: {
    marginTop: 30,
    paddingLeft: 15,
    paddingRight: 15,
  },
  itemView: {
    marginTop: 30,
  },
});
