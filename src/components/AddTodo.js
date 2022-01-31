import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../Services/Actions/index'

const AddTodo = (props) => {
    return <form onSubmit={(event) => {
        event.preventDefault()
        let input = event.target.userInput.value
        props.dispatch(addTodo(input))
        event.target.userInput.value = ''
    }}>
        <input name='userInput' type='text' />
        <button>Submitt</button>
    </form>;
};

export default connect()(AddTodo);
