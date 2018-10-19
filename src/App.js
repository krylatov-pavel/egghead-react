import React, { Component } from 'react';
import './App.css';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import configureStore from './redux/configureStore';
import { Main } from './components/main'

class App extends Component {
    render() {
        return (
            <Provider store={configureStore()}>
                <BrowserRouter>
                    <Route path="/:filter?" component={Main} />
                </BrowserRouter>
            </Provider>
        );
    }
}

export default App;
