import React, { Component } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import LinearGradient from 'react-native-linear-gradient';
import backgroundGradient from '../constants/colors';
import { View, StyleSheet } from 'react-native';
import { InstructionText } from '../components/common/index';
import leftPad from '../util/leftPad';

class Countdown extends Component {
    constructor(props) {
        super(props);

        const timeLeft = this.props.timeToStopFasting.diff(moment());

        this.state = {
            timeLeft,
        };

        this.startCountDown = this.startCountDown.bind(this);
    }

    componentDidMount () {
        this.interval = setInterval(this.startCountDown, 1000);
    }

    componentWillUnmount () {
        clearInterval(this.interval);
    }

    startCountDown () {
        const timeLeft = this.props.timeToStopFasting.diff(moment());

        this.setState({ timeLeft });
    };

    render () {
        const hours = moment.duration(this.state.timeLeft).hours();
        const minutes = moment.duration(this.state.timeLeft).minutes();
        const seconds = moment.duration(this.state.timeLeft).seconds();

        function suffix () {
            if (hours > 0) {
                return 'hours';
            } else if (minutes > 0) {
                return 'minutes';
            } else {
                return 'seconds';
            }
        }


        return (
            <LinearGradient colors={backgroundGradient} style={styles.linearGradient}>
                <View>
                    <InstructionText>You can start eating in:</InstructionText>
                    <InstructionText>{hours}:{leftPad(minutes, 2, '0')}:{leftPad(seconds, 2, '0')}{' ' + suffix()}</InstructionText>
                </View>
            </LinearGradient>
        )
    }
};

const styles = StyleSheet.create({
    linearGradient: {
        flex: 1,
        paddingTop: 60,
        paddingLeft: 15,
        paddingRight: 15,
    }
});

export default connect(state => ({
    timeToStopFasting: state.interval.timeToStopFasting,
}), null)(Countdown);
