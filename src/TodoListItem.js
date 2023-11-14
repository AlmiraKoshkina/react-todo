import React from 'react';

function TodoListItem({ todo, onRemoveTodo }) {
  return (
      <li>

          <span>{todo.title}</span>
          <button onClick={() => onRemoveTodo(todo.id)} type= "button">Remove</button>
      </li>
  );
}

export default TodoListItem;
