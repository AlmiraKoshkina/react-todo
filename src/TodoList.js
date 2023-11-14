import React from 'react';
import TodoListItem from './TodoListItem';


let TodoList = ({ todoList, onRemoveTodo }) => {
    return (
        <ul>
            {todoList.map(function (item) {
                return (<TodoListItem onRemoveTodo={onRemoveTodo} key={item} todo={item} />);
            })}
        </ul>
)    
};

export default TodoList;