import React from 'react';
import TodoList from './TodoList';
import AddTodoForm from './AddTodoForm';

const useSemiPersistentState = () => {
  const [todoList, setTodoList] = React.useState(JSON.parse(localStorage.getItem("savedTodoList")) || [])
  
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

  const removeTodo = (id) => {
    const index = todoList.findIndex(obj => obj.id === id);
    console.log("Removing item with id: " + id + " at index: " + index);
    todoList.splice(index, 1);
    setTodoList(todoList);
  }
  
  return (
    <div>
      <h1>Todo List</h1>
      
      <AddTodoForm onAddTodo={addTodo} />
      <TodoList todoList={todoList} onRemoveTodo={removeTodo} />
      
    </div>
  );
}


export default App;
