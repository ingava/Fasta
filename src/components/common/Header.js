import React from 'react';
import { Text, View } from 'react-native';

const Header = ({ children }) => {
    const { textStyle, viewStyle } = styles;

    return (
        <View style={viewStyle}>
            <Text style={textStyle}>{children}</Text>
        </View>
    );
};

const styles = {
    textStyle: {
        fontSize: 20
    },
    viewStyle: {
        backgroundColor: '#F8F8F8',
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        elevation: 4,
        position: 'relative',
    }
};

export { Header };