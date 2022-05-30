import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Fonts} from './Fonts';

const InputErros = ({message}) => {
  return (
    <View style={{width: '100%', paddingHorizontal: 5}}>
      <Text style={styles.textStyle}>{message}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontFamily: Fonts.regular,
    fontWeight: '400',
    fontSize: 12,
    color: '#E83A3A',
  },
});
export {InputErros};
