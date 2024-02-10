import './App.css';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import {useState} from 'react'

function App() {
  const headerTitle = "TO DO LIST"

  const [todos,setTodos] = useState(JSON.parse(localStorage.getItem("Todo_List")) || [{id:1,checkStatus:false,task:"Task-1"}]) 

  // let filterTodos = todos.filter((todo)=> (todo.task).includes(searchValue))

  const [input,setInput] = useState("")
  // const [searchValue,setSearchValue] = useState("")


  function handleCheck(id){
    const listItems = todos.map((todo)=>{
      // todo.id === id ? {...todo,checkStatus:!todo.checkStatus} : todo
      if(todo.id === id){
        return {...todo,checkStatus : !todo.checkStatus}
      }
      else{
        return todo
      }
  })
    setTodos(listItems)
    localStorage.setItem("Todo_List",JSON.stringify(listItems))
  }

  function handleDelete(id){
    const listItems = todos.filter((todo)=>
    todo.id !== id
  )
    // console.log(listItems)
    setTodos(listItems)
    localStorage.setItem("Todo_List",JSON.stringify(listItems))
  }

  function handleSubmit(e){
    e.preventDefault()
    if(input === ""){
      alert("Enter Task Name First")
    }
    else{
      let idValue ;
      todos.length ? idValue = todos[todos.length-1].id +1 : idValue = 1
      let newTodo = {
        id: idValue ,
        checkStatus : false,
        task : input.toUpperCase()
      }
      // console.log(newTodo)
      const listItems = [...todos,newTodo]
      // console.log(listItems)
      setTodos(listItems)
    localStorage.setItem("Todo_List",JSON.stringify(listItems))
      setInput("")
    }
  }
  return (
    <section className='body'>
      <Header title = {headerTitle}/>
      <Content
        todos = {todos}
        handleCheck = {handleCheck}
        handleDelete= {handleDelete}
        handleSubmit = {handleSubmit} 
        input = {input}
        setInput = {setInput}
      />
      <Footer length = {todos.length}/>
    </section>
  );
}

export default App;
