import React from 'react';
import TodoList from './TodoList';
import AddTodoForm from './AddTodoForm';

const useSemiPersistentState = () => {
  const [todoList, setTodoList] = React.useState(JSON.parse(localStorage.getItem("savedTodoList"))) || []
  // const [todoList, setTodoList] = React.useState([]); 
  
  React.useEffect(() => {
    console.log('todoList has changed:', todoList);
    localStorage.setItem("savedTodoList", JSON.stringify(todoList));
  }, [todoList]);
  
  return [todoList, setTodoList]
}

function App() {
  const [todoList, setTodoList] = useSemiPersistentState();
  const addTodo = (newTodo) => {
    const todos = [...todoList, newTodo];
    setTodoList(todos);
  }
  
  
  return (
    <div>
      <h1>Todo List</h1>
      
      <AddTodoForm onAddTodo={addTodo} />
      <TodoList todoList={todoList} />
      
    </div>
  );
}


export default App;
