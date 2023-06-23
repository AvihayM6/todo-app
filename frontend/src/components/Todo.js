import '../style/Todo.css'
import { useDispatch } from 'react-redux'
import { removeSingleTodo } from '../state-management/TodoSlice'

export const Todo = ({todoItem}) => {
  const dispatch = useDispatch()
  const remove = () => {
    dispatch(removeSingleTodo(todoItem._id))
    //TODO: need to continue handle an update the list after deleting
  }
  return (
    <div className="todo-container"
         title={todoItem.text}>
      <div className='todo-text'> {todoItem.text} </div>
      <span className="material-symbols-outlined delete-todo"
            onClick={() => remove()}>
        delete
      </span>
    </div>
  );
}