import React, { useEffect, useState } from 'react'
import './Todolist.css'

const TodoList = ({data}) => {
    const [todos,setTodos] = useState([])

    useEffect(() => {
      setTodos(data)
    },[data])

    
    const handleDelete = (index) => {
        let newtodo = todos.filter(item => item.index !== index)    
        setTodos(newtodo)
    } 

  return (
    <div className='todolist'>
        {todos.map((item,index)=> {
            return <div className='todo-row' key={index}> {item} <i className="fas fa-trash" onClick={(index) => handleDelete}></i></div>
        })}
    </div>
  )
}

export default TodoList