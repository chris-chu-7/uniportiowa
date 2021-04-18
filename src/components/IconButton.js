import React from 'react';
import {View, StyleSheet, TouchableOpacity, Text} from 'react-native';
import Icon from 'react-native-ionicons';
import {useTheme} from '@react-navigation/native';




export function IconButton({title, style, onPress}) {
  return (

    /*
    <TouchableOpacity style={[styles.container, style]} onPress = {onPress}>
        <Icon name={name} color={'purple'} />
    </TouchableOpacity>

    */
    <TouchableOpacity>
  <Icon/>
</TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {},

});
