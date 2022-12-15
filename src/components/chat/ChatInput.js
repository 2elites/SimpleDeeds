import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

import {useNavigation} from '@react-navigation/native';
import {primaryMain} from '../../ui/common/colors';
import {deviceWidth} from '../../ui/common/responsive';
import BottomSheet from '../BottomSheet';
import FileSelectItem from './FileSelectItem';
import FileSelectModal from './FileSelectModal';

const sendImg = require('./../../../assets/images/send.png');
const uploadFileImg = require('./../../../assets/images/upload_file.png');

const ChatInput = () => {
  const navigation = useNavigation();
  const [text, onChangeText] = React.useState('');

  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.inputView}>
        <TextInput
          style={styles.input}
          placeholder={'Type message ...'}
          onChangeText={onChangeText}
          value={text}
        />
        <Image source={sendImg} />
      </View>
      <TouchableOpacity
        style={styles.uploadView}
        onPress={() => setModalVisible(!modalVisible)}>
        <Image source={uploadFileImg} />
      </TouchableOpacity>

      <BottomSheet
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}>
        <FileSelectModal />
      </BottomSheet>
    </View>
  );
};

export default ChatInput;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 20,
  },
  inputView: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: primaryMain,
    borderWidth: 1,
    borderRadius: 100,
    paddingLeft: 20,
    paddingRight: 20,
  },
  input: {
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 24,
    width: 280,
  },
  uploadView: {
    borderColor: primaryMain,
    borderWidth: 1,
    borderRadius: 100,
    padding: 15,
    marginLeft: 10,
  },
});
