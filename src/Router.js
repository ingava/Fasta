import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import FastingRegime from './components/FastingRegime';

const RouterComponent = () => {
    return (
        <Router>
            <Scene key="fastingRegime" component={FastingRegime} title="Fasta" initial />
        </Router>
    )
}

export default RouterComponent