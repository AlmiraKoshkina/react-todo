import React from 'react';
const todoList = [
    {
        id: 1,
        title: 'Complete assignment',
    },
    {
        id: 2,
        title: 'Complete mindset assignment',
    },
    {
        id: 3,
        title: 'Submit assignment',
    }
];

let TodoList = () => {
    return (
        <ul>
            {todoList.map(function (item) {
                return <li key={item.id}>

                    <span>{item.title}</span>

                </li>;
            })}
        </ul>
)    
};

export default TodoList;