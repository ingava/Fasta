import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import FastingInterval from './screens/FastingInterval';
import FastingStart from './screens/FastingStart';
import { headerBackground, headerText } from './constants/colors';

const RouterComponent = () => {

    return (
        <Router>
            <Scene
                key="fastingInterval"
                component={FastingInterval}
                navigationBarStyle={styles.navigationContainer}
                title="Fasta"
                titleStyle={styles.navigationText}
                initial
            />
            <Scene
                key="fastingStart"
                component={FastingStart}
                navigationBarStyle={styles.navigationContainer}
                title="Fasta"
                titleStyle={styles.navigationText}
            />
        </Router>
    )
};

const styles = {
    navigationContainer: {
        backgroundColor: headerBackground,
        borderBottomColor: 'white',
    },
    navigationText: {
        fontFamily: 'notoserif',
        color: headerText,
        fontWeight: 'bold',
        fontSize: 28,
        top: -8,
    }
};

export default RouterComponent