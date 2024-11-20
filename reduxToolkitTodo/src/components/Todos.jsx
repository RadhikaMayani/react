import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo, updateTodo } from "../features/todo/todoSlice"

export default function Todos() {
  const todos = useSelector(state => state.todos)
  const dispatch = useDispatch()

  const [todoU, setTodoU] = useState('')



  return (
    <>

      {todos.map((todo) => (
        <div key={todo.id} className='w-full'>
          <div key={todo.id}
            className={`flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300  text-black ${todo.completed ? "bg-[#c6e9a7]" : "bg-[#ccbed7]"
              }`}
          >

            <input
              key={todo.id}
              type="text"
              className={`border outline-none w-full bg-transparent rounded-lg`}
              value={todo.text}
              onChange={(e) => setTodoU(e.target.value)}
            />
            {/* Edit, Save Button */}
            <button
              className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50"
              onClick={() => dispatch(updateTodo({ id: todo.id, text: todoU }))}

            >
              📁
            </button>
            {/* Delete Todo Button */}
            <button
              className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
              onClick={() => dispatch(removeTodo(todo.id))}
            >
              ❌
            </button>
          </div>
        </div >
      ))
      }




    </>

  )
}