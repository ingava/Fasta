import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, StyleSheet } from 'react-native';
import { InstructionText } from '../components/common/index';

const Countdown = () => {
    return (
        <View>
            <InstructionText>You can start eating in:</InstructionText>
        </View>
    )
};

export default Countdown;