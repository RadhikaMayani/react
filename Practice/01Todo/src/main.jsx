import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ToDoContextProvider as Provider } from "./context/ToDoContext"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider>
      <App />
    </Provider>
  </StrictMode>,
)
