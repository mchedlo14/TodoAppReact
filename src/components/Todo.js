import React,{useState} from 'react'
import './Todo.css'
import TodoList from './TodoList'


const Todo = () => {

    const [input,setInput] = useState('')
    const [arr,setArr] = useState([])
    const [rId,setRid] = useState(0)

    const handleClick = () => {
        idGenerator()
        if(input.length > 0){
            setArr([...arr,{ id : rId, value : input}]);
            console.log(arr)
        }
    }

    
    const idGenerator = () => { 
        setRid(Math.floor(Math.random() * 10000))
    }

  return (
    <>
      <div className="input-container">
        <h1 className="title">Todo App</h1>
        <div className="input-box">
          <input
            type="text"
            className="input"
            placeholder="Add a To Do"
            onChange={(e) => setInput(e.target.value)}
          />
          <i className="fas fa-plus-square" onClick={handleClick}></i>
        </div>
      </div>

      {arr.length > 0 ? (
        <>
          <div>
            <TodoList data={arr} newTodo={setArr}/>
          </div>
        </>
      ) : (
        <></>
      )}

      {arr.length > 0 ? (
        <div className='button-container'>
          <button className="clearbtn" onClick={() => setArr([])}>
            Clear All
          </button>
        </div>
      ) : (
        <></>
      )}
    </>
  );
}

export default Todo