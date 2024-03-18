import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import Contact from '../pages/Contact'
import AddUser from '../pages/AddUser'
import ViewUser from '../pages/ViewUser'

const Routers = () => {
    return (
        <div>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/contact' element={<Contact />} />
                <Route path='/create' element={<AddUser />} />
                <Route path='/view-user/:id' element={<ViewUser />} />
            </Routes>
        </div>
    )
}

export default Routers
