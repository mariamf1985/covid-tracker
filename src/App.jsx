
import React from 'react'
import './App.css'
import NavbarTracker from './components/navbar-tracker/navbarTracker'
import Tracker0 from './pages/tracker0/Tracker0'
import Router from './configurations/Router'


function App() {

  return (
    <>
    <NavbarTracker/>
    <Tracker0></Tracker0>
    <Router></Router>
    </>
  )
}

export default App
