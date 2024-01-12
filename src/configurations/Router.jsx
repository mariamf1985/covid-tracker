import React from 'react'
import { Route, Routes } from 'react-router-dom'
import MainHome from '../pages/mainHome/MainHome'
import Tracker1 from '../pages/tracker-1/tracker-1'
import Tracker2 from '../pages/tracker-2/tracker-2'
import Traker3 from '../pages/tracker-3/Traker-3'

const Router = () => {
  return (
    <Routes>
        <Route path='/' element={<MainHome></MainHome>}/>
        <Route path='/tracker-1' element={<Tracker1></Tracker1>}/>
        <Route path='/tracker-2' element={<Tracker2></Tracker2>}/>
        <Route path='/tracker-3' element={<Traker3></Traker3>}/> 
    </Routes>
  )
}

export default Router