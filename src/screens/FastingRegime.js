import React from 'react';
import { View } from 'react-native';
import { InstructionText, Card, CardSection, Button } from '../components/common/index';
import { Actions } from 'react-native-router-flux';

const FastingRegime = () => {
    const onButtonPress = () => {
        Actions.fastingStart()
    };
    return (
        <View>
            <InstructionText>Choose your fasting interval</InstructionText>
            <Card>
                <CardSection>
                    <Button onPress={onButtonPress}>14 - 10</Button>
                </CardSection>
                <CardSection>
                    <Button onPress={() => {}}>16 - 8</Button>
                </CardSection>
                <CardSection>
                    <Button onPress={() => {}}>18 - 6</Button>
                </CardSection>
                <CardSection>
                    <Button onPress={() => {}}>24 hours</Button>
                </CardSection>
            </Card>
        </View>
    )
}

export default FastingRegime
