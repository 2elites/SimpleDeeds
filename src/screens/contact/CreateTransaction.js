import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import BottomAddBtn from '../../components/BottomAddBtn';
import ContactItem from '../../components/ContactItem';
import SearchInput from '../../components/SearchInput';
import TopTitle from '../../components/TopTitle';
import {color19, primaryMain, white} from '../../ui/common/colors';
import {deviceHeight} from '../../ui/common/responsive';

const CreateTransaction = ({navigation}) => {
  const [isDisable, setDisable] = useState(false);

  const [list, setList] = useState([
    {
      id: '1',
      type: 'Buyer',
      name: 'Lorenzo Garza',
      email: 'lorenzo@nutechadvisors.com',
      phone: '(830) 202-6100',
      address: '1276 County Rd #4206 Knox City,',
      city: 'Texas(TX), 79529',
      code: 'code: 6771',
    },
    {
      id: '2',
      type: 'Seller',
      name: 'Daniel Fernandez',
      email: 'daniel@nutechadvisors.com',
      phone: '(830) 202-6100',
      address: '1276 County Rd #4206 Knox City,',
      city: 'Texas(TX),  79529',
      code: 'code: 6771',
    },
  ]);

  const [selectedList, setSelectedList] = useState([]);

  useEffect(() => {
    console.log('selectedList', selectedList);
  }, [selectedList]);

  return (
    <View style={{backgroundColor: white, height: deviceHeight}}>
      <TopTitle title={'Contacts'} prevPath={'ContactList'} isClose={false} />
      <View style={styles.searchView}>
        <SearchInput />
      </View>
      <ScrollView style={styles.scrollView}>
        <View style={styles.itemList}>
          {list.map((row, key) => {
            return (
              <ContactItem
                key={key}
                row={row}
                selectedList={selectedList}
                setSelectedList={setSelectedList}
              />
            );
          })}
        </View>
      </ScrollView>
      <View style={styles.submitView}>
        <TouchableOpacity
          disabled={isDisable}
          style={isDisable ? styles.disableBtn : styles.submitBtn}
          onPress={() => {
            if (!isDisable) {
              navigation.navigate('TransactionRoom');
            }
          }}>
          <Text style={styles.submitText}>Create Transaction</Text>
        </TouchableOpacity>
      </View>
      <BottomAddBtn clickPath={'AddContact'} />
    </View>
  );
};

export default CreateTransaction;

const styles = StyleSheet.create({
  scrollView: {
    // height: deviceHeight - 200,
  },
  searchView: {
    paddingLeft: 30,
    paddingRight: 30,
    height: 40,
    marginBottom: 10,
  },
  itemList: {
    padding: 20,
  },
  submitText: {
    textAlign: 'center',
    color: white,
    fontWeight: '700',
    fontSize: 18,
  },
  submitBtn: {
    padding: 20,
    backgroundColor: primaryMain,
    borderRadius: 32,
    marginBottom: 25,
  },
  disableBtn: {
    padding: 20,
    backgroundColor: color19,
    borderRadius: 32,
    marginBottom: 25,
  },
  submitView: {padding: 20},
});
