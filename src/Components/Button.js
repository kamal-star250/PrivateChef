import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import {Fonts} from './Fonts';

const Button = ({title, onPress}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.5}
      onPress={onPress}
      style={styles.buttonContainer}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    width: '100%',
    height: 55,
    borderRadius: 5,
    backgroundColor: '#6DA588',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  buttonText: {
    fontFamily: Fonts.regular,
    fontSize: 16,
    fontWeight: '500',
    color: '#fff',
  },
});
export default Button;
