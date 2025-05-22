import { useState } from 'react'
import './App.css'
import Land from './Land'

function App() {
  const [count, setCount] = useState(0)
  

  return (
    <div className='max-w-screen overflow-hidden'>
      <Land />
    </div>
  )
}

export default App
