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
/**
 *  All custome components and styling are imported here
 */
import Input from '../../Components/Input';
import Button from '../../Components/Button';
import StepsComponent from './StepsComponent';
import {Fonts} from '../../Components/Fonts';
import {Styles} from '../../Components/CommanStyle';
import EnableLocationModal from '../../Components/EnableLocationModal';
/**
 * All SVG icon's are imported here.
 */
import LocationPin from '../../Assets/Icon/LocationPin.svg';

const SignupFirstStep = ({navigation}) => {
  /**
   * Here are some variables declared to store the text-input values.
   */
  const [streetAddess, setStreetAddress] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [ZipCode, setZipCode] = useState('');
  /**
   *  isFocus variable is declared to check which TextInput is on Focus
   * locationPermissionModal variable is declared to show or hide the permission modal.
   */
  const [isFocus, setIsFocus] = useState('');
  const [locationPermissionModal, setLocationPermissionModal] = useState(false);

  /**
   * closeModal function  is declared to  close the locationPermissionModal modal.
   */
  const closeModal = () => {
    setLocationPermissionModal(false);
  };
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
      <EnableLocationModal
        modalState={locationPermissionModal}
        closeModal={closeModal}
      />
      <View style={Styles.containerStyle}>
        {/**
         * StepsComponent is a seprate component to manage the form steps
         */}
        <StepsComponent activeStep={1} />
        <KeyboardAwareScrollView showsVerticalScrollIndicator={false}>
          <Text style={Styles.headingTextStyle}>
            Let’s make your account!Where do you call home?
          </Text>
          <Text style={[Styles.subHeadingStyle, {color: '#242424'}]}>
            We just want to connect you to chefs in your area. Don’t worry, if
            you’re looking for a chef elsewhere you can notate that on your gig
            poosting.
          </Text>
          <View style={Styles.rowContainer}>
            <Text style={styles.textStyle}>Geo Search</Text>
            <TouchableOpacity
              onPress={() => {
                setLocationPermissionModal(true);
              }}>
              <Text style={styles.mapTextStyles}>Maps View</Text>
            </TouchableOpacity>
          </View>
          {/**
           * Map area
           * */}

          <TouchableOpacity onPress={() => setLocationPermissionModal(true)}>
            <ImageBackground
              borderRadius={5}
              source={require('../../Assets/Images/dummyMap.png')}
              style={styles.mapStyle}>
              <LocationPin width={80} height={50} />
            </ImageBackground>
          </TouchableOpacity>

          <Text style={[styles.textStyle, {paddingVertical: 20}]}>
            Enter Maunually
          </Text>
          {/**
           * TextInput area stared.
           */}
          <Text style={Styles.inputTitleStyle}>Street Addres</Text>
          <Input
            multiline
            placeholder="Your address"
            onFocus={() => setIsFocus('address')}
            borderWidth={isFocus == 'address' ? 0.5 : 0}
            borderColor={isFocus == 'address' ? '#6DA588' : '#EEF2FB'}
            onChangeText={text => {
              setStreetAddress(text);
            }}
          />
          <Text style={Styles.inputTitleStyle}>City</Text>
          <Input
            multiline
            placeholder="City"
            onFocus={() => setIsFocus('city')}
            borderWidth={isFocus == 'city' ? 0.5 : 0}
            borderColor={isFocus == 'city' ? '#6DA588' : '#EEF2FB'}
            onChangeText={text => {
              setCity(text);
            }}
          />
          <Text style={Styles.inputTitleStyle}>State</Text>
          <Input
            multiline
            placeholder="Your state"
            onFocus={() => setIsFocus('state')}
            borderWidth={isFocus == 'state' ? 0.5 : 0}
            borderColor={isFocus == 'state' ? '#6DA588' : '#EEF2FB'}
            onChangeText={text => {
              setState(text);
            }}
          />
          <Text style={Styles.inputTitleStyle}>Zip</Text>
          <Input
            multiline
            placeholder="Your zip"
            onFocus={() => setIsFocus('zip')}
            borderWidth={isFocus == 'zip' ? 0.5 : 0}
            borderColor={isFocus == 'zip' ? '#6DA588' : '#EEF2FB'}
            onChangeText={text => {
              setZipCode(text);
            }}
          />
          <View style={{width: '100%', alignItems: 'center', marginTop: 25}}>
            <Button
              title="Next"
              onPress={() => {
                navigation.navigate('SignupSecondStep');
              }}
            />
          </View>
        </KeyboardAwareScrollView>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 18,
    fontFamily: Fonts.regular,
    color: '#242424',
    fontWeight: '500',
  },
  mapTextStyles: {
    fontFamily: Fonts.regular,
    fontWeight: '500',
    fontSize: 12,
    color: '#9CA7B7',
  },
  mapStyle: {
    width: '100%',
    height: 170,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export {SignupFirstStep};
