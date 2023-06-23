import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'

export const fetchTodos = createAsyncThunk('todos/fetchTodos', async () => {
  const response = await axios.get('http://localhost:8000/todos')
  console.log('fetchTodos response', response)
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


/* export const editProduct = createAsyncThunk(
  'products/editProduct',
  async (productObj: { id: string, fireProduct: FireProduct }, thunkAPI: any) => {

    var updates: { [key: string]: FireProduct } = {};
    updates['/allProducts/' + productObj.id] = productObj.fireProduct;

    database.ref().update(updates, (error) => {
      if (error) {
        // The write failed...
        console.log("editProduct error", error);
        return thunkAPI.rejectWithValue(error);
      } else { */


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
        state.todos.push(action.payload)
        state.todoAdded = true
      })
      builder.addCase(removeSingleTodo.fulfilled, (state, action) => {
        state.todos = state.todos.filter(todo => todo._id !== action.payload)
        state.todoAdded = true
      })
      builder.addCase(removeAllTodos.fulfilled, (state, action) => {
        state.todos = state.todos.splice(0,state.todos.length)
        state.todoAdded = true
      })
    },
})

export const { /* If we have static reducers */ } = todoSlice.actions
export default todoSlice.reducer