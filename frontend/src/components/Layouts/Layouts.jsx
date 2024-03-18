import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Routers from '../../routers/Routers'

export default function Layouts() {
    return (
        <>
        <div className='text-center '>
            <Header />
                <div className='bg-[#ccc] pb-10'>
                    <Routers />
                </div>
            <Footer />
        </div>
        </>
    )
}
