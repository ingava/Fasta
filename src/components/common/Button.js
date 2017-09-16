import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import { buttonText, buttonBackground } from '../../constants/colors';

const Button = ({ children, onPress, value }) => {

    const { buttonStyle, textStyle } = styles;

    const handlePress = () => {
        onPress(value);
    };

    return (
        <TouchableOpacity style={buttonStyle} onPress={handlePress}>
            <Text style={textStyle}>{children}</Text>
        </TouchableOpacity>
    )
};

const styles = StyleSheet.create({
    textStyle: {
        alignSelf: 'center',
        color: buttonText,
        fontSize: 16,
        fontWeight: '600',
        paddingTop: 10,
        paddingBottom: 10,
    },
    buttonStyle: {
        flex: 1,
        alignSelf: 'stretch',
        backgroundColor: buttonBackground,
        borderRadius: 5,
        marginLeft: 5,
        marginRight: 5,
    }
});

export { Button };
