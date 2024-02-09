import React from "react";

const ListItem = ({todo,handleCheck,handleDelete,currentDate}) => {
    
    return(
        <li className='list-item' key={todo.id}>

                <input
                    type='checkbox'
                    checked={todo.checkStatus} 
                    onChange={()=>handleCheck(todo.id)}
                    />
                <label style={todo.checkStatus?{textDecoration:"line-through"} : {color:"black"}}>{todo.task.toUpperCase()}<br/><span style={{color:"blue"}}>{currentDate}</span></label>
                <button type='button' onClick={()=>handleDelete(todo.id)}>D</button>
              
            </li>
    )
}


export default ListItem