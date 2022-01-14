import React, { useState, useEffect } from 'react'
import { gql, useQuery } from '@apollo/client'

export default function ProjectForm({ clients }) {
    
    const [name, setName] = useState('')
    const [dueDate, setDueDate] = useState(new Date())
    const [customer, setCustomer] = useState('')

    const nameInput = e => {
        setName(e.target.value)
    }

    const dueDateInput = e => {
        setDueDate(e.target.value)
    }

    const customerInput = e => {
        setCustomer(e.target.value)
    }

    

    const submitHandler = () => {

    }
    
    

    return (
        <div>
            <h3>Begin Project</h3>
            <form onSubmit={submitHandler}>
                <label htmlFor="name">Name:</label>
                <input type="text" onChange={nameInput}/><br />
                <label htmlFor="dueDate">Due Date:</label>
                <input type="text" onChange={dueDateInput}/><br />
                <label htmlFor="customer">Customer:</label>
                <select id='customer' name='customer' onChange={customerInput}>
                    {clients.map(client => {
                        return <option value={client._id}>{client.company}</option>
                    })}
                </select>
                <input type="submit" />
            </form >
        </div>
    )
}
