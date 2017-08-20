import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View } from 'react-native';
import { InstructionText, Card, CardSection, Button } from '../components/common/index';
import { Actions } from 'react-native-router-flux';
import { selectRegime } from '../actions/FastingRegime';

class FastingRegime extends Component {
    constructor(props) {
        super(props);

        this.handleButtonPress = this.handleButtonPress.bind(this);
    }

    handleButtonPress(event) {
        this.props.selectRegime(event.target.value);
        Actions.fastingStart()
    };
    render() {
        return (
            <View>
                <InstructionText>Choose your fasting interval</InstructionText>
                <Card>
                    <CardSection>
                        <Button value={14} onPress={this.handleButtonPress}>14 hours</Button>
                    </CardSection>
                    <CardSection>
                        <Button value={16} onPress={this.handleButtonPress}>16 hours</Button>
                    </CardSection>
                    <CardSection>
                        <Button value={18} onPress={this.handleButtonPress}>18 hours</Button>
                    </CardSection>
                    <CardSection>
                        <Button value={24} onPress={this.handleButtonPress}>24 hours</Button>
                    </CardSection>
                </Card>
            </View>
        )
    }
}

export default connect(null, { selectRegime })(FastingRegime)