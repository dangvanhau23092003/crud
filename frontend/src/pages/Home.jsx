import axios from 'axios'
import { Link } from 'react-router-dom'
import React, { useEffect, useState } from 'react'



export default function Home() {

    const [users, setUsers] = useState([])

    useEffect(() => {
        axios.get('http://localhost:5000')
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
        <div className='mb-10'>
            <h1 className='text-[red] text-[30px]'>CRUD USER</h1>
            <button className='border bg-blue-500 p-2 rounded font-bold text-[#fff]'>
                <Link to={'/create'}>
                    ADD USER
                </Link>
            </button>
            <table className='m-0 mx-auto mt-[40px] border bg-slate-400 '>
                <tr className='bg-[green] h-[50px]'>
                    {/* <th className='text-[#fff]'>
                        STT
                    </th> */}
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
                        {/* <td className='px-4'> {user._id } </td> */}
                        <td className='px-4 w-[400px]'> {user.name} </td>
                        <td className='px-4'> {user.email} </td>
                        <td className='px-4'> {user.adress} </td>
                        <td className='px-4'> {user.contact} </td>
                        <td className='px-4'> 
                            <img src={`http://localhost:5000/${user?.image}`} alt={user.name} width={100} />
                            {/* {console.log(`http://localhost:5000/${user?.image}`)} */}
                        </td>
                        <td className='px-4'>
                            <button className='border bg-white-500 p-2 rounded font-bold text-[#fff]'>
                                <Link to={`/view-user/${user._id}`}>
                                    View
                                </Link>
                            </button>
                            <button className='border bg-yellow-500 p-2 rounded font-bold text-[#fff]'>Edit</button>
                            <button className='border bg-red-500 p-2 rounded font-bold text-[#fff]'>Delete</button>
                        </td>
                    </tr>
                ))}
            </table>
        </div>
    )
}
