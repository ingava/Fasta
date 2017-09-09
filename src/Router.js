import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import FastingRegime from './screens/FastingRegime';
import FastingStart from './screens/FastingStart';
import { headerBackground, headerText } from './constants/colors';

const RouterComponent = () => {

    return (
        <Router>
            <Scene
                key="fastingRegime"
                component={FastingRegime}
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
        fontSize: 30,
    }
};

export default RouterComponent