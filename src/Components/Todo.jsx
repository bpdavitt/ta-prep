import React from 'react';

const Todo = (props) => {
    const {todo} = props;
    console.log(todo);
    return (
        < >
            {todo.completed === 1 ? <li class='completed'>{props.todo.task}</li> : <li>{props.todo.task}</li>}
        
        </>
    )
}
export default Todo;