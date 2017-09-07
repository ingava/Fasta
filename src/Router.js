import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import FastingRegime from './screens/FastingRegime';
import FastingStart from './screens/FastingStart';

const RouterComponent = () => {

    return (
        <Router sceneStyle={{ paddingTop: 0 }}>
            <Scene key="fastingRegime" component={FastingRegime} title="Fasta" initial />
            <Scene key="fastingStart" component={FastingStart} title="Fasta" />
        </Router>
    )
};

export default RouterComponent