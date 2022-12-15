import React from 'react';
import {Modal, View, StyleSheet} from 'react-native';
import {color29} from '../ui/common/colors';
import {deviceWidth} from '../ui/common/responsive';

const BottomSheet = ({
  modalVisible,
  setModalVisible,
  children,
  backgroundColor,
  bodyColor,
}) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        setModalVisible(!modalVisible);
      }}>
      <View
        style={[
          styles.centeredView,
          backgroundColor && {
            backgroundColor: backgroundColor,
          },
        ]}>
        <View
          style={[
            styles.modalView,
            {
              backgroundColor: bodyColor ? bodyColor : color29,
            },
          ]}>
          {children}
        </View>
      </View>
    </Modal>
  );
};

export default BottomSheet;

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  modalView: {
    width: deviceWidth,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    padding: 35,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
});
