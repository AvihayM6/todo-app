import './App.css'
import {useState} from 'react'
import {useSelector} from 'react-redux'
import {Todo} from './components/Todo'
import {Summary} from './components/Summary'
import {AddTodo} from './components/AddTodo'

function App() {
  const todoList = useSelector((state) => state.todos)
  return (
    <div className="App">
        <h1 className="todo-title">
          <span>TODO App</span>
        </h1>
        <AddTodo />
        <div className="todos-list">
          {
            todoList?.length > 0 ? 
              todoList.map((todoItem, idx) => {
                return <Todo key={idx}
                             todoItem={todoItem} />
              })
            :
              <div>Noting to display</div>
          }
        </div>
        <Summary />
    </div>
  );
}

export default App;
