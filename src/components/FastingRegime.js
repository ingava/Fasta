import React from 'react';
import { View } from 'react-native';
import { InstructionText, Card, CardSection, Button } from './common';

const FastingRegime = () => {
    return (
        <View>
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
    )
}

export default FastingRegime
