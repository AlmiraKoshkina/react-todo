import React from 'react';
import Main from './Main';
import NewTodoList from './NewTodoList';
import { BrowserRouter, Routes, Route} from 'react-router-dom';


function App() {
  
  
  // const [todoList, setTodoList] = React.useState([])

  // const [isLoading, setIsLoading] = React.useState(true);


  // const fetchData = async () => {
  //   const url = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE_ID}/${process.env.REACT_APP_TABLE_NAME}`
  //   const options = {
  //     method: "GET",
  //     headers: {
  //       'Authorization': `Bearer ${process.env.REACT_APP_AIRTABLE_API_TOKEN}`
  //     }
  //   };

  //   try {

  //     const response = await
  //       fetch(url, options);

  //     if (!response.ok) {
  //       const message = `Error: ${response.status}`;
  //       throw new Error(message);
  //     }
      
  //     const data = await response.json();
  //     console.log(data);
  //     const todos = data.records.map((todo) => {
      
  //       const newTodo = {
  //         id: todo.id,
  //         title: todo.fields.title
  //       }
  //       return newTodo

  //     });

  //     console.log(todos);
  //     setTodoList(todos);
  //     setIsLoading(false)

  //   } catch (error) {
  //     console.log(error.message)
  //   }
  // }

  // React.useEffect(() => {
  //     fetchData()
  // }, []); 
  
  
  // React.useEffect(() => {
  //     console.log('todoList has changed:', todoList);
    
    
  //   if (!isLoading) {
     
  //     localStorage.setItem('savedTodoList', JSON.stringify(todoList));
  //   }
  // }, [todoList, isLoading]);

 

  // const addTodo = (newTodo) => {
  //   const todos = [...todoList, newTodo];
  //   setTodoList(todos);
  // }

  // const removeTodo = (id) => {
  //   const index = todoList.findIndex(obj => obj.id === id);
  //   const newTodoList = todoList.filter((todo) => todo.id !== id)
  //   setTodoList(newTodoList)
  //   console.log("Removing item with id: " + id + " at index: " + index);
        
  // }
  
    
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main/>} />
        <Route path="/new" element={<NewTodoList/>} /> 
           
      </Routes>
    </BrowserRouter>
  );
}


export default App;