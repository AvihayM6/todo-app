import './App.css'
import {useSelector, useDispatch} from 'react-redux'
import {fetchTodos} from './state-management/TodoSlice'
import {Todo} from './components/Todo'
import {Summary} from './components/Summary'
import {AddTodo} from './components/AddTodo'
import { useEffect } from 'react'

function App() {
  const todoList = useSelector((state) => state.todos.todos)
  const todoAdded = useSelector((state) => state.todos.todoAdded)
  const dispatch = useDispatch()

  useEffect(() => {
    if(todoAdded) dispatch(fetchTodos())
    dispatch(fetchTodos())
  }, [dispatch, todoAdded])
  
  return (
    <div className="App">
        <h1 className="todo-title">
          <span>TODO App</span>
        </h1>
        <AddTodo />
        <div className="todos-list">
          {
            todoList?.length > 0 &&
              todoList.map((todoItem, idx) => {
                return <Todo key={idx}
                             todoItem={todoItem} />
              })
          }
        </div>
        <Summary />
    </div>
  );
}

export default App;
