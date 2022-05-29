import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Modal from 'react-native-modal';
/**
 *  All custome components and styling are imported here
 */
import Button from './Button';
import {Fonts} from './Fonts';
/**
 * All SVG icon's are imported here
 */
import LocationPin from '../Assets/Icon/LocationPin.svg';

const EnableLocationModal = ({modalState, closeModal}) => {
  return (
    <Modal
      isVisible={modalState}
      onBackButtonPress={closeModal}
      onBackdropPress={closeModal}>
      <View style={styles.mainContainer}>
        <View style={styles.whiteAreaContainer}>
          <View style={{paddingVertical: 15}}>
            <LocationPin width={100} height={70} />
          </View>
          <Text style={styles.enableTextStyle}>Enable location</Text>
          <Text style={styles.textStyle}>
            To share your location, please enable on your phone or device
          </Text>
          <View style={{width: '50%', marginTop: 20}}>
            <Button title="Enable now" onPress={closeModal} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  whiteAreaContainer: {
    width: '100%',
    height: 300,
    backgroundColor: '#FFFFFF',
    borderRadius: 5,
    alignItems: 'center',
    padding: 10,
  },
  enableTextStyle: {
    fontFamily: Fonts.regular,
    fontWeight: '500',
    color: '#242424',
    fontSize: 18,
  },
  textStyle: {
    fontFamily: Fonts.regular,
    fontSize: 14,
    fontWeight: '400',
    color: '#7C7E89',
    textAlign: 'center',
    width: '80%',
    paddingVertical: 10,
  },
});
export {EnableLocationModal};
