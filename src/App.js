import React from 'react';
import TodoList from './TodoList';
import AddTodoForm from './AddTodoForm';



function App() {
  
  
  const [todoList, setTodoList] = React.useState([])

  React.useEffect(() => {
    const myPromise = new Promise((resolve, reject) => {
      setTimeout(() => {
        const result = {
          data: { todoList: JSON.parse(localStorage.getItem("savedTodoList") || []) }
        };

        resolve(result);
      }, 2000);
              
    }, [])
    
    myPromise
      .then(result => {
        setTodoList(result.data.todoList);
      })
  }); 
  
  
  React.useEffect(() => {
      console.log('todoList has changed:', todoList);
      localStorage.setItem("savedTodoList", JSON.stringify(todoList));
    }, [todoList]);

  const addTodo = (newTodo) => {
    const todos = [...todoList, newTodo];
    setTodoList(todos);
  }

  const removeTodo = (id) => {
    const index = todoList.findIndex(obj => obj.id === id);
    const newTodoList = todoList.filter((todo) => todo.id !== id)
    setTodoList(newTodoList)
    console.log("Removing item with id: " + id + " at index: " + index);
        
  }
  
  return (
    <>
      <h1>Todo List</h1>
      
      <AddTodoForm onAddTodo={addTodo} />
      <TodoList todoList={todoList} onRemoveTodo={removeTodo} />
      
    </>
  );
}


export default App;
