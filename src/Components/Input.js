import React from 'react';
import {StyleSheet, TextInput, View} from 'react-native';
import {Fonts} from './Fonts';

const Input = ({
  placeholder,
  multiline,
  keyboardType,
  onChangeText,
  height,
  maxLength,
  editable,
  secureTextEntry,
  rightSideIcon,
  value,
  ...props
}) => {
  return (
    <View style={{width: '100%', height: 70}}>
      <View style={styles.inputContainer} {...props}>
        <TextInput
          editable={editable}
          maxLength={maxLength}
          value={value}
          multiline={multiline}
          keyboardType={keyboardType}
          secureTextEntry={secureTextEntry}
          onChangeText={onChangeText}
          placeholder={placeholder}
          placeholderTextColor={'#9CA7B7'}
          style={styles.textInputStyle}
        />
        {rightSideIcon}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    height: 55,
    width: '100%',
    backgroundColor: '#EEF2FB',
    borderRadius: 5,
    paddingHorizontal: 15,
    paddingVertical: 2,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  textInputStyle: {
    flex: 1,
    backgroundColor: '#EEF2FB',
    borderRadius: 5,
    color: '#242424',
    fontFamily: Fonts.regular,
    fontWeight: '400',
    fontSize: 14,
    paddingVertical: 2,
  },
});
export {Input};
