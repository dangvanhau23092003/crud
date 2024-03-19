import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'

export default function ViewUser() {

    const { id } = useParams()
    const [viewIdUser, setViewIdUser] = useState([])
    console.log('id', viewIdUser)

    useEffect(() => {
        axios.get(`http://localhost:5000/view/${id}`)
            .then((res) => {
                // console.log('id',res.data.id)
                setViewIdUser(res.data)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [id])

    return (
        <div>
            <h1 className='text-[red] text-[30px]'>VIEW USER</h1>
            <div className='border m-4 p-4 flex items-center justify-center'>
                <div className='m-4'>
                    <h1>Name:
                        {viewIdUser.name}
                    </h1>
                    <br />
                    <p>Email:{viewIdUser.email}</p>
                    <br />
                    <p>Contact: {viewIdUser.contact} </p>
                    <br />
                    <p>Adress: {viewIdUser.adress} </p>
                    <br />
                </div>
                <div className='m-4'>
                    <img src={`http://localhost:5000/${viewIdUser.image}`} alt="" width={300} />
                </div>
            </div>
            <button
                className='w-[300px] border bg-[#000000] p-2 rounded font-bold text-[#fff]'>
                <Link to={'/'}>
                    Back
                </Link>
            </button>
        </div>
    )
}
