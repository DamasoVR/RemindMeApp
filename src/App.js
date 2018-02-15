/**
* IntroScreen
*
**/

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import StackNavigator from 'react-native-navigation';
import IntroScreen from './screens/introscreen'



//Screens
const ScreenStack = StackNavigator(
  {
  Home: {
    screen: IntroScreen
  }

});

export default class App extends {
  render(){
    return(
      <ScreenStack/>
    )
  }
}
