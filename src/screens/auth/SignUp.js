import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import CheckBox from '@react-native-community/checkbox';

import Logo from '../../components/Logo';
import {
  bigGray,
  color40,
  primaryMain,
  softBlack,
  softBlue,
  softGray,
  white,
} from '../../ui/common/colors';
import {deviceHeight} from '../../ui/common/responsive';
import {emailValidation} from '../../utils/emailValidation';

import g_styles from '../../ui/common/styles';

const SignUp = ({navigation}) => {
  const [isRemember, setRemember] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');
  const [errors, setErrors] = useState(false);

  const onSubmit = async () => {
    setErrors(false);
    const isEmail = emailValidation(email);
    if (!isEmail || password === '') {
      setErrors(true);
      return false;
    }
    // navigation.navigate('AccessClosingRoom');
    navigation.navigate('ContactInfo');
  };

  return (
    <View style={styles.view}>
      <ScrollView>
        <View style={g_styles.itemsCenter}>
          <Logo h={100} />
        </View>
        <Text style={styles.logText}>Simple Deeds</Text>

        <View style={styles.boxView}>
          <Text style={styles.titleText}>Sign Up</Text>

          <Text style={styles.label}>Email</Text>
          <TextInput
            style={[styles.input, errors ? styles.errorBorder : null]}
            onChangeText={setEmail}
            value={email}
          />

          <Text style={styles.label}>Password</Text>
          <TextInput
            style={[styles.input, errors ? styles.errorBorder : null]}
            secureTextEntry={true}
            value={password}
            onChangeText={setPassword}
          />

          <Text style={styles.label}>Re-enter Password</Text>
          <TextInput
            style={[styles.input, errors ? styles.errorBorder : null]}
            secureTextEntry={true}
            value={password2}
            onChangeText={setPassword2}
          />

          <View style={styles.rememberView}>
            <CheckBox
              tintColors={{true: primaryMain, false: softBlack}}
              style={styles.rememberCheckBox}
              disabled={false}
              value={isRemember}
              onValueChange={newValue => setRemember(newValue)}
            />
            <Text
              style={styles.rememberText}
              onPress={() => setRemember(!isRemember)}>
              Remember me
            </Text>
          </View>

          <TouchableOpacity
            style={styles.submitView}
            onPress={() => onSubmit()}>
            <Text style={styles.submitBtn}>Sign up</Text>
          </TouchableOpacity>

          <View style={styles.commentView}>
            <Text style={styles.commentText}>Already have an account? </Text>
            <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
              <Text style={styles.commentLink}>Sign In</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  view: {
    paddingTop: 70,
    height: deviceHeight,
    backgroundColor: white,
  },
  boxView: {
    marginTop: 50,
    paddingLeft: 30,
    paddingRight: 30,
  },
  titleText: {
    color: softBlack,
    textAlign: 'center',
    fontSize: 24,
    fontWeight: '500',
  },
  logText: {
    marginTop: 20,
    color: primaryMain,
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '700',
  },
  errorBorder: {
    borderColor: color40,
  },
  bottomView: {
    position: 'absolute',
    bottom: 140,
    left: 0,
    right: 0,
    alignItems: 'center',
  },
  bottomText: {
    color: white,
    fontSize: 20,
    lineHeight: 28,
    maxWidth: 300,
    textAlign: 'center',
    fontWeight: '700',
  },
  label: {
    color: softGray,
    fontSize: 16,
    fontWeight: '500',
    paddingLeft: 19,
    marginBottom: 5,
    marginTop: 20,
  },
  input: {
    borderColor: softBlue,
    borderWidth: 2,
    borderRadius: 100,
    paddingLeft: 20,
    paddingRight: 20,
    fontSize: 16,
    lineHeight: 24,
  },
  rememberView: {
    flexDirection: 'row',
    marginLeft: 10,
    marginTop: 15,
    alignItems: 'center',
  },
  rememberCheckBox: {},
  rememberText: {
    color: softGray,
    fontSize: 14,
    fontWeight: '500',
    lineHeight: 20,
  },
  submitView: {
    backgroundColor: primaryMain,
    padding: 20,
    borderRadius: 32,
    marginTop: 25,
  },
  submitBtn: {
    textAlign: 'center',
    color: white,
    fontWeight: '700',
    fontSize: 18,
  },
  commentView: {
    flexDirection: 'row',
    alignItems: 'center',
    textAlign: 'center',
    justifyContent: 'center',
    marginTop: 30,
  },
  commentText: {
    color: bigGray,
    fontSize: 16,
    fontWeight: '400',
  },
  commentLink: {color: softBlue, fontWeight: '700'},
});
