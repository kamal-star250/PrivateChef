import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TextInput,
  StyleSheet,
} from 'react-native';
/**
 *  All custome components and styling are imported here.
 */
import {Button} from '../../Components';
import {Styles} from '../../Components/CommanStyle';
import {Fonts} from '../../Components/Fonts';
import StepsComponent from './StepsComponent';

const SignupThirdStep = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
      <View style={Styles.containerStyle}>
        <StepsComponent activeStep={3} />
        <ScrollView showsVerticalScrollIndicator={false}>
          <Text style={Styles.headingTextStyle}>Contract digital sign:</Text>
          <Text style={[Styles.subHeadingStyle, {color: '#242424'}]}>
            We want to be sure you understand how we work. In a nutshell we
            created this custom platform so that YOU can easily find a fabulous
            conscious cuisine chef who aligns with your values and lifestyle.
            Chefs are vetted by us with a big application, proof of experience,
            and background checks - but ultimately they work for themselves as
            independent contractors. It’s up to you and your chef to communicate
            and clarify all terms of your agreement. We create the space - you
            fill it!
          </Text>
          <View style={styles.contractTextContainer}>
            <Text style={styles.contractText}>Insert Scroll Down Contract</Text>
          </View>
          <Text
            style={[
              styles.contractText,
              {color: '#7C7E89', paddingVertical: 15},
            ]}>
            Please write your legal name here
          </Text>
          <TextInput
            placeholder="Arma Yoga"
            placeholderTextColor={'#9CA7B7'}
            textAlignVertical="center"
            style={styles.inputStyle}
          />
          <View style={{alignItems: 'center', marginTop: 20}}>
            <Button
              title="Next"
              onPress={() => {
                navigation.navigate('SignupFourthStep');
              }}
            />
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  contractTextContainer: {
    width: '100%',
    height: 85,
    borderRadius: 5,
    borderColor: '#E83A3A',
    borderWidth: 0.5,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  contractText: {
    fontFamily: Fonts.regular,
    color: '#E83A3A',
    fontWeight: '400',
    fontSize: 13,
  },
  inputStyle: {
    width: '100%',
    height: 100,
    borderRadius: 5,
    backgroundColor: '#EEF2FB',
    textAlign: 'center',
    fontFamily: Fonts.notoRegular,
    fontWeight: '700',
    fontSize: 24,
    color: '#242424',
  },
});

export {SignupThirdStep};
