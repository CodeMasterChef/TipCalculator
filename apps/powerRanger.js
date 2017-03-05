import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Navigator,
    Button

} from 'react-native';
import Calculator from './calculator';
import CustomNavBar from './customNavBar';
import Settings from './settings';

export class PowerRanger extends Component {
    render() {
        return (
            <Navigator
                initialRoute={{ id: 'CalculatorPage' }}
                renderScene={this.renderScene.bind(this)}
                configureScene={(route) => {
                    if (route.sceneConfig) {
                        return route.sceneConfig;
                    }
                    return Navigator.SceneConfigs.FloatFromRight;
                }}
                navigationBar={CustomNavBar}
                configureScene={this.configureScene.bind(this)}
            />
        );
    }
    // To navigate to page based on page ID
    renderScene(route, navigator) {
        switch (route.id) {
            case 'CalculatorPage':
                return <Calculator navigator={navigator} />
                break;
            case 'SettingsPage':
                return <Settings navigator={navigator} />
                break;
            default:
                break;

        }

    }
    // config scene transition, change scene transition based on Setting
    configureScene(route, routeStack) {
        //@Todo, change to scene transition from Asynstorage vale

        return Navigator.SceneConfigs.FloatFromRight;
    }
}
module.exports = PowerRanger