import React from 'react';
import {Text, TouchableOpacity, StyleSheet, View, Image} from 'react-native';
import {color41, color42, softBlue, softGray} from '../../ui/common/colors';

const downIcon = require('./../../../assets/images/dropdown.png');
const upIcon = require('./../../../assets/images/dropup.png');

const FaqItem = ({id, row, expanded, setExpanded}) => {
  console.log(id, expanded);

  const styles = StyleSheet.create({
    itemView: {
      borderColor: id === expanded ? softBlue : color41,
      borderWidth: 1,
      padding: 15,
      marginBottom: 10,
      marginTop: 10,
      borderRadius: 12,
    },
    questionView: {
      paddingBottom: 10,
      borderBottomWidth: 1,
      borderColor: color41,
    },
    questionText: {
      color: softGray,
      fontSize: 16,
      fontWeight: '500',
    },
    answerView: {
      paddingTop: 10,
    },
    answerText: {
      color: color42,
      fontSize: 14,
      fontWeight: '400',
    },
    arrowIcon: {
      position: 'absolute',
      right: 0,
    },
  });

  return (
    <View style={styles.itemView}>
      <TouchableOpacity
        style={id === expanded && styles.questionView}
        onPress={() => setExpanded(id)}>
        <Text style={styles.questionText}>{row.q}</Text>
        <Image
          source={id === expanded ? upIcon : downIcon}
          style={styles.arrowIcon}
        />
      </TouchableOpacity>
      <View style={styles.parentHr} />
      {id === expanded && (
        <View style={styles.answerView}>
          <Text style={styles.answerText}>{row.a}</Text>
        </View>
      )}
    </View>
  );
};

export default FaqItem;
