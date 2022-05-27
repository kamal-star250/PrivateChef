import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  StyleSheet,
  Dimensions,
} from 'react-native';
/**
 *  All custome components and styling are imported here
 */
import {Styles} from '../../Components/CommanStyle';
import {Fonts} from '../../Components/Fonts';
import Button from '../../Components/Button';
/**
 * All SVG icon's are imported here
 */
import PlatterIcon from '../../Assets/Icon/Platter.svg';
import WelcomeIcon from '../../Assets/Icon/Welcome.svg';
import RightIcon from '../../Assets/Icon/RightIcon.svg';

//
const {height} = Dimensions.get('window');

const SignupInitialScreen = ({navigation}) => {
  /**
   * isChef variabale is defined to check user is Chef or user need a Chef
   */
  const [isChef, setIsChef] = useState(true);
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
      <View style={Styles.containerStyle}>
        <Text style={Styles.headingTextStyle}>
          Let’s get you to the right place.
        </Text>
        <Text style={styles.subHeadingStyle}>Which describes you ?</Text>

        <View style={styles.boxRowContainer}>
          {/* i'm chef box */}
          <TouchableOpacity
            onPress={() => {
              setIsChef(!isChef);
            }}
            activeOpacity={0.5}
            style={styles.boxContainer}>
            <View style={styles.boxStyle}>
              {isChef ? (
                <View style={styles.circle}>
                  <RightIcon width={12} height={9} style={{color: '#fff'}} />
                </View>
              ) : null}
              <View style={[styles.PlatterContainer]}>
                <PlatterIcon width={80} height={55} style={{color: '#fff'}} />
              </View>
            </View>
            <Text style={styles.chefTextStyle}>I’m a chef</Text>
          </TouchableOpacity>
          {/* i need a chef box */}
          <TouchableOpacity
            onPress={() => {
              setIsChef(!isChef);
            }}
            activeOpacity={0.5}
            style={styles.boxContainer}>
            <View style={[styles.boxStyle, {backgroundColor: '#E69394'}]}>
              {!isChef ? (
                <View style={styles.circle}>
                  <RightIcon width={12} height={9} style={{color: '#fff'}} />
                </View>
              ) : null}
              <View style={[styles.PlatterContainer]}>
                <WelcomeIcon width={80} height={55} style={{color: '#fff'}} />
              </View>
            </View>
            <Text style={styles.chefTextStyle}>I need a chef</Text>
          </TouchableOpacity>
        </View>
        {/* Next button component  */}
        <View style={styles.buttonContainer}>
          <Button
            title="Next"
            onPress={() => {
              navigation.navigate('SignupFirstStep');
            }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  circle: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: '#6DA588',
    right: 0,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: -12,
    position: 'absolute',
  },

  subHeadingStyle: {
    fontFamily: Fonts.regular,
    fontSize: 16,
    fontWeight: '400',
    color: '#525252',
    paddingVertical: 15,
  },
  boxRowContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: height / 2.6,
    paddingVertical: 20,
  },
  boxContainer: {
    width: '47%',
    height: '100%',
    alignItems: 'center',
  },
  boxStyle: {
    width: '100%',
    height: '100%',
    backgroundColor: '#6DA588',
    borderRadius: 5,
  },
  PlatterContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: -20,
  },
  chefTextStyle: {
    fontFamily: Fonts.regular,
    fontSize: 14,
    color: '#9CA7B7',
    paddingVertical: 20,
  },
  buttonContainer: {
    width: '100%',
    position: 'absolute',
    bottom: 10,
    alignSelf: 'center',
  },
});

export {SignupInitialScreen};
