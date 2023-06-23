import '../style/AddTodo.css'
import { useDispatch } from 'react-redux'
import { addSingleTodo } from '../state-management/TodoSlice'
import { useState } from 'react'

export const AddTodo = () => {
  const dispatch = useDispatch()
  const [todo, setTodo] = useState('')

  const submitTodo = () => {
    if(todo.trim().length !== 0){
      /* const loading = dispatch(addSingleTodo(todo)) */
      dispatch(addSingleTodo(todo))
      setTodo('')
    }
  }

  return (
    <div className="add-todo-container">
        <input onChange={(event) => {setTodo(event.target.value)}}
                className='input-add-todo'
                value={todo}
                placeholder='Add todo'/>
        <div onClick={() => submitTodo()}
                className="material-symbols-rounded add-button">
        add
        </div>
    </div>
  );
}