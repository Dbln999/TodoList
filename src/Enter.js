import React, { useState } from "react";

const Enter = ({names, ...props}) =>{

const Trash = () =>
    <div className='trash' >
        {names.done? <p onClick={props.deleteTask}>🗑️</p> : ''}
    </div>


const [complete, setComplete] = useState(false)

    const Standing = () =>(
        <div className='check'>
            
            <input type='checkbox' checked={complete} onChange={()=>setComplete(names.done =!names.done)}></input>
            
        </div>
    )
    const className = 'title ' +(names.done ? 'title-done' :'')   
    return(
        <div className="name">
            <Trash></Trash>
            <p className={className}>{names.title} {names.time}</p>
            <Standing></Standing>
        </div>
    )
}

export default Enter