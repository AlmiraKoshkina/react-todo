import React from 'react';
import style from './TodoListItem.module.css';
import PropTypes from 'prop-types'; 

const InputWithLabel = (props) => {
    const inputRef = React.useRef(0);
    React.useEffect(() => {
        inputRef.current.focus()
    });


    return (
        <>
            <label htmlFor='todoTitle'>{props.children}</label>
            <input className ={style.input} id={props.id} name= {props.name} value={props.todoTitle} onChange={props.handleTitleChange} ref={inputRef}></input>
        </>
        
    )
}
InputWithLabel.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    todoTitle: PropTypes.array.isRequired,
    handleTitleChange: PropTypes.func.isRequired    
};


export default InputWithLabel;

