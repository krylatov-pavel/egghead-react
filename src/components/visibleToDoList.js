import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../redux/actionCreators';
import { withRouter } from 'react-router-dom';
import { getVisibleToDos, getIsFetching, getErrorMessage } from '../redux/configureStore';
import FetchError from './FetchError';

const mapStateToProps = (state, ownProps) => {
    const filter = ownProps.match.params.filter || 'all';
    return {
        todos: getVisibleToDos(state, filter),
        filter,
        isFetching: getIsFetching(state, filter),
        errorMessage: getErrorMessage(state, filter)
    }
};

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
        const {isFetching, todos, toggleToDo, errorMessage } = this.props;

        if (isFetching && !todos.length) {
            return (<p>Loading...</p>);
        } else if (errorMessage && !todos.length) {
            return (<FetchError errorMessage={errorMessage} onRetry={() => this.fetchData()} />);
        }
        else {
            const visibleTodos = todos
                .map(todo => <li onClick={() => toggleToDo(todo.id)}
                    key={todo.id}
                    style={{
                        textDecoration: todo.active ? 'none' : 'line-through'
                    }}
                >{todo.text}</li>);

            return (<ul>{visibleTodos}</ul>);
        }
    }
}
    
export default withRouter(connect(mapStateToProps, actions)(VisibleToDOList));