import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../redux/actionCreators';
import { withRouter } from 'react-router-dom';
import { getVisibleToDos } from '../redux/configureStore';

const mapStateToProps = (state, ownProps) => ({
    todos: state,
    filter: ownProps.match.params.filter || 'all'
});

class VisibleToDOList extends Component {
    componentDidMount() {
        this.fetchData();
    }

    componentDidUpdate(prevProps) {
        if (this.props.filter !== prevProps.filter) {
            this.fetchData();
        }
    }

    fetchData() {
        const {filter, fetchToDos} = this.props;
        fetchToDos(filter);
    }

    render() {
        const visibleTodos = getVisibleToDos(this.props.todos, this.props.filter)
            .map(todo => <li onClick={() => this.props.toggleToDo(todo.id)}
                key={todo.id}
                style={{
                    textDecoration: todo.active ? 'none' : 'line-through'
                }}
            >{todo.text}</li>);

        return (<ul>{visibleTodos}</ul>);
    }
}
    
export default withRouter(connect(mapStateToProps, actions)(VisibleToDOList));