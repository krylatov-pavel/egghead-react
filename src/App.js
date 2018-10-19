import React, { Component } from 'react';
import './App.css';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import configureStore from './redux/configureStore';
import VisibleToDoList from './components/visibleToDoList';
import AddToDo from './components/addToDo';

class App extends Component {
    render() {
        const Main = () => (<div>
            <VisibleToDoList />
            <AddToDo />
        </div>);

        return (
            <Provider store={configureStore()}>
                <BrowserRouter>
                    <Route path="/" component={Main} />
                </BrowserRouter>
            </Provider>
        );
    }
}

export default App;
