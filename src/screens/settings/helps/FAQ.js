import React, {useState} from 'react';

import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import TopTitle from '../../../components/TopTitle';
import {primaryMain, white} from '../../../ui/common/colors';
import {deviceHeight} from '../../../ui/common/responsive';
import FaqItem from '../../../components/settings/FaqItem';
import g_styles from '../../../ui/common/styles';

const FAQ = () => {
  const types = ['General', 'Login', 'Account', 'Simple Deeds'];
  const [type, setType] = useState(types[0]);

  const [expanded, setExpanded] = useState(0);

  const faqs = [
    {
      q: 'What is Simple Deeds?',
      a: 'Simple Deeds.....',
      slug: 'General',
    },
    {
      q: 'How to use Simple Deeds?',
      a: 'Simple Deeds.....',
      slug: 'General',
    },
    {
      q: 'How to sell real estate on Acara?',
      a: 'Simple Deeds.....',
      slug: 'General',
    },
    {
      q: 'How can I upload documentation?',
      a: 'Simple Deeds.....',
      slug: 'Login',
    },
    {
      q: 'Is there a free tips to use this app',
      a: 'Simple Deeds.....',
      slug: 'Login',
    },
    {
      q: 'Is Simple Deeds free to use?',
      a: 'Simple Deeds.....',
      slug: 'Account',
    },
  ];

  return (
    <View style={styles.container}>
      <TopTitle title={'FAQ'} prevPath={'Help'} closePath="SignUp" />
      <ScrollView>
        <View style={styles.box}>
          <ScrollView horizontal={true}>
            {types.map((row, key) => {
              return (
                <TouchableOpacity
                  key={key}
                  style={[styles.typeItem, type === row && styles.selectedType]}
                  onPress={() => setType(row)}>
                  <Text
                    style={[
                      styles.typeText,
                      type === row && styles.selectedTypeText,
                    ]}>
                    {row}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </ScrollView>
          <View style={g_styles.mt_20}>
            {faqs.map((row, key) => {
              if (row.slug !== type) {
                return false;
              }
              return (
                <FaqItem
                  key={key}
                  id={key}
                  row={row}
                  expanded={expanded}
                  setExpanded={setExpanded}
                />
              );
            })}
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default FAQ;

const styles = StyleSheet.create({
  container: {
    height: deviceHeight,
    backgroundColor: white,
  },
  box: {
    paddingLeft: 20,
    paddingRight: 20,
  },
  typeItem: {
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 5,
    paddingBottom: 5,
    borderColor: primaryMain,
    borderWidth: 2,
    borderRadius: 100,
    marginRight: 10,
  },
  typeText: {
    color: primaryMain,
    fontSize: 16,
    fontWeight: '500',
    lineHeight: 24,
  },
  selectedType: {
    backgroundColor: primaryMain,
  },
  selectedTypeText: {
    color: white,
  },
});
