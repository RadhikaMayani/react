import { useContext, useState } from 'react'
import { ToDoContext } from '../context/ToDoContext'

function ToDoItem({ todo }) {
  const [isEditing, setIsEditing] = useState(false)
  const [newText, setNewText] = useState(todo.text)
  const { updateToDo, deleteToDo, toggleComplete } = useContext(ToDoContext)
  const { id, text, completed } = todo

  const handleEdit = () => {
    if (isEditing) {
      updateToDo(id, { ...todo, text: newText })
      setIsEditing(false)
    } else {
      setIsEditing(true)
    }
  }

  const handleDelete = () => {
    deleteToDo(id)
  }

  return (
    <div className={`flex border p-2 m-2 rounded-lg`} >
      <input className='m-2 p-2' type="checkbox" name="" id="" checked={completed} onChange={() => toggleComplete(id)} />
      <input className={`m-2 p-2 ${completed ? "line-through" : ""}`} readOnly={!isEditing} disabled={!isEditing} onChange={(e) => setNewText(e.target.value)} type="text" name="to-do" id="" value={newText} />
      <button className='border p-3 m-2 bg-gray-600 text-white  rounded-lg' disabled={completed} onClick={handleEdit}>{(isEditing) ? "Save" : "Edit"}</button>
      <button className='border p-3 m-2 bg-gray-600 text-white  rounded-lg' onClick={handleDelete}>Delete</button>
    </div >
  )
}

export default ToDoItem