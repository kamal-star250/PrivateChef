import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  StyleSheet,
} from 'react-native';
import CountDown from 'react-native-countdown-component';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
/**
 *  All custome components and styling are imported here
 */
import {Styles} from '../../Components/CommanStyle';
import {Fonts} from '../../Components/Fonts';
import {Button} from '../../Components';
import StepsComponent from './StepsComponent';
import OTPInputView from '@twotalltotems/react-native-otp-input';

const SignupFourthStep = ({navigation}) => {
  const [otp, setOtp] = useState();
  const [time, setTime] = useState(10);
  useEffect(() => {
    if (time > 0) {
      setTimeout(() => {
        setTime(time - 1);
      }, 1000);
    }
  }, [time]);
  console.log(time, 'time');
  const getMinutesFromSeconds = time => {
    if (time > 0) {
      const minutes = time >= 60 ? Math.floor(time / 60) : 0;
      const seconds = Math.floor(time - minutes * 60);

      return `${minutes >= 10 ? minutes : '0' + minutes}:${
        seconds >= 10 ? seconds : '0' + seconds
      }`;
    } else {
      return <Text>00:00</Text>;
    }
  };
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
      <View style={Styles.containerStyle}>
        <StepsComponent activeStep={4} />

        <KeyboardAwareScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{flexGrow: 1}}>
          <Text style={Styles.headingTextStyle}>
            Last step! Confirm your account by entering your verification code:
          </Text>
          <OTPInputView
            style={{width: '80%', height: 100}}
            pinCount={6}
            placeholderCharacter={'.'}
            placeholderTextColor="#242424"
            autoFocusOnLoad
            codeInputFieldStyle={styles.underlineStyleBase}
            onCodeFilled={code => {
              setOtp(code);
            }}
          />

          <Text style={{paddingVertical: 10}}>
            {getMinutesFromSeconds(time)}
          </Text>
          <Text style={Styles.subHeadingStyle}>
            We sent a verification code to your email address abcdxxxx - please
            check your inbox.
          </Text>
          <View style={Styles.rowContainer}>
            <Text style={styles.notRecieveCodeText}>
              Didn’t received the code?
            </Text>
            <TouchableOpacity style={{left: 5}}>
              <Text style={styles.sendAgainText}>Let’s send it again</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.buttonContainer}>
            <Button
              title="Next"
              onPress={() => {
                navigation.navigate('LoadingScreen');
              }}
            />
          </View>
        </KeyboardAwareScrollView>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  underlineStyleBase: {
    width: 40,
    height: 40,
    borderWidth: 0,
    borderRadius: 20,
    fontFamily: Fonts.interRegular,
    fontWeight: '700',
    fontSize: 32,
    // textAlign: 'center',
    height: 70,
    color: '#242424',
  },
  sendAgainText: {
    fontFamily: Fonts.regular,
    fontWeight: '400',
    fontSize: 14,
    color: '#6DA588',
  },
  notRecieveCodeText: {
    fontFamily: Fonts.regular,
    fontWeight: '400',
    fontSize: 16,
    color: '#515361',
  },
  buttonContainer: {
    width: '100%',
    alignSelf: 'center',
    position: 'absolute',
    bottom: 0,
  },
});
export {SignupFourthStep};
