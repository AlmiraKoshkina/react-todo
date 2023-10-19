import React from 'react';
import TodoListItem from './TodoListItem';

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
                return (<TodoListItem key={item.id} todo={item} />);
            })}
        </ul>
)    
};

export default TodoList;