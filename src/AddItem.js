import React from "react";
import { useRef } from "react";

const AddItem = ({input,setInput,handleSubmit}) => {
  
    const inputRef = useRef()
    return(
        <form className='form' onSubmit={handleSubmit}>
            <input type='text' value={input} onChange={(e)=>setInput(e.target.value)} placeholder="Add Item" ref={inputRef}/>
            <button type='submit' onClick={()=>inputRef.current.focus}>+</button>
        </form>
    )
}

export default AddItem