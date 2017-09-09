import React from 'react';
import { Text, View } from 'react-native';

const InstructionText = ({ children }) => {
    const { textStyle, viewStyle } = styles;

    return (
        <View style={viewStyle}>
            <Text style={textStyle}>{children}</Text>
        </View>
    );
};

const styles = {
    textStyle: {
        fontSize: 18
    },
    viewStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        backgroundColor: 'transparent',
    }
};

export { InstructionText };
