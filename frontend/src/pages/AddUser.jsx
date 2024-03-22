import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

export default function AddUser({image}) {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [contact, setContact] = useState('')
    const [adress, setAddress] = useState('')
    const [file, setFile] = useState('')
    const [validation, setValidation] = useState({})

    console.log(image)
    console.log(name)
    console.log(file)
    const navigate = useNavigate()

    const handleImageChange = (e) => {
        setFile(e.target.files[0])
    }


    const handleSubmit = async (e) => {
        e.preventDefault()

        // kiểm tra validation
        const validation = {};
        if (name.trim() === '') {
            validation.name = "Vui lòng nhập tên"
        }

        if (email.trim() === '') {
            validation.email = 'Vui lòng nhập email'
        }

        if (contact.trim() === '') {
            validation.contact = 'Vui lòng nhập sđt'
        }

        if (adress.trim() === '') {
            validation.adress = 'Vui lòng nhập adress'
        }

        if (file === '') {
            validation.file = 'Vui lòng chọn hình ảnh'
        }

        // Nếu có lỗi, hiển thị thông báo và không gửi form
        if (Object.keys(validation).length > 0) {
            setValidation(validation);
            return;
        }

        const formData = new FormData()
        formData.append('name', name)
        formData.append('email', email)
        formData.append('contact', contact)
        formData.append('adress', adress)
        formData.append('file', file)


        await axios.post('http://localhost:5000/create', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
            .then((res) => {
                console.log(res.data)
                navigate('/')
                toast.success('Add user successfully')
            })
            .catch((err) => {
                console.log(err)
            })

        console.log(formData)
    }

    return (
        <div>
            <h1 className='text-[red] text-[30px]'>ADD USER</h1>
            <form enctype="multipart/form-data" method="post">
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
                {validation.name && <p className='text-[red]'>{validation.name}</p>}
                <br />
                <label htmlFor="">
                    Email:
                    <input type="text"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder='Email...'
                        name='email'
                        className='w-[500px] px-2 h-[40px] border m-2' />
                </label>
                {validation.email && <p className='text-[red]'>{validation.email}</p>}
                <br />
                <label htmlFor="">
                    Adress:
                    <input type="text"
                        value={adress}
                        onChange={(e) => setAddress(e.target.value)}
                        placeholder='Adress...'
                        name='adress'
                        className='w-[500px] px-2 h-[40px] border m-2' />
                </label>
                {validation.email && <p className='text-[red]'>{validation.email}</p>}

                <br />
                <label htmlFor="">
                    Contact:
                    <input type="text"
                        value={contact}
                        onChange={(e) => setContact(e.target.value)}
                        placeholder='Contact...'
                        name='contact'
                        className='w-[500px] px-2 h-[40px] border m-2' />
                </label>
                {validation.contact && <p className='text-[red]'>{validation.contact}</p>}

                <br />
                <div className='border-dashed border-[#000] border-[3px] w-[100px] h-[100px] m-0 mx-auto bg-slate-200'>
                    <label for={'input_image'}>
                        <input
                            id={'input_image'}
                            type="file"
                            name='image'
                            onChange={handleImageChange}
                            className='w-[500px] px-2 h-[40px] border m-2' />
                        <div className='text-[50px] cursor-pointer'>
                            🎉
                        </div>

                    </label>
                    {validation.file && <p className='text-[red]'>{validation.file}</p>}
                </div>
                <br />
                <button
                    type='submit'
                    onClick={handleSubmit}
                    className='w-[300px] border bg-blue-500 p-2 rounded font-bold text-[#fff]'>
                    Add User
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
    )
}
