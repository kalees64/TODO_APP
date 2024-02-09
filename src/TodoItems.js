import React from "react";
import ListItem from "./ListItem";

const TodoItem = ({todos,handleCheck,handleDelete,currentDate}) => {

    return(
        <ul className='list'>
        {
          todos.map((todo)=>{
            return(
              <ListItem
              todo = {todo}
              handleCheck = {handleCheck}
              handleDelete = {handleDelete}
              currentDate = {currentDate}
              key={todo.id}
               />
            )
          })
        }
    </ul>
    )
}


export default TodoItem