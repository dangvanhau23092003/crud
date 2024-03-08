import axios from 'axios'
import React, { useEffect, useState } from 'react'


export default function Home() {

    const [users, setUsers] = useState([])

    useEffect(() => {
        axios.get('http://localhost:5000/')
        .then((res) => {
            setUsers(res.data)
            // console.log(response.data)
        })
        .catch((error) => {
            console.error(error)
        })
    },[])
    console.log("=>",users)

    return (
        <div className='h-[300px]'>
            <h1 className='text-[red] text-[30px]'>CRUD USER</h1>
            <button className='border bg-blue-500 p-2 rounded font-bold text-[#fff]'>
                ADD USER
            </button>
            <table className='m-0 mx-auto mt-[40px] border'>
                <tr className='bg-[green] h-[50px]'>
                    <th className='text-[#fff]'>
                        STT
                    </th>
                    <th className='text-[#fff]'>
                        Name
                    </th>
                    <th className='text-[#fff]'>
                        Email
                    </th>
                    <th className='text-[#fff]'>
                        Addres
                    </th>
                    <th className='text-[#fff]'>
                        Contact
                    </th>
                    <th className='text-[#fff]'>
                        Image
                    </th>
                    <th className='text-[#fff]'>
                        Actions
                    </th>
                </tr>
                {users.map((user) => (
                    <tr key={user._id} className='h-[80px]'>
                        <td className='px-4'> {user._id } </td>
                        <td className='px-4'> {user.name} </td>
                        <td className='px-4'> {user.email} </td>
                        <td className='px-4'> { user.adress} </td>
                        <td className='px-4'> {user.contact} </td>
                        <td className='px-4'> 
                            <img src={user.image} alt="" width={100} />
                        </td>
                        <td className='px-4'>
                            <button className='border bg-yellow-500 p-2 rounded font-bold text-[#fff]'>Edit</button>
                            <button className='border bg-red-500 p-2 rounded font-bold text-[#fff]'>Delete</button>
                        </td>
                    </tr>
                ))}
            </table>
        </div>
    )
}
