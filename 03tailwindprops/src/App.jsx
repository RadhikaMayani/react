import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='bg-green-400 p-4 text-slate-700 rounded-2xl mb-4'>Tailwind test</h1>
      <Card />
      <Card userName="Kanisha" />
    </>
  )
}

export default App
