import React, { Component } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import PushNotification from 'react-native-push-notification';
import LinearGradient from 'react-native-linear-gradient';
import backgroundGradient from '../constants/colors';
import { View, StyleSheet } from 'react-native';
import { InstructionText } from '../components/common/index';
import leftPad from '../util/leftPad';

class Countdown extends Component {
    constructor(props) {
        super(props);

        const timeToStopFasting = this.timeToStopFasting();
        const timeToStartFasting = this.timeToStartFasting();

        this.state = {
            timeToStopFasting,
            timeToStartFasting,
            isFastingOver: false,
        };
    }

    componentDidMount () {
        this.timer = setInterval(this.startCountDown, 1000);
    }

    componentWillUnmount () {
        clearInterval(this.timer);
    }

    startCountDown = () => {
        const timeToStopFasting = this.timeToStopFasting();
        const timeToStartFasting = this.timeToStartFasting();
        const shouldNotify = timeToStopFasting === 0;
        const isFastingOver = timeToStopFasting <= 0;

        this.setState({ timeToStopFasting, timeToStartFasting, isFastingOver });

        if (shouldNotify) {
            PushNotification.localNotification({
                vibrate: true,
                vibration: 300,
                largeIcon: 'ic_launcher',
                smallIcon: 'ic_launcher',
                message: 'Yay!! You can start eating!',
            });
        }
    };

    timeToStartFasting () {
        const { fastingStart } = this.props;

        return fastingStart.diff(moment());
    }

    timeToStopFasting () {
        const { fastingStart, selectedInterval } = this.props;
        const timeToStopFasting = moment(fastingStart).add(selectedInterval, 'hours');

        return timeToStopFasting.diff(moment());
    }

    render () {
        const { timeToStartFasting, timeToStopFasting } = this.state;
        const isFastingAlreadyStarted = timeToStartFasting < 0;
        const duration = isFastingAlreadyStarted ? timeToStopFasting : timeToStartFasting;
        const days = moment.duration(duration).days();
        let hours = moment.duration(duration).hours();
        const minutes = moment.duration(duration).minutes();
        const seconds = moment.duration(duration).seconds();

        hours = hours + (days * 24);

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
                    { isFastingAlreadyStarted
                        ? <InstructionText>You can start eating in:</InstructionText>
                        : <InstructionText>You should stop eating in:</InstructionText>
                    }

                    <InstructionText>{hours}:{leftPad(minutes, 2, '0')}:{leftPad(seconds, 2, '0')}{' ' + suffix()}</InstructionText>
                </View>
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

export default connect(state => ({
    fastingStart: state.interval.fastingStart,
    selectedInterval: state.interval.selectedInterval,
}), null)(Countdown);
