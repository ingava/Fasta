import React from 'react';
import { View, StyleSheet } from 'react-native';

const Card = ({ children }) => {
    return (
        <View style={styles.containerStyle}>
            {children}
        </View>
    );
};

const styles = StyleSheet.create({
    containerStyle: {
        elevation: 1,
        marginLeft: 5,
        marginRight: 5,
    }
});

export { Card };