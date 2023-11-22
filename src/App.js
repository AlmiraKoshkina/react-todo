import React from 'react';
import TodoList from './TodoList';
import AddTodoForm from './AddTodoForm';



function App() {
  
  
  const [todoList, setTodoList] = React.useState([])

  const [isLoading, setIsLoading] = React.useState(true);


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
        setIsLoading(false);
      })
      .catch(error => {
        console.error(error);
        
      });
    
  }); 
  
  
  React.useEffect(() => {
      console.log('todoList has changed:', todoList);
    
    
    if (!isLoading) {
     
      localStorage.setItem('savedTodoList', JSON.stringify(todoList));
    }
  }, [todoList, isLoading]);

 

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
      {isLoading ? <p>Loading...</p> : <p><TodoList todoList={todoList} onRemoveTodo={removeTodo} /></p>}
          
    </>

  );
}


export default App;
