import '../style/Todo.css'
import { useDispatch } from 'react-redux'
import { removeTodo } from '../state-management/TodoSlice'

export const Todo = ({todoItem}) => {
  const dispatch = useDispatch()
  const remove = () => {
    dispatch(removeTodo(todoItem))
  }
  return (
    <div className="todo-container"
         title={todoItem}>
      <div className='todo-text'> {todoItem} </div>
      <span className="material-symbols-outlined delete-todo"
            onClick={() => remove()}>
        delete
      </span>
    </div>
  );
}