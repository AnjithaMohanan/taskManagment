
const express = require('express');

const {addTodo,getAllTodos,toggleTodoDone,updateTodo,deleteTodo}=require('../controller/todo-controller')

const router = express.Router();


router.post('/todos', addTodo)
router.get('/todos', getAllTodos);
router.get('/todos/:id', toggleTodoDone);
router.put('/todos/:id', updateTodo);
router.delete('/todos/:id', deleteTodo);

module.exports= router;