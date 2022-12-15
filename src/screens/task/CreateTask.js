import React from 'react';

import {
  View,
  StyleSheet,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import AssignUserItem from '../../components/Item/AssignUserItem';

import TopTitle from '../../components/TopTitle';
import {color20, primaryMain, white, transparent} from '../../ui/common/colors';

import {deviceHeight} from '../../ui/common/responsive';

const CreateTask = ({navigation}) => {
  const [name, setName] = React.useState('');
  const [description, setDescription] = React.useState('');

  return (
    <View style={styles.container}>
      <TopTitle
        title={'Tasks'}
        prevPath={'TransactionRoom'}
        closePath="SignUp"
      />
      <ScrollView>
        <View style={styles.box}>
          <Text style={styles.title}>Create a Task</Text>
          <View>
            <Text style={styles.label}>Task's Name</Text>
            <TextInput
              style={styles.input}
              onChangeText={setName}
              value={name}
            />
          </View>
          <View>
            <Text style={styles.label}>Task Description</Text>
            <TextInput
              style={styles.input}
              onChangeText={setDescription}
              value={description}
              multiline={true}
              numberOfLines={4}
            />
          </View>
          <View>
            <Text style={styles.label}>Assign task to: </Text>
            <AssignUserItem isSelected={true} />
            <AssignUserItem />
            <AssignUserItem />
          </View>
        </View>
      </ScrollView>
      <View style={styles.submitView}>
        <TouchableOpacity
          style={styles.submitBtn}
          onPress={() => navigation.navigate('setD')}>
          <Text style={styles.submitText}>Set Date</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CreateTask;

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
  title: {
    color: primaryMain,
    fontSize: 18,
    fontWeight: '700',
    lineHeight: 24,
  },
  label: {
    color: primaryMain,
    fontSize: 14,
    fontWeight: '700',
    lineHeight: 20,
    marginTop: 15,
  },
  input: {
    padding: 10,
    borderWidth: 2,
    borderRadius: 8,
    borderColor: color20,
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 20,
    marginTop: 5,
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
