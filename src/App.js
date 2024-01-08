import React from 'react';
import Main from './Main';
import NewTodoList from './NewTodoList';
import { BrowserRouter, Routes, Route} from 'react-router-dom';


function App() {
  
    
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