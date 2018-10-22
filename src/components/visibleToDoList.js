import React from 'react';
import { connect } from 'react-redux';
import { toggleToDo } from '../redux/actionCreators';
import { withRouter } from 'react-router-dom';
import { getVisibleToDos } from '../redux/configureStore';

const mapStateToProps = (state, ownProps) => ({
    todos: state,
    filter: ownProps.match.params.filter || 'all'
});

const mapDispatchToProps = {
    toggleToDo: toggleToDo
};

const VisibleToDOList = ({todos, filter, toggleToDo}) => {
    const visibleTodos = getVisibleToDos(todos, filter)
        .map(todo => <li onClick={() => toggleToDo(todo.id)}
            key={todo.id}
            style={{
                textDecoration: todo.active ? 'none' : 'line-through'
            }}
        >{todo.text}</li>);

    return (<ul>{visibleTodos}</ul>);
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(VisibleToDOList));