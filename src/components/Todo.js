import React,{useEffect, useState} from 'react'
import './Todo.css'
import TodoList from './TodoList'


const Todo = () => {
    //inputshi vinaxav shekvanil texsts
    const [input,setInput] = useState('sada')
    const [arr,setArr] = useState([])

    const handleClick = () => {
        setArr([...arr,input]);
    }
    

  return (
    <>
    <div className='input-container'>
        <h1 className='title'>Todo App</h1>
        <div className='input-box'>
            <input type='text' className='input' placeholder='Add a To Do' onChange={e => setInput(e.target.value)} value={input}/>
            <i className="fas fa-plus-square" onClick={handleClick}></i>
        </div>
    </div>

    <div>
        <TodoList data = {arr} />
    </div>

    <div>
        <button className='clearbtn' onClick={() => setArr([])}>Clear All</button>
    </div>

    </>
  )
}

export default Todo