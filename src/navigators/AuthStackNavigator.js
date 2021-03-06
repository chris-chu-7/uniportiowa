import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {LoginScreen} from '../screens/loginScreen'
import {RegistrationScreen} from '../screens/RegistrationScreen';

const RootStack = createStackNavigator();
const AuthStack = createStackNavigator();

export function AuthStackNavigator() {
  return (

      <AuthStack.Navigator screenOptions={{
          headerShown: false,
        }}>
        <AuthStack.Screen name = {'Login'} component={LoginScreen} />
        <AuthStack.Screen name = {'Registration'} component={RegistrationScreen} />
      </AuthStack.Navigator>

  )
}
