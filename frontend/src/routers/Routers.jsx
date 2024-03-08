import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from '../pages/Home'
import Contact from '../pages/Contact'
 
const Routers = () => {
    return (
        <div>
           
                <Routes>
                    <Route path='/' element={<Home/>} />
                    <Route path='/contact' element={<Contact />} />
                </Routes>
            
        </div>
    )
}

export default Routers
