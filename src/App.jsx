import { useState } from 'react'
import Navbar from "./Navbar"
import './App.css'
import './index.css'
import { Route, Routes } from 'react-router-dom'

import Home from "./page/Home"
import Information from "./page/Information"
import Calculator from './page/Calculator'
import Education from './Page/Education'
import InteractiveMap from './page/InteractiveMap'
import RealTimeDataSumur from './page/RealTimeData'

function App() {
  return(
    <>
        <Navbar/>
        
        <div className='container'>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/info" element={<Information/>}/>
                <Route path="/education" element={<Education/>}/>
                <Route path="/map" element={<InteractiveMap/>}/>
                <Route path="/sumur" element={<RealTimeDataSumur/>}/>
                <Route path="/calculator" element={<Calculator/>}/>
            </Routes>
        </div>
    </>
  ) 
}

export default App
