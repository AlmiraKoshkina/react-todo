import React from 'react';



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
        event.target.elements.title.value = "";
        const newTodoObj = { id: Date.now(), title: todoTitle };
        onAddTodo(newTodoObj);
    }
    
    return (
        <form onSubmit={handleAddTodo}>
            <label htmlFor='todoTitle'>Title</label>
            <input id="todoTitle" name="title" value={todoTitle} onChange={handleTitleChange} ></input>
            <button>Add</button>
        </form>
    );
}   

export default AddTodoForm;