import React from 'react';
import TodoList from './TodoList';
import AddTodoForm from './AddTodoForm';



function App() {
  // const [todoList, setTodoList] = React.useState(JSON.parse(localStorage.getItem("savedTodoList")));
  const [todoList, setTodoList] = React.useState([]);
  const addTodo = (newTodo) => {
    const todos = [...todoList, newTodo];
    setTodoList(todos);
  }
  
  React.useEffect(() => {
    console.log('todoList has changed:', todoList);
    localStorage.setItem("savedTodoList", JSON.stringify(todoList));
  }, [todoList]);

  return (
    <div>
      <h1>Todo List</h1>
      
      <AddTodoForm onAddTodo={addTodo} />
      <TodoList todoList={todoList} />
      
    </div>
  );
}


export default App;
