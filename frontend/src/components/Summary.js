/* import './AddTodo.css' */
import { useDispatch, useSelector } from 'react-redux'
import { removeAllTodos } from '../state-management/TodoSlice'

export const Summary = () => {
  const dispatch = useDispatch()
  const todoList = useSelector((state) => state.todos)

  const removeTodos = () => {
    dispatch(removeAllTodos())
  }
  return (
    <div className="summary-container">
      <div className="remain-todos">
        {todoList?.length > 0 ? `You have ${todoList?.length} panding tasks.` 
                             : `You Don't have tasks. Please add some`
        }
      </div>
      <div className='delete-all'
           onClick={() => {removeTodos()}}>
        Clear all
      </div>
    </div>
  );
}