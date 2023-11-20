import React from 'react';
import InputWithLabel from './InputWithLabel'


let AddTodoForm = ({ onAddTodo }) => {
    const [todoTitle, setTodoTitle] = React.useState([]);
    
    const handleTitleChange = (event) => {
        const newTodoTitle = event.target.value;
        setTodoTitle(newTodoTitle);
    }
    const handleAddTodo = (event) => {
        event.preventDefault()
        
        console.log(`${todoTitle}`);
        setTodoTitle("");
        event.target.elements.todos.value = "";
        const newTodoObj = { id: Date.now(), title: todoTitle };
        onAddTodo(newTodoObj);
    }
    
    return (
        <form onSubmit={handleAddTodo}>
            <InputWithLabel id="1" name = "todos" todoTitle={todoTitle} handleTitleChange={handleTitleChange}>Title: </InputWithLabel>
            <button>Add</button>
        </form>
    );
}   

export default AddTodoForm;