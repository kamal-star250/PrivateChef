import React from 'react';
import {View, Text, SafeAreaView, StyleSheet} from 'react-native';
/**
 *  All custome components and styling are imported here
 */
import {Styles} from '../../Components/CommanStyle';
import {Fonts} from '../../Components/Fonts';
/**
 * All SVG icon's are imported here.
 */
import Loader from '../../Assets/Icon/Loader.svg';

const LoadingScreen = () => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
      <View
        style={[
          Styles.containerStyle,
          {alignItems: 'center', justifyContent: 'center'},
        ]}>
        <Loader width={75} height={75} />
        <Text style={styles.textStyle}>
          Hurray! We're setting up your account. Hold on a moment pleaze!
        </Text>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  textStyle: {
    textAlign: 'center',
    fontFamily: Fonts.regular,
    fontWeight: '400',
    fontSize: 14,
    width: '60%',
    marginTop: 25,
  },
});

export {LoadingScreen};
