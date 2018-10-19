import React, { Component } from 'react';
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
    todos: state
});

class VisibleToDOList extends Component {
    render() {
        const todos = this.props.todos
            .map(todo => <li key={todo.id}>{todo.text}</li>);

        return (<ul>{todos}</ul>);
    }
}

export default connect(mapStateToProps)(VisibleToDOList);