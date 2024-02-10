import React from 'react';
import style from './TodoListItem.module.css';
import PropTypes from 'prop-types';

function TodoListItem({ todo, onRemoveTodo }) {
  return (
    <li className={style.ListItem} >

          <span>{todo.title}</span>
          <button onClick={() => onRemoveTodo(todo.id)} type= "button">Remove</button>
      </li>
  );
}
TodoListItem.propTypes = {
  todo: PropTypes.object.isRequired,
  onRemoveTodo: PropTypes.func.isRequired
};
export default TodoListItem;
