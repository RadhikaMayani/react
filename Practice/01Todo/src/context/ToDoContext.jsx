import { createContext, useState } from 'react'

const ToDoContext = createContext()

function ToDoContextProvider({ children }) {
  const [todos, setTodos] = useState([])
  const addToDo = (todo) => {
    setTodos([...todos, todo])
  }
  const updateToDo = (id, newtodo) => {
    setTodos(todos.map((todo) => todo.id === id ? newtodo : todo))
  }
  const deleteToDo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id))
  }
  const toggleComplete = (id) => {
    setTodos(todos.map((todo) => todo.id === id ? { ...todo, completed: !todo.completed } : todo))
    console.log(todos)
  }

  return (
    <ToDoContext.Provider value={{ todos, addToDo, updateToDo, deleteToDo, toggleComplete }}>
      {children}
    </ToDoContext.Provider>
  )
}

export { ToDoContextProvider, ToDoContext }