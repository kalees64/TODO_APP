import React from 'react'
// import { useState } from 'react'
import './App.css'
import TodoItem from './TodoItems'
import AddItem from './AddItem'

const Content = ({todos,handleCheck,handleDelete,handleSubmit,input,setInput,searchValue,setSearchValue}) => {
  const weekdays = ["SUN","MON","TUE","WED","THU","FRI","SAT"]
  const months = ["JAN","FEB","MAR","APR","MAY","JUN","JULY","AUG","SEP","OCT","NOV","DEC"]
  const date = new Date()
  const d = date.getDate()
  const day = weekdays[date.getDay()]
  const m = months[date.getMonth()]
  const y = date.getFullYear()
  const currentDate = `${day} ${d}-${m}-${y}`


  return (
    <main className='main'>
      <AddItem 
      input={input}
      setInput={setInput}
      handleSubmit={handleSubmit}
      />

      <form className='form-search' onSubmit={(e) =>{e.preventDefault()}}>
        <input 
        type='text' 
        value={searchValue}
        onChange={(e)=>setSearchValue(e.target.value.toUpperCase())}
        placeholder='Search'
        />
      </form>

      {todos.length ? (
        <TodoItem 
        todos ={todos}
        handleCheck = {handleCheck}
        handleDelete = {handleDelete}
        currentDate = {currentDate}
        />
      ) :<article className='empty'>
          <p>Your Todo List is Empty<br />Add more Tasks</p>
        </article>}
        
    </main>
  )
}

export default Content