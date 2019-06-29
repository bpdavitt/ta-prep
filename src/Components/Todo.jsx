import React from 'react';

const Todo = (props) => {
    const {todo} = props;
    console.log(todo);
    return (
        < >
            {todo.completed === 1 ? 
            <li class='completed' onClick={()=>{props.toggleStatus(todo)}}>{props.todo.task}</li> : 
            <li onClick={()=>{props.toggleStatus(todo)}}>{props.todo.task}</li>}
        
        </>
    )
}
export default Todo;