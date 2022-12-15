import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import Logo from '../../components/Logo';
import {
  bigGray,
  color40,
  color44,
  gray1,
  primaryMain,
  softBlack,
  softBlue,
  softGray,
  white,
} from '../../ui/common/colors';
import {deviceWidth, deviceHeight} from '../../ui/common/responsive';
import {emailValidation} from '../../utils/emailValidation';
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from '@react-native-google-signin/google-signin';

const GoogleImg = require('./../../../assets/images/google.png');

const SignIn = ({navigation}) => {
  GoogleSignin.configure({
    webClientId:
      '286008757112-gh36kp9oj12ho3mg54mlv0b23od4v759.apps.googleusercontent.com',
    offlineAccess: true,
  });

  const [isRemember, setRemember] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState(false);

  const onSubmit = async () => {
    setErrors(false);
    const isEmail = emailValidation(email);
    if (!isEmail || password === '') {
      setErrors(true);
      return false;
    }
    navigation.navigate('AccessClosingRoom');
  };

  const [userInfo, setUserInfo] = useState();

  const GoogleSingUp = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      await GoogleSignin.signIn().then(result => {
        console.log(result);
      });
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // user cancelled the login flow
        alert('User cancelled the login flow !');
      } else if (error.code === statusCodes.IN_PROGRESS) {
        alert('Signin in progress');
        // operation (f.e. sign in) is in progress already
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        alert('Google play services not available or outdated !');
        // play services not available or outdated
      } else {
        console.log(error);
      }
    }
  };

  return (
    <View style={styles.view}>
      <View
        style={{
          alignItems: 'center',
        }}>
        <Logo h={100} />
      </View>
      <Text style={styles.logText}>Simple Deeds</Text>

      <View style={{marginTop: 50, paddingLeft: 30, paddingRight: 30}}>
        <Text
          style={{
            color: softBlack,
            textAlign: 'center',
            fontSize: 24,
            fontWeight: '500',
          }}>
          Sign In
        </Text>
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
        <TouchableOpacity style={styles.submitView} onPress={() => onSubmit()}>
          <Text style={styles.submitBtn}>Sign In</Text>
        </TouchableOpacity>
        <Text style={styles.sublinText}>or continue with</Text>

        <TouchableOpacity onPress={() => GoogleSingUp()}>
          <View style={styles.googleVIew}>
            <Image source={GoogleImg} style={styles.googleImg} />
            <Text style={styles.googleText}>Google</Text>
          </View>
        </TouchableOpacity>

        <View style={styles.commentView}>
          <Text style={styles.commentText}>You don't have an account? </Text>
          <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
            <Text style={styles.commentLink}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  view: {
    paddingTop: 70,
    height: deviceHeight,
    backgroundColor: white,
  },
  logText: {
    marginTop: 20,
    color: primaryMain,
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '700',
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
  errorBorder: {
    borderColor: color40,
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
  sublinText: {
    color: softBlack,
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 24,
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 10,
  },
  googleVIew: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: gray1,
    borderWidth: 1,
    borderRadius: 8,
    paddingVertical: 13,
    elevation: 2,
    backgroundColor: white,
  },
  googleText: {
    color: color44,
    fontSize: 16,
    fontWeight: '600',
    marginLeft: 10,
  },
});
