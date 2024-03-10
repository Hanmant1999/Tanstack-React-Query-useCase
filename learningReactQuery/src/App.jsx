import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Link } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Link to="/WithQuery">WithQuery</Link>
      <Link to ="/WithOutQuery">WithOutQuery</Link>
    </>
  )
}

export default App
