import React from 'react';
import {StyleSheet, TextInput, View, Text} from 'react-native';
import {Fonts} from './Fonts';

const InputWithIcon = ({
  leftSideIcon,
  rightSideIcon,
  placeholder,
  placeholderTextColor,
  onChangeText,
  secureTextEntry,
}) => {
  return <View style={{width: '100%', height: 70}}></View>;
};

const styles = StyleSheet.create({
  inputContainer: {
    height: 55,
    width: '100%',
    backgroundColor: '#EEF2FB',
    borderRadius: 5,
    paddingHorizontal: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  textInputStyle: {
    flex: 1,
    backgroundColor: '#EEF2FB',
    borderRadius: 5,
    paddingHorizontal: 15,
    color: '#242424',
    fontFamily: Fonts.regular,
    fontWeight: '400',
    fontSize: 14,
  },
});

export default InputWithIcon;
