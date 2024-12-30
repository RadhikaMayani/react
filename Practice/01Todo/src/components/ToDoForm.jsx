import React, { useState, useContext } from 'react'
import { nanoid } from 'nanoid'
import { ToDoContext } from '../context/ToDoContext'

function ToDoForm() {
  const [todo, setTodo] = useState("")
  const { addToDo } = useContext(ToDoContext)

  const submitHandler = (e) => {
    e.preventDefault();

    console.log(todo)

    addToDo({
      id: nanoid(),
      text: todo,
      completed: false
    })
    setTodo('')

  }

  return (
    <>
      <form onSubmit={submitHandler} className='w-full flex justify-center'>
        <input type="text" placeholder="Write to do here..." value={todo} onChange={(e) => setTodo(e.target.value)} className="todo-input border w-1/2 p-2 rounded-lg m-3" />
        <button className="todo-button border text-gray-700 p-4 m-3 rounded-lg" type="submit">Add</button>
      </form>
    </>
  )
}

export default ToDoForm