import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addToDo } from '../redux/actionCreators';

const mapDispatchToProps = (dispatch) => ({
    addToDo: (text) => dispatch(addToDo(text))
});

class AddToDo extends Component {
    constructor(props) {
        super(props);

        this.state = {
            toDo: ''
        };
    }

    onSubmit(e) {
        e.preventDefault();
        this.props.addToDo(this.state.toDo);
        this.setState({ toDo: '' });
    }

    render() {
        return (
            <form onSubmit={event => this.onSubmit(event)}>
                <input type="text" value={this.state.toDo}
                    onChange={event => this.setState({
                        toDo: event.target.value
                    })} />
                <button type="submit">Add</button>
            </form>
        );
    }
}

export default connect(null, mapDispatchToProps)(AddToDo);