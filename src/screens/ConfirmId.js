import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import TopTitle from '../components/TopTitle';
import useFileSelector from '../hooks/useFileSelector';
import {grayBlack, primaryMain, white} from '../ui/common/colors';
import {deviceHeight, deviceWidth} from '../ui/common/responsive';

const scanImg = require('./../../assets/images/b_scan.png');
const checkImg = require('./../../assets/images/check.png');

const ConfirmId = ({navigation}) => {
  const {takePicture, openImageLibrary} = useFileSelector();
  const [isScaned, setIsScaned] = useState(false);

  const openScanWindow = async () => {
    console.log('Open Scan Camera');
    const file = await openImageLibrary();
    if (file) {
      setIsScaned(true);
    }
  };

  return (
    <View style={styles.fullView}>
      {!isScaned ? (
        <View style={styles.fullView}>
          <TopTitle
            title={'Confirm your id'}
            prevPath={'SignUp'}
            closePath="SignUp"
          />
          <ScrollView style={styles.scrollView}>
            <View style={[styles.itemsCenterView, styles.mt_100]}>
              <Image source={scanImg} />
              <Text style={styles.titleText}>Upload Your Driver License</Text>
              <Text style={styles.commentText}>
                Please upload your driver license to make all your transactions
                secure
              </Text>
            </View>
          </ScrollView>
          <View style={styles.submitView}>
            <TouchableOpacity
              style={styles.submitBtn}
              onPress={() => openScanWindow()}>
              <Text style={styles.submitText}>Scan ID</Text>
            </TouchableOpacity>
          </View>
        </View>
      ) : (
        <View style={styles.fullView}>
          <TopTitle
            title={'Confirm your id'}
            prevPath={'SignUp'}
            closePath="SignUp"
          />
          <ScrollView style={styles.scrollView}>
            <View style={[styles.itemsCenterView, styles.mt_100]}>
              <Image source={checkImg} />
              <Text style={styles.titleText}>Welcome!</Text>
              <Text style={styles.commentText}>
                Thanks for helping us take care of your transactions!
              </Text>
            </View>
          </ScrollView>
          <View style={styles.submitView}>
            <TouchableOpacity
              style={styles.submitBtn}
              onPress={() => navigation.navigate('ConfirmInformation')}>
              <Text style={styles.submitText}>Continue</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </View>
  );
};

export default ConfirmId;

const styles = StyleSheet.create({
  fullView: {
    height: deviceHeight,
    width: deviceWidth,
    backgroundColor: white,
  },
  mt_100: {
    marginTop: 100,
  },
  scrollView: {
    paddingLeft: 15,
    paddingRight: 15,
  },
  submitText: {
    textAlign: 'center',
    color: white,
    fontWeight: '700',
    fontSize: 18,
  },
  submitView: {
    padding: 15,
  },
  itemsCenterView: {
    alignItems: 'center',
    flex: 1,
  },
  titleText: {
    color: primaryMain,
    fontSize: 24,
    fontWeight: '700',
    lineHeight: 28,
    marginTop: 30,
  },
  commentText: {
    color: grayBlack,
    fontSize: 16,
    lineHeight: 25,
    fontWeight: '400',
    marginTop: 10,
    textAlign: 'center',
  },
  submitBtn: {
    backgroundColor: primaryMain,
    padding: 20,
    borderRadius: 32,
    marginTop: 25,
    marginBottom: 25,
  },
});
