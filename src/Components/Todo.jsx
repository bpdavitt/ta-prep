import React from 'react';

const Todo = (props) => {
    const {todo} = props;
    // console.log(todo);
    return (
        < >
            {todo.completed === 1 ? 
            <li class='completed' 
                onClick={()=>{props.toggleStatus(todo)}}>{props.todo.task}                  
            </li> : 
            <li 
                onClick={()=>{props.toggleStatus(todo)}}>{props.todo.task}
            </li>}
            <button onClick={()=>{props.deleteItem(todo)}}>Delete Above ToDo</button>
        </>
    )
}
export default Todo;