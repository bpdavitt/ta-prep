import React from 'react';
import Todo from './Todo.jsx'

const Todos = (props) => {
    return (
        <ul>
            {props.allTodos.map((todo) => {
                return <Todo 
                            todo={todo} 
                            toggleStatus={props.toggleStatus}
                            deleteItem={props.deleteItem}/>
            })}
        </ul>
    )
}

export default Todos;