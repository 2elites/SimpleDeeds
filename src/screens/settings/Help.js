import React from 'react';

import {View, StyleSheet, ScrollView} from 'react-native';
import TopTitle from '../../components/TopTitle';
import {white} from '../../ui/common/colors';

import {deviceHeight} from '../../ui/common/responsive';
import HelpItem from '../../components/settings/HelpItem';

const Help = () => {
  return (
    <View style={styles.container}>
      <TopTitle title={'Help'} prevPath={'Settings'} closePath="SignUp" />
      <ScrollView>
        <View style={styles.box}>
          <HelpItem title="FAQ" link={'FAQ'} />
          <HelpItem title="Contact us" link={'ContactUs'} />
          <HelpItem title="Terms & Conditions" link={'TermsConditions'} />
          <HelpItem title="Privay Policy" link={'PrivayPolicy'} />
          <HelpItem title="About Us" link={'AboutUs'} />
        </View>
      </ScrollView>
    </View>
  );
};

export default Help;

const styles = StyleSheet.create({
  container: {
    height: deviceHeight,
    backgroundColor: white,
  },
  box: {
    paddingLeft: 20,
    paddingRight: 20,
  },
});
