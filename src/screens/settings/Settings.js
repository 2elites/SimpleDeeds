import React, {useState} from 'react';

import {View, StyleSheet, ScrollView, TouchableOpacity} from 'react-native';
import TopTitle from '../../components/TopTitle';
import {white} from '../../ui/common/colors';

import {deviceHeight} from '../../ui/common/responsive';
import SettingLinkItem from '../../components/settings/SettingLinkItem';
import BottomSheet from '../../components/BottomSheet';
import LogOutConfirm from './LogOutConfirm';

const profile = require('./../../../assets/images/settings/profile.png');
const notification = require('./../../../assets/images/settings/notification.png');
const security = require('./../../../assets/images/settings/security.png');
const appearance = require('./../../../assets/images/settings/appearance.png');
const help = require('./../../../assets/images/settings/help.png');
const logout = require('./../../../assets/images/settings/logout.png');

const Settings = ({navigation}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const onLogOut = async () => {
    console.log('onLogOut');
    setModalVisible(true);
  };

  return (
    <View style={styles.container}>
      <ScrollView
        style={{
          backgroundColor: white,
        }}>
        <TopTitle
          title={'Settings'}
          prevPath={'TransactionRoom'}
          closePath="SignUp"
        />
        <View style={styles.box}>
          <SettingLinkItem icon={profile} title="Edit Profile" />
          <SettingLinkItem icon={notification} title="Notifications" />
          <TouchableOpacity onPress={() => navigation.navigate('Security')}>
            <SettingLinkItem icon={security} title="Security" />
          </TouchableOpacity>
          <SettingLinkItem icon={appearance} title="Appearance" />
          <TouchableOpacity onPress={() => navigation.navigate('Help')}>
            <SettingLinkItem icon={help} title="Help" />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => onLogOut()}>
            <SettingLinkItem
              icon={logout}
              title="Logout"
              isShowRightArrow={false}
            />
          </TouchableOpacity>
        </View>
      </ScrollView>
      <BottomSheet
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        backgroundColor="#09101D70"
        bodyColor="#FFFFFF">
        <LogOutConfirm
          onCancel={() => setModalVisible(false)}
          onConfirm={() => {
            setModalVisible(false);
            navigation.navigate('SignIn');
          }}
        />
      </BottomSheet>
    </View>
  );
};

export default Settings;

const styles = StyleSheet.create({
  container: {
    height: deviceHeight,
  },
  box: {
    paddingLeft: 20,
    paddingRight: 20,
    marginTop: 20,
  },
});
