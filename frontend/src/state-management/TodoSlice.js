import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'

export const fetchTodos = createAsyncThunk('todos/fetchTodos', async () => {
  const response = await axios.get('http://localhost:8000/todos')
  return response.data
})

export const addSingleTodo = createAsyncThunk('todos/addSingleTodo', async (todo) => {
  const response = await axios.post('http://localhost:8000/todos', {
    text: todo,
  })
  return response.data
})

export const removeSingleTodo = createAsyncThunk('todos/removeSingleTodo', async (todoId) => {
  const response = await axios.delete(`http://localhost:8000/todos/${todoId}`,{ data: { _id: todoId } })
  return response.data
})

export const removeAllTodos = createAsyncThunk('todos/removeAllTodos', async () => {
  const response = await axios.delete(`http://localhost:8000/todos`)
  return response.data
})

const todoSlice = createSlice({
    name: 'todo',
    initialState: { 
      todos: [],
      todoAdded: false,
    },
    reducers: {
    },
    extraReducers: (builder) => {
      builder.addCase(fetchTodos.fulfilled, (state, action) => {
        state.todos = action.payload
        state.todoAdded = false
      })
      builder.addCase(addSingleTodo.fulfilled, (state, action) => {
        state.todoAdded = true
      })
      builder.addCase(removeSingleTodo.fulfilled, (state, action) => {
        state.todoAdded = true
      })
      builder.addCase(removeAllTodos.fulfilled, (state, action) => {
        state.todoAdded = true
      })
      /* Need to add for each case pending, fulfilled, rejected cases */
    },
})

export const { /* If we have static reducers */ } = todoSlice.actions
export default todoSlice.reducer