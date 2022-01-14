import React, { useState, useEffect } from 'react'
import { gql, useMutation } from '@apollo/client'

export default function ProjectForm({ clients }) {
    
    const [name, setName] = useState('')
    const [dueDate, setDueDate] = useState(new Date())
    const [customer, setCustomer] = useState('')
    const [notes, setNotes] = useState('')

    const nameInput = e => {
        setName(e.target.value)
    }

    const dueDateInput = e => {
        setDueDate(e.target.value)
    }

    const customerInput = e => {
        setCustomer(e.target.value)
    }

    const notesInput = e => {
        setNotes(e.target.value)
    }

    const CREATE_PROJECT = gql`
    mutation createProject($name: String!, $customer: ID!, $notes: String!, $dueDate: String!){
        createProject(name: $name, customer: $customer, notes: $notes, dueDate: $dueDate){
            name
            dueDate
            customer {
                company
                }
            }
        }
    `

    const [createProject] = useMutation(CREATE_PROJECT, {
    variables: {
        name: name,
        customer: customer,
        notes: notes,
        dueDate: new Date(dueDate)
        }
    })

    const submitHandler = (e) => {
        e.preventDefault()
        createProject()
        setName('')
        setDueDate(new Date())
        setNotes('')
        setCustomer('')
    }
    
    

    return (
        <div>
            <h3>Begin Project</h3>
            <form onSubmit={submitHandler}>
                <label htmlFor="name">Name:</label>
                <input type="text" onChange={nameInput}/><br />
                <label htmlFor="dueDate">Due Date:</label>
                <input type="date" onChange={dueDateInput}/><br />
                <label htmlFor="notes">Notes:</label>
                <input type="text" onChange={notesInput}/><br />
                <label htmlFor="customer">Customer:</label>
                <select id='customer' name='customer' onChange={customerInput}>
                    {clients.map(client => {
                        return <option value={client._id} key={client._id}>{client.company}</option>
                    })}
                </select>
                <input type="submit" />
            </form >
        </div>
    )
}
