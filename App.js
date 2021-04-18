import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {RegistrationScreen} from './src/screens/RegistrationScreen';
import {AuthStackNavigator} from './src/navigators/AuthStackNavigator';
import {lightTheme} from './src/themes/light';


const RootStack = createStackNavigator();
const AuthStack = createStackNavigator();

export default function () {
  return (

      <NavigationContainer theme = {lightTheme}>
        <RootStack.Navigator
          screenOptions = {{
            headerShown: false,
          }}>
          <RootStack.Screen name = {'RootStack'} component = {AuthStackNavigator} />
        </RootStack.Navigator>
      </NavigationContainer>

  )
}
