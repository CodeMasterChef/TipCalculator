import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Navigator,
    Button,
    AsyncStorage

} from 'react-native';
import Calculator from './calculator.js';
import CustomNavBar from './customNavBar.js';
import Settings from './settings.js';

export class PowerRanger extends Component {
    constructor(props) {
        super(props);
        this.state = {
            transition: null
        }
    }
    render() {
        return (
            <Navigator
                initialRoute={{ id: 'CalculatorPage', transition: 'FloatFromRight' }}
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
        this.getSceneTransition();
        console.log("transition", this.state.transition);

        switch (this.state.transition) {
            case 'FloatFromLeft':
                return Navigator.SceneConfigs.FloatFromLeft;
                break;
            case 'FloatFromBottom':
                return Navigator.SceneConfigs.FloatFromBottom;
                break;
            case 'FloatFromBottomAndroid':
                return Navigator.SceneConfigs.FloatFromBottomAndroid;
                break;
            case 'SwipeFromLeft':
                return Navigator.SceneConfigs.SwipeFromLeft;
                break;
            case 'HorizontalSwipeJump':
                return Navigator.SceneConfigs.HorizontalSwipeJump;
                break;
            case 'HorizontalSwipeJumpFromRight':
                return Navigator.SceneConfigs.HorizontalSwipeJumpFromRight;
                break;
            default:
                return Navigator.SceneConfigs.FloatFromRight;
                break;

        }


    }
    async getSceneTransition() {
        try {
            var sceneTransitionValue = await AsyncStorage.getItem("SCENE_SELECTED");
            this.setState({
                transition: sceneTransitionValue
            })
        } catch (error) {
            console.log("Hmm, something when wrong when get data..." + error);
        }
    }
}
module.exports = PowerRanger