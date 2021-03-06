import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, StyleSheet } from 'react-native';
import { Actions } from 'react-native-router-flux';
import LinearGradient from 'react-native-linear-gradient';
import backgroundGradient from '../constants/colors';
import { InstructionText, Card, CardSection, Button } from '../components/common/index';
import { selectInterval } from '../actions/FastingInterval';

class FastingInterval extends Component {
    handleButtonPress = (value) => {
        const { selectInterval } = this.props;

        selectInterval(value);
        Actions.fastingStart();
    };

    render() {
        return (
            <LinearGradient colors={backgroundGradient} style={styles.linearGradient}>
                <View style={{ paddingTop: 50, paddingBottom: 20 }}>
                    <InstructionText>Choose your fasting interval</InstructionText>
                </View>
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
    }
});

export default connect(null, { selectInterval })(FastingInterval)
