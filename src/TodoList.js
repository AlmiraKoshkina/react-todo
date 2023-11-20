import React from 'react';
import TodoListItem from './TodoListItem';


let TodoList = ({ todoList }) => {
    return (
        <ul>
            {todoList.map(function (item) {
                return (<TodoListItem key={item} todo={item} />);
            })}
        </ul>
)    
};

export default TodoList;