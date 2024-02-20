import React from 'react';
import TodoContainer from './components/TodoContainer';
import NewTodoList from './NewTodoList';
import { BrowserRouter, Routes, Route} from 'react-router-dom';


function App() {
  
    
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TodoContainer/>} />
        <Route path="/new" element={<NewTodoList/>} /> 
           
      </Routes>
    </BrowserRouter>
  );
}


export default App;