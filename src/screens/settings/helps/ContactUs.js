import React, {useState} from 'react';

import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from 'react-native';
// import {useNavigation} from '@react-navigation/native';
import TopTitle from '../../../components/TopTitle';
import {color20, gray1, white} from '../../../ui/common/colors';
import g_styles from '../../../ui/common/styles';

const ContactUs = () => {
  // const navigation = useNavigation();
  const [fullname, setFullname] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  return (
    <View style={g_styles.container}>
      <TopTitle title={'Contact Us'} prevPath={'Help'} closePath="SignUp" />
      <ScrollView>
        <View style={g_styles.box}>
          <View>
            <Text style={styles.label}>Full Name</Text>
            <TextInput
              style={styles.textinput}
              onChangeText={setFullname}
              placeholder="Full Name"
              value={fullname}
            />
          </View>
          <View>
            <Text style={styles.label}>Email</Text>
            <TextInput
              style={styles.textinput}
              onChangeText={setEmail}
              placeholder="Email"
              value={email}
            />
          </View>
          <View>
            <Text style={styles.label}>Message</Text>
            <TextInput
              style={styles.textarea}
              onChangeText={setMessage}
              placeholder="Message"
              value={message}
              multiline={true}
              numberOfLines={6}
            />
          </View>
        </View>
      </ScrollView>

      <View style={g_styles.submitView}>
        <TouchableOpacity style={g_styles.submitBtn}>
          <Text style={g_styles.submitText}>Send Message</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ContactUs;

const styles = StyleSheet.create({
  label: {
    color: gray1,
    fontSize: 16,
    fontWeight: '500',
    lineHeight: 20,
    marginTop: 16,
    paddingLeft: 20,
  },
  textinput: {
    borderRadius: 100,
    borderColor: color20,
    borderWidth: 1,
    paddingLeft: 20,
    marginTop: 5,
    backgroundColor: white,
    fontSize: 16,
  },
  textarea: {
    borderRadius: 20,
    borderColor: color20,
    borderWidth: 1,
    paddingLeft: 20,
    marginTop: 5,
    backgroundColor: white,
    fontSize: 16,
  },
});
