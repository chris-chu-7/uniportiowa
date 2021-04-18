import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {Heading} from '../components/Heading'
import {Input} from '../components/Input'
import {FilledButton} from '../components/FilledButton'
import {TextButton} from '../components/TextButton'
import {IconButton} from '../components/IconButton'

import {Error} from '../components/Error'

export function RegistrationScreen() {
  return(
    <View style = {styles.container}>
    <Heading>REGISTRATION</Heading>
    <IconButton
      style = {styles.closeIcon}
      name = {'ios-add'}
      onPress = {() => {
      navigation.pop();
    }} />
    <Error error={''}/>
    <Input
      style = {styles.input}
      placeholder={'Email'}
      keyboardType = {'email-address'}
    />
    <Input
      style = {styles.input}
      placeholder={'Password'}
      secureTextEntry
    />
    <FilledButton
      title = {'Register'}
      style = {styles.loginButton}
      onPress = {() => {}}
      />
      <TextButton
        title = {"Don't have an account? Create one"}
        onPress={() => {}}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    paddingTop: 120,
    alignItems: 'center',
  },
  title: {
    marginBottom: 48,
  },
  input: {
    marginVertical: 8,
  },
  loginButton: {
    marginVertical: 20,
  },
  closeIcon: {
    position: 'absolute',
    top: 60,
    right: 16
  }
});
