import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
    const [activeTab, setActiveTab] = useState('Home')

    return (
        <div className='p-6 bg-[#565656] text-center'>
            <ul>
                <li>
                    <Link to={'/'} 
                    className={`${activeTab === 'Home' ? "bg-black text-[#fff] px-5 py-2 rounded-[8px] duration-300 " : "px-5 py-2 "}`}
                    onClick={() => setActiveTab('Home')}>
                        Home
                    </Link>
                    <Link to={'/contact'} 
                    className={`${activeTab === 'Contact' ? "bg-black text-[#fff] px-5 py-2 rounded-[8px] duration-300 " : "px-5 py-2 "}`}
                    onClick={() => setActiveTab('Contact')}>
                        Contact
                    </Link>
                </li>
            </ul>
        </div>
    )
}
