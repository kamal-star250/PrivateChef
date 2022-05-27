import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  StyleSheet,
  ImageBackground,
} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
// import custome files
import Input from '../../Components/Input';
import Button from '../../Components/Button';
import StepsComponent from './StepsComponent';
import {Fonts} from '../../Components/Fonts';
import {Styles} from '../../Components/CommanStyle';
import InputWithIcon from '../../Components/InputWithIcon';
//
import HidePassword from '../../Assets/Icon/HidePassword.svg';
import ShowPassword from '../../Assets/Icon/ShowPassword.svg';

const SignupSecondStep = () => {
  const [isFocus, setIsFocus] = useState('');
  const [isPasswordSecure, setIsPasswordSecure] = useState(true);
  const [reTypePasswordSecure, setReTypePassword] = useState(true);
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#E5E5E5'}}>
      <View style={Styles.containerStyle}>
        <StepsComponent activeStep={2} />
        <KeyboardAwareScrollView showsVerticalScrollIndicator={false}>
          <Text style={Styles.headingTextStyle}>
            Basic account information:
          </Text>
          <Text style={[Styles.subHeadingStyle, {color: '#242424'}]}>
            Connect with chefs and post gigs. It will just take a minute!
          </Text>
          {/*  inputs area */}
          <Text style={Styles.inputTitleStyle}>First name</Text>
          <Input
            placeholder="Legal first name"
            onFocus={() => setIsFocus('address')}
            borderWidth={isFocus == 'address' ? 0.5 : 0}
            borderColor={isFocus == 'address' ? '#6DA588' : '#EEF2FB'}
            onChangeText={text => {
              setStreetAddress(text);
            }}
          />
          <Text style={Styles.inputTitleStyle}>Last Name</Text>
          <Input
            placeholder="Legal last name"
            onFocus={() => setIsFocus('address')}
            borderWidth={isFocus == 'address' ? 0.5 : 0}
            borderColor={isFocus == 'address' ? '#6DA588' : '#EEF2FB'}
            onChangeText={text => {
              setStreetAddress(text);
            }}
          />
          <Text style={Styles.inputTitleStyle}>Email</Text>
          <Input
            placeholder="example@gmail.come"
            onFocus={() => setIsFocus('address')}
            borderWidth={isFocus == 'address' ? 0.5 : 0}
            borderColor={isFocus == 'address' ? '#6DA588' : '#EEF2FB'}
            onChangeText={text => {
              setStreetAddress(text);
            }}
          />
          <Text style={Styles.inputTitleStyle}>Phone Number</Text>
          <Input
            placeholder="Phone Number"
            onFocus={() => setIsFocus('address')}
            borderWidth={isFocus == 'address' ? 0.5 : 0}
            borderColor={isFocus == 'address' ? '#6DA588' : '#EEF2FB'}
            onChangeText={text => {
              setStreetAddress(text);
            }}
          />
          <Text style={Styles.inputTitleStyle}>Username</Text>
          <Input
            placeholder="example: Diana1212"
            onFocus={() => setIsFocus('address')}
            borderWidth={isFocus == 'address' ? 0.5 : 0}
            borderColor={isFocus == 'address' ? '#6DA588' : '#EEF2FB'}
            onChangeText={text => {
              setStreetAddress(text);
            }}
          />
          <Text style={Styles.inputTitleStyle}></Text>
          <Input
            placeholder="mm/dd/yy"
            onFocus={() => setIsFocus('address')}
            borderWidth={isFocus == 'address' ? 0.5 : 0}
            borderColor={isFocus == 'address' ? '#6DA588' : '#EEF2FB'}
            onChangeText={text => {
              setStreetAddress(text);
            }}
          />
          <Text style={Styles.inputTitleStyle}>Password</Text>
          <Input
            placeholder="**************"
            onFocus={() => setIsFocus('address')}
            borderWidth={isFocus == 'address' ? 0.5 : 0}
            borderColor={isFocus == 'address' ? '#6DA588' : '#EEF2FB'}
            onChangeText={text => {
              setStreetAddress(text);
            }}
          />
          <Text style={Styles.inputTitleStyle}>Re-type password</Text>
          <Input
            placeholder="*******"
            onFocus={() => setIsFocus('address')}
            borderWidth={isFocus == 'address' ? 0.5 : 0}
            borderColor={isFocus == 'address' ? '#6DA588' : '#EEF2FB'}
            onChangeText={text => {
              setStreetAddress(text);
            }}
          />

          <InputWithIcon
            rightSideIcon={
              isPasswordSecure ? (
                <TouchableOpacity
                  onPress={() => setIsPasswordSecure(!isPasswordSecure)}>
                  <HidePassword width={20} height={15} />
                </TouchableOpacity>
              ) : (
                <TouchableOpacity
                  onPress={() => setIsPasswordSecure(!isPasswordSecure)}>
                  <ShowPassword width={20} height={15} />
                </TouchableOpacity>
              )
            }
            secureTextEntry={isPasswordSecure ? true : false}
          />
          <InputWithIcon
            rightSideIcon={
              reTypePasswordSecure ? (
                <TouchableOpacity
                  onPress={() => setReTypePassword(!reTypePasswordSecure)}>
                  <HidePassword width={20} height={15} />
                </TouchableOpacity>
              ) : (
                <TouchableOpacity
                  onPress={() => setReTypePassword(!reTypePasswordSecure)}>
                  <ShowPassword width={20} height={15} />
                </TouchableOpacity>
              )
            }
            secureTextEntry={reTypePasswordSecure ? true : false}
          />
        </KeyboardAwareScrollView>
      </View>
    </SafeAreaView>
  );
};

export {SignupSecondStep};
