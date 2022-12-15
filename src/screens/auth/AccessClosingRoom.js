import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, SafeAreaView} from 'react-native';
import {
  black1,
  color12,
  color14,
  gray1,
  primaryMain,
  softBlue,
  white,
} from '../../ui/common/colors';
import {deviceHeight} from '../../ui/common/responsive';
import TopTitle from '../../components/TopTitle';

import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';

const AccessClosingRoom = ({navigation}) => {
  const CELL_COUNT = 4;
  const [value, setValue] = useState('');
  const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });

  useEffect(() => {
    if (value.length === CELL_COUNT) {
      // navigation.navigate('ConfirmInformation');
      navigation.navigate('ConfirmId');
    }
  }, [navigation, value]);

  return (
    <View
      style={{
        height: deviceHeight,
        backgroundColor: white,
      }}>
      <TopTitle title={'Access Room'} prevPath={'SignUp'} closePath="SignUp" />
      <Text style={styles.title}>Enter Code</Text>
      <View style={{alignItems: 'center'}}>
        <Text style={styles.description}>
          We have sent you an SMS with the code to +62 1309 - 1710 - 1920
        </Text>
      </View>
      <View>
        <SafeAreaView style={styles.root}>
          <CodeField
            ref={ref}
            {...props}
            // Use `caretHidden={false}` when users can't paste a text value, because context menu doesn't appear
            value={value}
            onChangeText={setValue}
            cellCount={CELL_COUNT}
            rootStyle={styles.codeFieldRoot}
            keyboardType="number-pad"
            textContentType="oneTimeCode"
            renderCell={({index, symbol, isFocused}) => (
              <Text
                key={index}
                style={[styles.cell, isFocused && styles.focusCell]}
                onLayout={getCellOnLayoutHandler(index)}>
                {symbol || (isFocused ? <Cursor /> : null)}
              </Text>
            )}
          />
        </SafeAreaView>
      </View>
      <Text style={styles.resendCode}>Resend Code</Text>
    </View>
  );
};

export default AccessClosingRoom;

const styles = StyleSheet.create({
  root: {padding: 20, alignItems: 'center'},
  codeFieldRoot: {marginTop: 20},
  title: {
    textAlign: 'center',
    marginTop: 60,
    fontSize: 28,
    fontWeight: '500',
    color: black1,
  },
  description: {
    textAlign: 'center',
    fontSize: 16,
    color: gray1,
    marginTop: 10,
    maxWidth: 270,
  },
  cell: {
    width: 40,
    height: 40,
    lineHeight: 40,
    color: color14,
    fontWeight: '500',
    fontSize: 32,
    borderRadius: 100,
    backgroundColor: color12,
    textAlign: 'center',
    margin: 16,
  },
  focusCell: {
    borderWidth: 1,
    borderColor: softBlue,
  },
  resendCode: {
    color: primaryMain,
    fontWeight: '700',
    fontSize: 16,
    textAlign: 'center',
  },
});
