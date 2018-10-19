import React, { Component } from 'react';
import { connect } from 'react-redux';
import { toggleToDo } from '../redux/actionCreators';

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

const mapDispatchToProps = (dispatch) => ({
    toggleToDo: (id) => dispatch(toggleToDo(id))
});

class VisibleToDOList extends Component {
    render() {
        const todos = getVisibleToDos(this.props.todos, this.props.filter)
            .map(todo => <li onClick={() => this.props.toggleToDo(todo.id)}
                key={todo.id}
                style={{
                    textDecoration: todo.active ? 'none' : 'line-through'
                }}
            >{todo.text}</li>);

        return (<ul>{todos}</ul>);
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(VisibleToDOList);