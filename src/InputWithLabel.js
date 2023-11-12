import React from 'react';

const InputWithLabel = (props) => {
    const inputRef = React.useRef(0);
    React.useEffect(() => {
        inputRef.current.focus()
    });


    return (
        <>
            <label htmlFor='todoTitle'>{props.children}</label>
            <input autoFocus id="todoTitle" name="title" value={props.todoTitle} onChange={props.handleTitleChange} ref={inputRef}></input>
        </>
        
    )
}



export default InputWithLabel;

