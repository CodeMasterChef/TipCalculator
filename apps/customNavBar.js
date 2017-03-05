import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Navigator,
    Button,
    TouchableOpacity

} from 'react-native';

var NavigationBarRouteMapper = {
    LeftButton: (route, navigator, index, navState) => {
        return
    },
    RightButton: (route, navigator, index, navState) => {
        if (route.id != 'CalculatorPage') {
            return (
                <TouchableOpacity onPress={() => {
                    navigator.pop()
                }

                }>
                    <Text>Save</Text>
                </TouchableOpacity>
            );
        } else {
            return (
                <TouchableOpacity onPress={() =>
                    navigator.push({ id: 'SettingsPage' })
                }>
                    <Text>Settings</Text>
                </TouchableOpacity>
            );
        }
    },
    Title: (route, navigator, index, navState) => {
        return;
    },
}


// export this component
module.exports = (
    <Navigator.NavigationBar
        routeMapper={NavigationBarRouteMapper} />
)

