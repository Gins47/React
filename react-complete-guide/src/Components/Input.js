import React from 'react'

const Input = (props) =>{

    return(
        <div>
            <label>Enter the name</label>
            <input type="text" onChange={props.changed} value={props.name}></input>
        </div>
    )
}

export default Input