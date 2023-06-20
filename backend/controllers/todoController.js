const mongoose = require('mongoose')
const Todos = require('../dbTodos')

//Get todos list
const getTodos = async (req,res) => {
  try {
    const allTodos = await Todos.find({}).sort({createdAt: -1})
    res.status(200).send(allTodos)
  }
  catch (err) {
    res.status(400).send(err.message)
  }
}

//Add todo to the list
const createTodo = async (req,res) => {
  const dbTodo = req.body
  try {
    const newTodo = await Todos.create(dbTodo)
    res.status(201).send(newTodo)
  }
  catch (err) {
    res.status(500).send(err.message)
  }
}

//delete one todo from the list
const deleteTodo = async (req,res) => {
  const {id} = req.body
  if(!mongoose.Types.ObjectId(id)) {
    return res.status(404).send(`The id: ${id} was not found`)
  }
  try {
    const deleteTodo = await Todos.findOneAndDelete({_id: id})
    res.status(201).send(deleteTodo)
  }
  catch (err) {
    res.status(500).send(err.message)
  }
}

//delete all todos list
const deleteAllTodos = async (req,res) => {
  try {
    const deleteAllTodos = await Todos.deleteMany({})
    res.status(200).send(deleteAllTodos)
  }
  catch (err) {
    res.status(400).send(err.message)
  }
}



module.exports = {getTodos, createTodo, deleteTodo, deleteAllTodos}