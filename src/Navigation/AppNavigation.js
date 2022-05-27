import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// import all app screens
import {
  SignupInitialScreen,
  SignupFirstStep,
  SignupSecondStep,
} from '../screens';

const Stack = createNativeStackNavigator();

const AppNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        headerMode={false}
        initialRouteName="SignupInitialScreen"
        screenOptions={{headerShown: false}}>
        <Stack.Screen
          name="SignupInitialScreen"
          component={SignupInitialScreen}
          options={{gestureEnabled: false}}
        />
        <Stack.Screen
          name="SignupFirstStep"
          component={SignupFirstStep}
          options={{gestureEnabled: false}}
        />
        <Stack.Screen
          name="SignupSecondStep"
          component={SignupSecondStep}
          options={{gestureEnabled: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
