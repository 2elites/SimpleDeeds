import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import TopTitle from '../components/TopTitle';
import TransactionInfoItem from '../components/TramsactomInfoItem';
import {primaryMain, white} from '../ui/common/colors';

const icon1 = require('./../../assets/images/icon1.png');
const icon2 = require('./../../assets/images/icon2.png');
const icon3 = require('./../../assets/images/icon3.png');
const icon4 = require('./../../assets/images/icon4.png');
const icon5 = require('./../../assets/images/icon5.png');

const ConfirmInformation = ({navigation}) => {
  return (
    <View>
      <TopTitle
        title={'Confirm Information'}
        prevPath={'SignUp'}
        closePath="SignUp"
      />
      <ScrollView
        style={{
          backgroundColor: white,
        }}>
        <View style={styles.infoView}>
          <Text style={styles.infoText}>Transaction Infromation</Text>
          <TransactionInfoItem
            icon={icon1}
            title={'Address'}
            content={'1276 County Rd # 4206 Knox City'}
            linkPath={''}
          />
          <TransactionInfoItem
            icon={icon2}
            title={'Legal Number'}
            content={'#398239482348273487'}
            linkPath={''}
          />
          <TransactionInfoItem
            icon={icon3}
            title={'Sales Price'}
            content={'$3,500,000'}
            linkPath={''}
          />
          <TransactionInfoItem
            icon={icon4}
            title={'Type of order'}
            content={'1/4 Family'}
            linkPath={''}
          />
          <TransactionInfoItem
            icon={icon5}
            title={'Option Period Day'}
            content={'22/01/23 - 27/01/23'}
            linkPath={'SetOptionPeriodDate'}
          />
          <TransactionInfoItem
            icon={icon5}
            title={'Closing Day'}
            content={'27/01/23'}
            linkPath={'SetClosingDate'}
          />
          <View style={styles.submitView}>
            <TouchableOpacity
              style={styles.submitBtn}
              onPress={() => navigation.navigate('ContactList')}>
              <Text style={styles.submitText}>Confirm Information</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default ConfirmInformation;

const styles = StyleSheet.create({
  infoText: {
    color: primaryMain,
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 10,
  },
  infoView: {
    paddingLeft: 20,
    paddingRight: 20,
  },
  submitText: {
    textAlign: 'center',
    color: white,
    fontWeight: '700',
    fontSize: 18,
  },
  submitView: {
    marginBottom: 60,
  },
  submitBtn: {
    backgroundColor: primaryMain,
    padding: 20,
    borderRadius: 32,
    marginTop: 25,
    marginBottom: 25,
  },
});
