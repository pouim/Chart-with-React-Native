import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Header from './Header';

const TransGroup = (props) => {
  return (
    <View style={styles.transGroup}>
      <Text style={styles.transGroupTitle}>{props.date}</Text>
      {props.children}
    </View>
  );
};

const styles = StyleSheet.create({
  transGroup: {
    backgroundColor: 'transparent',
    marginVertical: 5,
    padding: 8,
  },
  transGroupTitle: {
    fontFamily: 'IRANSans(FaNum)',
    fontWeight: 'bold',
    color: '#333333',
    fontSize: 10,
    marginBottom: 16,
  },
});

export default TransGroup;
