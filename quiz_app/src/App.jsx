import { useState } from 'react'
// import data from './assets/Assets/data.js'
import './App.css'
import Quiz from './Component/Quiz/Quiz'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Quiz />
    </>
  )
}

export default App
