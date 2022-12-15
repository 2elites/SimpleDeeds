import React from 'react';

import {View, StyleSheet, Text, ScrollView} from 'react-native';
import TopTitle from '../../../components/TopTitle';
import {color43, softBlack} from '../../../ui/common/colors';
import g_styles from '../../../ui/common/styles';

const PrivayPolicy = () => {
  return (
    <View style={g_styles.container}>
      <TopTitle title={'Privacy Policy'} prevPath={'Help'} closePath="SignUp" />
      <ScrollView>
        <View style={g_styles.box}>
          <Text style={styles.title}>Types of Data We Collect</Text>
          <Text style={styles.comment}>
            Odio eu feugiat pretium nibh ipsum consequat nisl. Tempus quam
            pellentesque nec nam aliquam sem et tortor consequat. Elit eget
            gravida cum sociis natoque penatibus. Sed elementum tempus egestas
            sed sed risus. Id interdum velit laoreet id donec ultrices.
            Fermentum leo vel orci porta non pulvinar neque laoreet. In mollis
            nunc sed id semper risus in hendrerit gravida. Venenatis lectus
            magna fringilla urna porttitor rhoncus dolor purus. Erat nam at
            lectus urna duis convallis convallis. Interdum velit laoreet id
            donec ultrices tincidunt arcu. Sit amet venenatis urna cursus eget
            nunc scelerisque viverra. Purus in massa tempor nec feugiat.
            Hendrerit gravida rutrum quisque non tellus orci ac auctor augue.
            Aenean vel elit scelerisque mauris pellentesque. In mollis nunc sed
            id semper risus in hendrerit gravida. Venenatis lectus magna
            fringilla urna porttitor rhoncus.
          </Text>
          <Text style={styles.title}>Use of Your Personal Data</Text>
          <Text style={styles.comment}>
            Odio eu feugiat pretium nibh ipsum consequat nisl. Tempus quam
            pellentesque nec nam aliquam sem et tortor consequat. Elit eget
            gravida cum sociis natoque penatibus. Sed elementum tempus egestas
            sed sed risus. Id interdum velit laoreet id donec ultrices.
            Fermentum leo vel orci porta non pulvinar neque laoreet. In mollis
            nunc sed id semper risus in hendrerit gravida. Venenatis lectus
            magna fringilla urna porttitor rhoncus. In mollis nunc sed id semper
            risus in hendrerit gravida. Venenatis Odio eu feugiat pretium nibh
            ipsum consequat nisl. Tempus quam pellentesque nec nam aliquam sem
            et tortor consequat. Elit eget gravida cum sociis natoque penatibus.
            Sed elementum tempus egestas sed sed risus. Id interdum velit
            laoreet id donec ultrices. Fermentum leo vel orci porta non pulvinar
            neque laoreet. In mollis nunc sed id semper risus in hendrerit
            gravida. Venenatis lectus magna fringilla urna porttitor rhoncus. In
            mollis nunc sed id semper risus in hendrerit gravida. Venenatis
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default PrivayPolicy;

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
