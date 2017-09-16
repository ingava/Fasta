import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Picker, View, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import backgroundGradient from '../constants/colors';
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
            <LinearGradient colors={backgroundGradient} style={styles.linearGradient}>
                <View style={{ paddingTop: 50, paddingBottom: 20 }}>
                    <InstructionText>I will stop eating at:</InstructionText>
                </View>
                <View style={styles.pickerContainer} >
                    <Picker onValueChange={this.handleOptionSelect} selectedValue={this.state.selectedOption}>
                        <Picker.Item value="now" label="now" />
                        <Picker.Item value="16.00" label="16.00" />
                        <Picker.Item value="17.00" label="17.00" />
                        <Picker.Item value="18.00" label="18.00" />
                        <Picker.Item value="19.00" label="19.00" />
                        <Picker.Item value="20.00" label="20.00" />
                        <Picker.Item value="21.00" label="21.00" />
                        <Picker.Item value="22.00" label="22.00" />
                    </Picker>
                </View>
                <Card>
                    <InstructionText>OR</InstructionText>
                    <CardSection>
                        <Button>NOW</Button>
                    </CardSection>
                </Card>
            </LinearGradient>
        )
    }
}

const styles = StyleSheet.create({
    linearGradient: {
        flex: 1,
        paddingTop: 60,
        paddingLeft: 15,
        paddingRight: 15,
    },
    pickerContainer: {
        borderWidth: 1,
        borderColor: 'rgba(255, 255, 255, 0.3)',
        borderRadius: 5,
    }
});

export default connect(null, { selectFastingStart })(FastingStart)
