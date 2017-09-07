import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button = ({ children, onPress }) => {

    const { buttonStyle, textStyle } = styles;

    return (
        <TouchableOpacity style={buttonStyle} onPress={onPress}>
            <Text style={textStyle}>{children}</Text>
        </TouchableOpacity>
    )
};

const styles = {
    textStyle: {
        alignSelf: 'center',
        color: '#6F4B72',
        fontSize: 16,
        fontWeight: '600',
        paddingTop: 10,
        paddingBottom: 10,
    },
    buttonStyle: {
        flex: 1,
        alignSelf: 'stretch',
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        borderRadius: 5,
        marginLeft: 5,
        marginRight: 5,
    }
};

export { Button };
