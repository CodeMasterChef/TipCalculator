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

export default class TipCalculator extends Component {
  render() {
    return (
      <Navigator
        initialRoute={{ id: 'CalculatorPage', title: 'Tip Calculator Page' }}
        renderScene={(route, navigator) => {
          switch (route.id) {
            case 'CalculatorPage':
              return <Calculator navigator={navigator} />
              break;
            case 'BlankPage':
              return (
                <View>
                  <Button
                    style={{ width: 10, flex: 0.1 }}
                    title="Go Back"
                    onPress={() => navigator.pop({ id: "CalculatorPage" })}
                  />

                  <View style={{ flexDirection: 'column' }}>
                    <Text>Fck ya !!! I'm a blank page, I have nothing !</Text>
                  </View>

                </View>
              )
              break;
            default:
          }
        }}
      />


    );
  }
}

AppRegistry.registerComponent('TipCalculator', () => TipCalculator);
