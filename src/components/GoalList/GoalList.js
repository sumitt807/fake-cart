import React from 'react'
import './GoalList.css';
const GoalList = props => {
    console.log(props.items);
    return (
        <div>
            <h2>Goal List</h2>
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