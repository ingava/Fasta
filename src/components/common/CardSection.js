import React from 'react';
import { View } from 'react-native';

const CardSection = ({ children }) => {
    return (
        <View style={styles.containerStyle}>
            {children}
        </View>
    )
};

const styles = {
    containerStyle: {
        padding: 5,
        backgroundColor: 'transparent',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        position: 'relative',
    }
};

export { CardSection };