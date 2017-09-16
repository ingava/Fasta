import React from 'react';
import { View, StyleSheet } from 'react-native';

const CardSection = ({ children }) => {
    return (
        <View style={styles.containerStyle}>
            {children}
        </View>
    )
};

const styles = StyleSheet.create({
    containerStyle: {
        padding: 5,
        backgroundColor: 'transparent',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        position: 'relative',
    }
});

export { CardSection };