import React from 'react'
import { useParams } from 'react-router-dom'

export default function ViewUser() {

    const { _id } = useParams()
    console.log( _id )

    return (
        <div>
            <h1 className='text-[red] text-[30px]'>VIEW USER</h1>
            <div className='border p-4'>
                <h1>Name:
                    
                </h1>
                <br />
                <p>Email:</p>
                <br />
                <p>Contact: </p>
            </div>
        </div>
    )
}
