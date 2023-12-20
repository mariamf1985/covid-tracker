import { useState } from 'react'
import './App.css'
import NavbarTracker from './components/navbar-tracker/NavbarTracker'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <NavbarTracker></NavbarTracker>
    </>
  )
}

export default App
