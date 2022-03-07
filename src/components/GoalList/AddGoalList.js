import React from 'react'
import './AddGoalList.css'
const AddGoalList = props => {

    const addGoalListHandler = event => {
        event.preventDefault();
        props.items.push({
            id: Math.random().toString(),
            text: "Hello New Goal"
        })
        // console.log(props.items);
    }

    return (
        <form onSubmit={addGoalListHandler}>
            <input type="text" />
            <button type='submit'>Add Goal</button>
        </form>
    )
}

export default AddGoalList