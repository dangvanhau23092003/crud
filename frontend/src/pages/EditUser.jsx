import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { toast } from 'react-toastify'

export default function EditUser() {

    const { id } = useParams()
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [adress, setAdress] = useState('')
    const [contact, setContact] = useState('')
    const [file, setFile] = useState('')
    const [editUser, setEditUser] = useState([])
    console.log('file', file)

    const navigate = useNavigate()

    useEffect(() => {
        axios.get(`http://localhost:5000/get-edit/${id}`)
            .then(res => {
                setEditUser(res.data)
                setName(res.data.name)
                setEmail(res.data.email)
                setAdress(res.data.adress)
                setContact(res.data.contact)
                setFile(res.data.image)
            })
            .catch(err => console.error(err))
    }, [id])

    // handleUpdateUser
    const handleUpdateUser = async (e) => {
        e.preventDefault()

        const formData = new FormData()
        formData.append('name', name)
        formData.append('email', email)
        formData.append('contact', contact)
        formData.append('adress', adress)
        formData.append('file', file)

        await axios.put(`http://localhost:5000/update-edit/${id}`, formData)
            .then(res => {
                console.log(res.data)
                navigate('/')
                toast.success('Updated user successfully')
            })
            .catch(err => {
                console.error(err)
            })
    }

    return (
        <div>
            <h1 className='text-[red] text-[30px]'>EDIT USER</h1>
            <div>
                <form onSubmit={handleUpdateUser}>
                    <label htmlFor="">
                        Name:
                        <input type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder='Name...'
                            name='name'
                            required
                            className='w-[500px] px-2 h-[40px] border m-2' />
                    </label>
                    <br />
                    <label htmlFor="">
                        Email:
                        <input type="text"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder='Email...'
                            name='email'
                            required
                            className='w-[500px] px-2 h-[40px] border m-2' />
                    </label>
                    <br />
                    <label htmlFor="">
                        Contact:
                        <input type="text"
                            value={contact}
                            onChange={(e) => setContact(e.target.value)}
                            placeholder='Contact...'
                            name='contact'
                            required
                            className='w-[500px] px-2 h-[40px] border m-2' />
                    </label>
                    <br />
                    <label htmlFor="">
                        Adress:
                        <input type="text"
                            value={adress}
                            onChange={(e) => setAdress(e.target.value)}
                            placeholder='Adress...'
                            name='adress'
                            required
                            className='w-[500px] px-2 h-[40px] border m-2' />
                    </label>
                    <br />
                    <div>
                        <img src={`http://localhost:5000/${editUser.image}`} alt={name} width={300}
                            className='m-0 mx-auto' />
                    </div>
                    <br />
                    <input type="text"
                        value={editUser.image}
                        placeholder='Image...'
                        name='image'
                        required
                        className='w-[500px] px-2 h-[40px] border m-2' />
                    <br />
                    <label htmlFor="">
                        Image:
                        <input type="file"
                            onChange={(e) => setFile(e.target.files[0])}
                            placeholder='Image...'
                            name='image'
                            required
                            className='w-[500px] px-2 h-[40px] border m-2' />
                    </label>
                    <br />
                    <button
                        type='submit'
                        className='w-[300px] border bg-blue-500 p-2 rounded font-bold text-[#fff]'>
                        Edit User
                    </button>
                    <br />
                    <button
                        className='w-[300px] border bg-[#000000] p-2 rounded font-bold text-[#fff]'>
                        <Link to={'/'}>
                            Back
                        </Link>
                    </button>
                </form>
            </div>
        </div>
    )
}
