import React from 'react';
import style from './TodoListItem.module.css';

function TodoListItem({ todo, onRemoveTodo }) {
  return (
    <li className={style.ListItem} >

          <span>{todo.title}</span>
          <button onClick={() => onRemoveTodo(todo.id)} type= "button">Remove</button>
      </li>
  );
}

export default TodoListItem;
