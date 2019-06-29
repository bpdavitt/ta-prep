import React from 'react';

const Input = (props) => {

    return (
        <div>
            <label>Add a New ToDo: </label>
            <input type="text" onChange={(e)=>{props.onChange(e)}}></input>
            <button onClick={()=>{props.onSubmit()}}>Submit</button>
        </div>
    )

}

export default Input;