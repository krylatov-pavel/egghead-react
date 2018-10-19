import React, { Component } from 'react';
import { connect } from 'react-redux';

const getVisibleToDos = (todos, filter) => {
    switch (filter) {
        case 'all':
            return todos;
        case 'active':
            return todos.filter(todo => todo.active);
        case 'completed':
            return todos.filter(todo => !todo.active);
        default:
            throw new Error('invalid todo filter type');
    }
}

const mapStateToProps = (state) => ({
    todos: state
});

class VisibleToDOList extends Component {
    render() {
        const todos = getVisibleToDos(this.props.todos, this.props.filter)
            .map(todo => <li key={todo.id}>{todo.text}</li>);

        return (<ul>{todos}</ul>);
    }
}

export default connect(mapStateToProps)(VisibleToDOList);