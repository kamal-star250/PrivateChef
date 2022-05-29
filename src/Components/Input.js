import React from 'react';
import {Text, StyleSheet, TextInput, View} from 'react-native';
import {Fonts} from './Fonts';

const Input = ({
  placeholder,
  multiline,
  keyboardType,
  onChangeText,
  height,
  maxLength,
  ...props
}) => {
  return (
    <View style={{width: '100%', height: 70}}>
      <TextInput
        onChangeText={onChangeText}
        multiline={multiline ? true : false}
        placeholder={placeholder}
        keyboardType={keyboardType}
        maxLength={maxLength}
        placeholderTextColor={'#9CA7B7'}
        style={[
          styles.textInputStyle,
          {
            height: height ? height : 'auto',
          },
        ]}
        {...props}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  textInputStyle: {
    minHeight: 55,
    width: '100%',
    backgroundColor: '#EEF2FB',
    borderRadius: 5,
    paddingHorizontal: 15,
    color: '#242424',
    fontFamily: Fonts.regular,
    fontWeight: '400',
    fontSize: 14,
  },
});
export {Input};
