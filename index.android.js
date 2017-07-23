import React, { Component } from 'react';
import { AppRegistry, View, Text } from 'react-native';
import { Header, Card, CardSection, Button, InstructionText } from './src/components/common';

export default class fasta extends Component {
    render() {
        return (

            <View style={{ flex: 1 }}>
                <Header>Fasta</Header>
                <InstructionText>Choose your fasting interval</InstructionText>
                <Card>
                    <CardSection>
                        <Button onPress={() => {}}>16 - 8</Button>
                    </CardSection>
                    <CardSection>
                        <Button onPress={() => {}}>14 - 10</Button>
                    </CardSection>
                    <CardSection>
                        <Button onPress={() => {}}>18 - 6</Button>
                    </CardSection>
                </Card>
            </View>

        );
    }
}


AppRegistry.registerComponent('fasta', () => fasta);
