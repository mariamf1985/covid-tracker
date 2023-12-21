import { useState } from 'react'
import './App.css'
import NavbarTracker from './components/navbar-tracker/navbarTracker'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavbarTracker/>
    </>
  )
}

export default App
