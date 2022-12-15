import React from 'react';

import {View, StyleSheet, Text, ScrollView} from 'react-native';
import TopTitle from '../../../components/TopTitle';
import {color43, softBlack} from '../../../ui/common/colors';
import g_styles from '../../../ui/common/styles';

const TermsConditions = () => {
  return (
    <View style={g_styles.container}>
      <TopTitle
        title={'Terms and Conditions'}
        prevPath={'Help'}
        closePath="SignUp"
      />
      <ScrollView>
        <View style={g_styles.box}>
          <Text style={styles.title}>Introduction</Text>
          <Text style={styles.comment}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Urna id
            volutpat lacus laoreet non curabitur gravida arcu. Amet nisl purus
            in mollis nunc sed id. Elementum curabitur vitae nunc sed. A
            pellentesque sit amet porttitor eget. Ac turpis egestas integer eget
            aliquet nibh. Nibh praesent tristique magna sit amet purus gravida.
            Sagittis nisl rhoncus mattis rhoncus urna neque viverra. Volutpat
            sed cras ornare arcu dui vivamus arcu felis bibendum. Sagittis nisl
            rhoncus mattis rhoncus urna neque viverra. Volutpat sed cras ornare
            arcu dui vivamus arcu felis bibendum.
          </Text>
          <Text style={styles.title}>Accessing the Service</Text>
          <Text style={styles.comment}>
            Sagittis vitae et leo duis ut diam. Et pharetra pharetra massa
            massa. Faucibus et molestie ac feugiat. Ac feugiat sed lectus
            vestibulum. Sagittis eu volutpat odio facilisis. Venenatis urna
            cursus eget nunc scelerisque viverra mauris. Facilisi cras fermentum
            odio eu feugiat pretium nibh ipsum consequat. Etiam tempor orci eu
            lobortis elementum nibh. Quis auctor elit sed vulputate mi sit. Quis
            ipsum suspendisse ultrices gravida dictum fusce ut placerat orci.
            Suspendisse potenti nullam ac tortor vitae purus faucibus ornare
            suspendisse. Lorem sed risus ultricies tristique nulla aliquet enim
            tortor. Condimentum mattis pellentesque id nibh tortor id. Lorem sed
            risus ultricies tristique nulla aliquet enim
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default TermsConditions;

const styles = StyleSheet.create({
  title: {
    color: softBlack,
    fontSize: 23,
    fontWeight: '500',
    lineHeight: 34,
    marginTop: 10,
  },
  comment: {
    marginTop: 10,
    marginBottom: 15,
    color: color43,
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 24,
  },
});
