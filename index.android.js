import React, { Component } from 'react';
import { AppRegistry, View } from 'react-native';
import Router from './src/Router';

export default class fasta extends Component {
    render() {
        return (
            <View style={{ flex: 1 }}>
                <Router />
            </View>
        );
    }
}


AppRegistry.registerComponent('fasta', () => fasta);
