import React, {useEffect, useState } from 'react'
import './Todolist.css'

const TodoList = ({data,newTodo}) => {


    
    const handleDelete = (index) => {
        let newtodo = data.filter(item => item.id !== index)   

        newTodo(newtodo)
    } 
    
  return (
    <div className='todolist'>
        {data.map((item,index)=> {
            return <div className='todo-row' key={index}> {item.value}<i className="fas fa-trash" onClick={() => handleDelete(item.id)}></i></div>
        })}
    </div>
  )
}

export default TodoList