import '../style/AddTodo.css'
import { useDispatch } from 'react-redux'
import { addTodo } from '../state-management/TodoSlice'
import { useState } from 'react'

export const AddTodo = () => {
  const dispatch = useDispatch()
  const [todo, setTodo] = useState('')

  const submitTodo = () => {
    dispatch(addTodo(todo))
  }
  return (
    <div className="add-todo-container">
        <input onChange={(event) => {setTodo(event.target.value)}}
                className='input-add-todo'/>
        <div onClick={() => submitTodo()}
                className="material-symbols-rounded add-button">
        add
        </div>
    </div>
  );
}