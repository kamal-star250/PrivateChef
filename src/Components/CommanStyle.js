import {StyleSheet} from 'react-native';
import {Fonts} from './Fonts';

export const Styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
    padding: 15,
    backgroundColor: '#E5E5E5',
  },
  headingTextStyle: {
    fontFamily: Fonts.regular,
    color: '#242424',
    fontSize: 24,
    fontWeight: '500',
    paddingVertical: 10,
  },
  subHeadingStyle: {
    fontFamily: Fonts.regular,
    fontSize: 16,
    fontWeight: '400',
    color: '#525252',
    paddingVertical: 10,
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 5,
  },
  inputTitleStyle: {
    fontFamily: Fonts.regular,
    color: '#9CA7B7',
    fontSize: 14,
    fontWeight: '400',
    paddingVertical: 5,
  },
});
