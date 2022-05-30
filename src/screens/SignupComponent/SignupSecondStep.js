import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  TextInput,
  Image,
} from 'react-native';
import moment from 'moment';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
/**
 *  All custome components and styling are imported here
 */
import StepsComponent from './StepsComponent';
import {Fonts} from '../../Components/Fonts';
import {Styles} from '../../Components/CommanStyle';
import {Input, Button, InputErros} from '../../Components';
import CountryList from './CountryList';
/**
 * All SVG icon's are imported here.
 */
import HidePassword from '../../Assets/Icon/HidePassword.svg';
import ShowPassword from '../../Assets/Icon/ShowPassword.svg';
import Calendar from '../../Assets/Icon/Calendar.svg';

const SignupSecondStep = ({navigation}) => {
  /**
   * Here are some variables declared to store the text-input values.
   */
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [userName, setUserName] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState();
  const [password, setPassword] = useState('');
  const [rePassword, setRePassword] = useState('');

  const [passwordError, setPasswordError] = useState(false);
  const [rePasswordError, setRePasswordError] = useState(false);
  const [passwordNotMatch, setPasswordNotMatch] = useState(false);
  /**
   * isFocus variable is declared to check which TextInput is on Focus
   * ispassword secure and reTypePasswordSecure variables are declared to show or hide the password in input fields
   */
  const [isFocus, setIsFocus] = useState('');
  const [isPasswordSecure, setIsPasswordSecure] = useState(true);
  const [reTypePasswordSecure, setReTypePassword] = useState(true);
  /**
   *
   */
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [showCountryList, setShowCountryList] = useState(false);
  const [selectedCountry, setselectedCountry] = useState({
    id: 0,
    countryCode: '+62',
    countryName: 'Indonesia',
    countryFlag: require('../../Assets/Images/Indonesia.png'),
  });

  /**
   * handleConfirm function will take the date after that it will change the in  DD/MM/YYY formait
   */
  const handleConfirm = date => {
    const changeFormait = moment(date).format('DD/MM/YYYY');
    setDateOfBirth(changeFormait);
    setDatePickerVisibility(false);
  };
  /**
   * formValidation function  is declared to validate empty text-field
   */
  const formValidation = () => {
    if (password == '') {
      setPasswordError(true);
    } else if (rePassword == '') {
      setRePasswordError(true);
    } else if (password != rePassword) {
      setPasswordNotMatch(true);
    } else {
      setPasswordNotMatch(false);
      navigation.navigate('SignupThirdStep');
    }
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={() => {
          setDatePickerVisibility(false);
        }}
      />
      <View style={Styles.containerStyle}>
        {/**
         * StepsComponent is a seprate component to manage the form steps
         */}
        <StepsComponent activeStep={2} />
        <KeyboardAwareScrollView
          showsVerticalScrollIndicator={false}
          scrollEnabled={showCountryList ? false : true}>
          <Text style={Styles.headingTextStyle}>
            Basic account information:
          </Text>
          <Text style={[Styles.subHeadingStyle, {color: '#242424'}]}>
            Connect with chefs and post gigs. It will just take a minute!
          </Text>
          {/**
           * First name TextInput with title.
           */}
          <Text style={Styles.inputTitleStyle}>First name</Text>
          <Input
            placeholder="Legal first name"
            onFocus={() => setIsFocus('firstName')}
            borderWidth={isFocus == 'firstName' ? 0.5 : 0}
            borderColor={isFocus == 'firstName' ? '#6DA588' : '#EEF2FB'}
            onChangeText={text => {
              setFirstName(text);
            }}
          />
          {/**
           * Last name TextInput with title.
           */}
          <Text style={Styles.inputTitleStyle}>Last Name</Text>
          <Input
            placeholder="Legal last name"
            onFocus={() => setIsFocus('lastName')}
            borderWidth={isFocus == 'lastName' ? 0.5 : 0}
            borderColor={isFocus == 'lastName' ? '#6DA588' : '#EEF2FB'}
            onChangeText={text => {
              setLastName(text);
            }}
          />
          {/**
           * Email TextInput with title.
           */}
          <Text style={Styles.inputTitleStyle}>Email</Text>
          <Input
            placeholder="example@gmail.come"
            onFocus={() => setIsFocus('email')}
            borderWidth={isFocus == 'email' ? 0.5 : 0}
            borderColor={isFocus == 'email' ? '#6DA588' : '#EEF2FB'}
            onChangeText={text => {
              setEmail(text);
            }}
          />
          {/**
           * Phone Number TextInput with country code and country flag.
           */}
          <Text style={Styles.inputTitleStyle}>Phone Number</Text>
          <View style={styles.phoneInputContainer}>
            <TouchableOpacity
              onPress={() => {
                setShowCountryList(!showCountryList);
              }}>
              <Text>{selectedCountry.countryCode} </Text>
            </TouchableOpacity>
            <TextInput
              keyboardType="numeric"
              maxLength={10}
              style={styles.phoneInputStyle}
              placeholder="XXXXXXXXXX"
              placeholderTextColor={'#9CA7B7'}
              onChangeText={text => setPhoneNumber(text)}
              onFocus={() => {
                setShowCountryList(false);
              }}
            />
            <TouchableOpacity
              onPress={() => {
                setShowCountryList(!showCountryList);
              }}>
              <Image
                source={selectedCountry.countryFlag}
                style={styles.flagImageStyle}
              />
            </TouchableOpacity>
          </View>
          {/**
           * When user press on country code or country flag the this area will show to choose the country.
           */}
          {showCountryList ? (
            <View style={styles.countryListContainer}>
              <ScrollView>
                {CountryList.map(item => {
                  return (
                    <TouchableOpacity
                      onPress={() => {
                        setShowCountryList(false);
                        setselectedCountry(item);
                      }}
                      style={styles.countryCodeRow}>
                      <View
                        style={{flexDirection: 'row', alignItems: 'center'}}>
                        <Text style={styles.countryCodeText}>
                          {item.countryCode}
                        </Text>
                        <Text
                          style={[
                            styles.countryCodeText,
                            {left: 15, color: '#9CA7B7'},
                          ]}>
                          {item.countryName}
                        </Text>
                      </View>
                      <Image
                        source={item.countryFlag}
                        style={styles.flagImageStyle}
                      />
                    </TouchableOpacity>
                  );
                })}
              </ScrollView>
            </View>
          ) : null}
          {/* Username */}
          <Text style={Styles.inputTitleStyle}>Username</Text>
          <Input
            placeholder="example: Diana1212"
            onFocus={() => setIsFocus('userName')}
            borderWidth={isFocus == 'userName' ? 0.5 : 0}
            borderColor={isFocus == 'userName' ? '#6DA588' : '#EEF2FB'}
            onChangeText={text => {
              setUserName(text);
            }}
          />
          {/* Date of birth */}
          <Text style={Styles.inputTitleStyle}>Date of birth</Text>
          <TouchableOpacity onPress={() => setDatePickerVisibility(true)}>
            <Input
              maxLength={10}
              editable={false}
              value={dateOfBirth}
              placeholder={'mm/dd/yy'}
              rightSideIcon={<Calendar width={20} height={15} />}
            />
          </TouchableOpacity>
          {/**
           * Password field with hide or show password  icon
           */}
          <Text style={Styles.inputTitleStyle}>Password</Text>
          <Input
            maxLength={10}
            placeholder={'**************'}
            onFocus={() => setIsFocus('password')}
            borderWidth={isFocus == 'password' ? 0.5 : 0}
            borderColor={isFocus == 'password' ? '#6DA588' : '#EEF2FB'}
            onChangeText={text => {
              setPassword(text);
              setPasswordError(false);
            }}
            secureTextEntry={isPasswordSecure ? true : false}
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
          />
          {passwordError ? (
            <InputErros message={'Please enter your password'} />
          ) : null}
          {/* Re-type password field with hide or show password  icon */}
          <Text style={Styles.inputTitleStyle}>Re-type password</Text>
          <Input
            maxLength={10}
            placeholder={'**************'}
            onFocus={() => setIsFocus('rePassword')}
            borderWidth={isFocus == 'rePassword' ? 0.5 : 0}
            borderColor={isFocus == 'rePassword' ? '#6DA588' : '#EEF2FB'}
            onChangeText={text => {
              setRePassword(text);
              setRePasswordError(false);
            }}
            secureTextEntry={reTypePasswordSecure ? true : false}
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
          />
          {rePasswordError ? (
            <InputErros message={'Please retype your password'} />
          ) : null}
          {passwordNotMatch ? (
            <InputErros
              message={
                'passwords do not match - please retype and be sure they match'
              }
            />
          ) : null}
          <Text style={styles.policyText}>
            By selecting the next button below to continue the sign-up process,
            I agree to More Pleaze's
            <Text style={{color: '#525252'}}>Terms of Service </Text> (
            <Text style={{color: '#3781FC'}}>link</Text>) and
            <Text style={{color: '#525252'}}> Privacy Policy </Text> (
            <Text style={{color: '#3781FC'}}>link</Text>).
          </Text>
          <View style={{alignItems: 'center', marginTop: 20}}>
            <Button title="Next" onPress={() => formValidation()} />
          </View>
        </KeyboardAwareScrollView>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  phoneInputContainer: {
    height: 55,
    width: '100%',
    backgroundColor: '#EEF2FB',
    borderRadius: 5,
    paddingHorizontal: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  phoneInputStyle: {
    flex: 1,
    paddingHorizontal: 15,
    fontFamily: Fonts.regular,
    fontSize: 14,
    fontWeight: '400',
    color: '#242424',
    top: 2,
  },
  flagImageStyle: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
  },
  countryListContainer: {
    width: '95%',
    margin: 5,
    height: 160,
    backgroundColor: '#EEF2FB',
    borderRadius: 5,
    alignSelf: 'center',
    overflow: 'hidden',
  },
  countryCodeRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    borderBottomWidth: 0.5,
    borderBottomColor: '#E8EAFE',
    height: 55,
    backgroundColor: '#EEF2FB',
  },
  countryCodeText: {
    fontFamily: Fonts.regular,
    fontSize: 14,
    fontWeight: '400',
    color: '#242424',
  },
  policyText: {
    fontFamily: Fonts.regular,
    fontSize: 12,
    fontWeight: '500',
    color: '#A5AEBC',
    textAlign: 'center',
    paddingVertical: 10,
  },
});
export {SignupSecondStep};
