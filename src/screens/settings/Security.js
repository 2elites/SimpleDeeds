import React, {useState} from 'react';

import {
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Text,
} from 'react-native';
import ToggleItem from '../../components/settings/ToggleItem';
import TopTitle from '../../components/TopTitle';
import {primaryMain, white} from '../../ui/common/colors';

import {deviceHeight} from '../../ui/common/responsive';

const Security = ({navigation}) => {
  const [faceId, setFaceId] = useState(true);
  const [rememberMe, setRememberMe] = useState(true);
  const [tourchId, setTouchId] = useState(false);

  return (
    <View style={styles.container}>
      <TopTitle title={'Security'} prevPath={'Settings'} closePath="SignUp" />
      <ScrollView>
        <View style={styles.box}>
          <ToggleItem title={'Face ID'} value={faceId} setValue={setFaceId} />
          <ToggleItem
            title={'Remember me'}
            value={rememberMe}
            setValue={setRememberMe}
          />
          <ToggleItem
            title={'Touch ID'}
            value={tourchId}
            setValue={setTouchId}
          />
          <View style={styles.submitView}>
            <TouchableOpacity
              style={styles.submitBtn}
              onPress={() => navigation.navigate('ContactList')}>
              <Text style={styles.submitText}>Change Password</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Security;

const styles = StyleSheet.create({
  container: {
    height: deviceHeight,
    backgroundColor: white,
  },
  box: {
    paddingLeft: 20,
    paddingRight: 20,
    marginTop: 20,
  },
  submitText: {
    textAlign: 'center',
    color: primaryMain,
    fontWeight: '700',
    fontSize: 18,
  },
  submitView: {
    marginBottom: 60,
  },
  submitBtn: {
    borderColor: primaryMain,
    borderWidth: 1,
    padding: 20,
    borderRadius: 32,
    marginTop: 25,
    marginBottom: 25,
  },
});
