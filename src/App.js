import React from 'react';
import TodoList from './TodoList';
import AddTodoForm from './AddTodoForm';
// import { useState } from "react";


function App() {
  // const [newTodo, setNewTodo] = React.useState('');
  const [todoList, setTodoList] = React.useState([]);
  const addTodo = (newTodo) => {
    const todos = [...todoList, newTodo];
    setTodoList(todos);
  }

  return (
    <div>
      <h1>Todo List</h1>
      {/* <AddTodoForm onAddTodo={setNewTodo} /> */}
      <AddTodoForm onAddTodo={addTodo} />
      <TodoList todoList={todoList} />
      {/* <p>{newTodo}</p>     */}
    </div>
  );
}


export default App;
