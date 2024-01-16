import React from 'react';
import TodoList from './TodoList';
import AddTodoForm from './AddTodoForm';
import style from './TodoListItem.module.css';

function Main() {


    const [todoList, setTodoList] = React.useState([])

    const [isLoading, setIsLoading] = React.useState(true);


    const fetchData = async () => {
        const url = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE_ID}/${process.env.REACT_APP_TABLE_NAME}`
        const options = {
            method: "GET",
            headers: {
                'Authorization': `Bearer ${process.env.REACT_APP_AIRTABLE_API_TOKEN}`
            }
        };

        try {

            const response = await
                fetch(url, options);

            if (!response.ok) {
                const message = `Error: ${response.status}`;
                throw new Error(message);
            }

            const data = await response.json();
            console.log(data);
            const todos = data.records.map((todo) => {

                const newTodo = {
                    id: todo.id,
                    title: todo.fields.title
                }
                return newTodo

            });

            console.log(todos);
            setTodoList(todos);
            setIsLoading(false)

        } catch (error) {
            console.log(error.message)
        }
    }

    React.useEffect(() => {
        fetchData()
    }, []);


    React.useEffect(() => {
        console.log('todoList has changed:', todoList);


        if (!isLoading) {

            localStorage.setItem('savedTodoList', JSON.stringify(todoList));
        }
    }, [todoList, isLoading]);

       
    const postTodo = async (todo) => {
        const newTodoList = [...todoList, todo];
        try {
            const airtableData = {
                fields: {
                    title: todo.title,
                },
            };

            const response = await fetch(
                `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE_ID}/Default`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_API_TOKEN}`,
                    },
                    body: JSON.stringify(airtableData)
                }
            );

            if (!response.ok) {
                const message = `Error has ocurred:
                             ${response.status}`;
                throw new Error(message);
            }

            setTodoList(newTodoList);
            console.log("Adding item " + todo.title);


        } catch (error) {
            console.log(error.message);
            return null;
        }
    };

    const removeTodo = async (id) => {
        const index = todoList.findIndex(obj => obj.id === id);
        const newTodoList = todoList.filter((todo) => todo.id !== id)
        try {
        
            const response = await fetch(
                `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE_ID}/Default/${id}`,
                {
                    method: "DELETE",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_API_TOKEN}`,
                    }
                    
                }
            );

            if (!response.ok) {
                const message = `Error has ocurred:
                                ${response.status}`;
                throw new Error(message);
            }

            setTodoList(newTodoList)
            console.log("Removing item with id: " + id + " at index: " + index);
       
    } catch (error) {
        console.log(error.message);
        return null;
    }

    }

    return (
        <div className= {style.body}>

            <h1 className={style.header}>Todo List</h1>

            <AddTodoForm onAddTodo={postTodo} />
            {isLoading ? <p>Loading...</p> : <div><TodoList todoList={todoList} onRemoveTodo={removeTodo} /></div>}


        </div>

    );
}

export default Main;