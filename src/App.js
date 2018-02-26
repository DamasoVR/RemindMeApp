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
import { StackNavigator } from 'react-navigation';
import IntroScreen from './screens/introscreen';
import TasksScreen from './screens/TasksScreen';
//Or Export this

const ScreenStack = StackNavigator(
  {
    Home: {
      screen: IntroScreen
    },
    Tasks: {
      screen: TasksScreen
    }
  },
  {
    headerMode: 'none'
  }
);

export default class App extends Component<Props> {
  render(){
    return(
      <ScreenStack/>
    )
  }
}

const styles = StyleSheet.create({
  mainAppContainer: {
    flex: 1,
    backgroundColor: 'orange'
  }
});
//{}
