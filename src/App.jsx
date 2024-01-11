import React from 'react'
import './App.css'
import NavbarTracker from './components/navbar-tracker/NavbarTracker'
import AtomsBoard from '.././src/components/AtomsBoard/AtomsBoard'
import MoleculesBoard from '.././src/components/MoleculesBoard/MoleculesBoard'
import Tracker0 from './pages/tracker0/Tracker0'
import TopCountries from './molecules/TopCountries'
import Traker3 from '../src/pages/tracker-3/Traker-3'


function App() {

  return (
    <>
    <NavbarTracker/>
    {/* <AtomsBoard/> */}
    {/* <MoleculesBoard></MoleculesBoard> */}
    <Traker3/>
    <Tracker0></Tracker0>
    
    </>
  )
}

export default App
