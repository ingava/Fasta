import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';
import Router from './Router';

const store = createStore(reducers, {});

class App extends Component {

    render() {
        return (
            <Provider store={store}>
                <Router />
            </Provider>
        )
    }
}

export default App;