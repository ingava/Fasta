import React from 'react';
import { View } from 'react-native';

const Card = ({ children }) => {
    return (
        <View style={styles.containerStyle}>
            {children}
        </View>
    );
};

const styles = {
    containerStyle: {
        elevation: 1,
        marginLeft: 5,
        marginRight: 5,
    }
};

export { Card };