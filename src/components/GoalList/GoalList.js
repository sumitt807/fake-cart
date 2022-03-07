import React, { useState } from 'react'
import AddGoalList from './AddGoalList';
import './GoalList.css';

const GoalList = props => {
    // goalList[currentGoalList, setGoalList] = useState([
    //     { id: "cg1", text: "Hello" },
    //     { id: "cg2", text: "Test" },
    //     { id: "cg3", text: "Hello" },
    // ])
    const addGoalHandler = (newGoal) => {
        props.items.push({
            id: Math.random().toString(),
            text: "Hello New Goal"
        })
        console.log(props.items);
    }

    return (
        <div>
            <h2>Goal List</h2>
            <AddGoalList onAddGoal={addGoalHandler} />
            <ul className='goal-list'>
                {
                    props.items.map((item) => {
                        return <li key={item.id}>{item.text}</li>;
                    })
                }
            </ul>
        </div>
    )
}

export default GoalList