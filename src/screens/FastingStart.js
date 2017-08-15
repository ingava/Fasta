import React, { Component } from 'react'
import { View, Picker } from 'react-native'
import { InstructionText, Card } from '../components/common'

class FastingStart extends Component {
    constructor(props) {
        super(props);

        this.state = { optionSelected: false };
        this.handleOptionSelect = this.handleOptionSelect.bind(this);
    }

    handleOptionSelect () {
        this.setState({ optionSelected: true })
    }

    render () {
        return (
            <View>
                <InstructionText>I will stop eating at:</InstructionText>
                <Card>
                    <Picker
                        onValueChange={this.handleOptionSelect}
                    >
                        {!this.state.optionSelected &&
                            <Picker.Item value="" label="Choose time" />
                        }
                        <Picker.Item value="16.00" label="16.00" />
                        <Picker.Item value="17.00" label="17.00" />
                        <Picker.Item value="18.00" label="18.00" />
                        <Picker.Item value="19.00" label="19.00" />
                        <Picker.Item value="20.00" label="20.00" />
                        <Picker.Item value="21.00" label="21.00" />
                        <Picker.Item value="22.00" label="22.00" />
                    </Picker>
                </Card>
            </View>
        )
    }
}

export default FastingStart
