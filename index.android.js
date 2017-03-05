import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator,
  Button

} from 'react-native';
import Calculator from './apps/calculator.js';
import PowerRanger from './apps/powerRanger.js';
import Settings from './apps/settings.js';
export default class TipCalculator extends Component {
  render() {
    return (
      <PowerRanger />



    );
  }
}

AppRegistry.registerComponent('TipCalculator', () => TipCalculator);
