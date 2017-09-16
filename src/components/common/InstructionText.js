import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { instructionText } from '../../constants/colors';

const InstructionText = ({ children }) => {
    const { textStyle, viewStyle } = styles;

    return (
        <View style={viewStyle}>
            <Text style={textStyle}>{children}</Text>
        </View>
    );
};

const styles = ({
    textStyle: {
        fontSize: 22,
        fontWeight: 'bold',
        color: instructionText,
    },
    viewStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        backgroundColor: 'transparent',
    }
});

export { InstructionText };
