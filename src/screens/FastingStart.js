import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Picker } from 'react-native';
import { InstructionText, Card, Button, CardSection } from '../components/common';
import { selectFastingStart } from '../actions/FastingStart';

class FastingStart extends Component {
    constructor(props) {
        super(props);

        this.state = { selectedOption: null };

        this.handleOptionSelect = this.handleOptionSelect.bind(this);
    }

    handleOptionSelect (itemValue) {
        this.props.selectFastingStart(itemValue);
        this.setState({ selectedOption: itemValue });
    }

    render () {

        return (
            <View>
                <InstructionText>I will stop eating at:</InstructionText>
                <Card>
                    <Picker onValueChange={this.handleOptionSelect} selectedValue={this.state.selectedOption}>
                        <Picker.Item value="16.00" label="16.00" />
                        <Picker.Item value="17.00" label="17.00" />
                        <Picker.Item value="18.00" label="18.00" />
                        <Picker.Item value="19.00" label="19.00" />
                        <Picker.Item value="20.00" label="20.00" />
                        <Picker.Item value="21.00" label="21.00" />
                        <Picker.Item value="22.00" label="22.00" />
                    </Picker>
                </Card>
                <Card>
                    <InstructionText>OR</InstructionText>
                    <CardSection>
                        <Button>NOW</Button>
                    </CardSection>
                </Card>
            </View>
        )
    }
}

export default connect(null, { selectFastingStart })(FastingStart)
