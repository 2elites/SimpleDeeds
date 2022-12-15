import React, {useEffect, useRef} from 'react';

import {View, StyleSheet, Text, Button} from 'react-native';
import {useCameraDevices, Camera} from 'react-native-vision-camera';
import {black, white} from '../ui/common/colors';

import {deviceHeight, deviceWidth} from '../ui/common/responsive';

const ScanDocument = ({navigation}) => {
  const camera = useRef(null);
  useEffect(() => {
    const checkPermissions = async () => {
      const status = await Camera.requestCameraPermission();
      console.log(status);
    };
    checkPermissions();
  }, []);

  const devices = useCameraDevices();
  console.log(devices);
  const device = devices.back;

  if (device == null) return <Text>Loading</Text>;

  return <Camera style={styles.cameraVIew} device={device} isActive={true} />;
};

export default ScanDocument;

const styles = StyleSheet.create({
  cameraVIew: {
    height: deviceHeight,
    width: deviceWidth,
  },
});
