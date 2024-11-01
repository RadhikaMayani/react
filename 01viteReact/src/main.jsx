import React from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'

function MyApp() {
  return (
    <div>
      <h1>custom App</h1>
    </div>
  )
}

const anotherElement = (
  <a href="https://google.com" target="_blank">Click me to the google</a>
)

const reactElement = React.createElement(
  'a',
  {
    href: 'https://google.com',
    target: '_blank',
    alt: 'Hari'
  },
  'Click me!!!'
)

createRoot(document.getElementById('root')).render(
  <App />
  //anotherElement
  //reactElement

)
