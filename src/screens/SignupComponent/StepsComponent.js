import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Fonts} from '../../Components/Fonts';

const StepsComponent = ({activeStep}) => {
  return (
    <View style={{width: '100%', height: 80}}>
      <View style={styles.rowContainer}>
        <Text style={styles.textStyle}>Step 1</Text>
        <Text
          style={[
            styles.textStyle,
            {color: activeStep > 1 ? '#6DA588' : '#B3BCC8'},
          ]}>
          Step 2
        </Text>
        <Text
          style={[
            styles.textStyle,
            {color: activeStep > 2 ? '#6DA588' : '#B3BCC8'},
          ]}>
          Step 3
        </Text>
        <Text
          style={[
            styles.textStyle,
            {color: activeStep > 3 ? '#6DA588' : '#B3BCC8'},
          ]}>
          Step 4
        </Text>
      </View>
      <View
        style={{
          width:
            activeStep == 1
              ? '22%'
              : activeStep == 2
              ? '50%'
              : activeStep == 3
              ? '78%'
              : activeStep == 4
              ? '100%'
              : '100%',
          marginTop: 10,
          height: 5,
          borderRadius: 5,
          backgroundColor: '#6DA588',
        }}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontFamily: Fonts.regular,
    fontSize: 14,
    fontWeight: '500',
    color: '#6DA588',
    paddingVertical: 15,
  },
  rowContainer: {
    width: '95%',
    flexDirection: 'row',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});

export default StepsComponent;
