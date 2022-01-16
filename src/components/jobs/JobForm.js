import React, { useState } from 'react'
import { gql, useMutation } from '@apollo/client'

export default function JobForm({ clients, jobs, setJobs }) {
    const [item, setItem] = useState('')
    const [media, setMedia] = useState('')
    const [height, setHeight] = useState('')
    const [width, setWidth] = useState('')
    const [quantity, setQuantity] = useState(0)
    const [dueDate, setDueDate] = useState(new Date())
    const [notes, setNotes] = useState('')
    const [customer, setCustomer] = useState('')

    const itemInput = e => {
        setItem(e.target.value)
    }

    const mediaInput = e => {
        setMedia(e.target.value)
    }

    const heightInput = e => {
        setHeight(e.target.value)
    }

    const widthInput = e => {
        setWidth(e.target.value)
    }

    const quantityInput = e => {
        setQuantity(e.target.value)
    }

    const dueDateInput = e => {
        setDueDate(e.target.value)
    }

    const notesInput = e => {
        setNotes(e.target.value)
    }

    const customerInput = e => {
        setCustomer(e.target.value)
    }

    const CREATE_JOB = gql`
    mutation createJob($item: String!, $media: String!, $height: Float!, $width: Float!, $quantity: Int!, $dueDate: String!, $notes: String!, $customer: ID!){
        createJob(item: $item, media: $media, height: $height, width: $width, quantity: $quantity, customer: $customer, notes: $notes, dueDate: $dueDate){
            item
            dueDate
            customer {
                company
                }
            }
        }
    `

    const [createJob] = useMutation(CREATE_JOB, {
    variables: {
            item: item,
            media: media,
            height: parseFloat(height),
            width: parseFloat(width),
            quantity: parseInt(quantity),
            notes: notes,
            dueDate: new Date(dueDate),
            customer: customer,
        }
    })

    const submitHandler = (e) => {
        // console.log('butt')
        e.preventDefault()
        createJob()
        setJobs([{
            item: item,
            media: media,
            height: height,
            width: width,
            quantity: quantity,
            notes: notes,
            dueDate: new Date(dueDate),
            customer: customer
        }, ...jobs])
        setItem('')
        setMedia('')
        setHeight('')
        setWidth('')
        setQuantity(0)
        setDueDate(new Date())
        setNotes('')
        setCustomer('')
        
    }

    return (
        <div>
            <h3>Add A Job</h3>
            <form onSubmit={submitHandler} className='formTable'>
                <p>
                <label htmlFor="item">Item:</label>
                <input type="text" onChange={itemInput} /><br />
                </p>
                <p>
                <label htmlFor="media">Media:</label>
                <input type="text" onChange={mediaInput} /><br />
                </p>
                <p>
                <label htmlFor="height">Height:</label>
                <input type="text" onChange={heightInput} /><br />
                </p>
                <p>
                <label htmlFor="width">Width:</label>
                <input type="text" onChange={widthInput} /><br />
                </p>
                <p>
                <label htmlFor="quantity">Quantity:</label>
                <input type="number" onChange={quantityInput} /><br />
                </p>
                <p>
                <label htmlFor="dueDate">Due Date:</label>
                <input type="date" onChange={dueDateInput} /><br />
                </p>
                <p>
                <label htmlFor="notes">Notes:</label>
                <input type="text" onChange={notesInput} /><br />
                </p>
                <p>
                <label htmlFor="customer">Customer:</label>
                <select id='customer' name='customer' onChange={customerInput} >
                        <option value="">Select Client</option>
                            {clients.map(client => {
                                return <option value={client._id} key={client._id}>{client.company}</option>
                            })}
                    </select>
                </p>
                <input type="submit" />
            </form >
        </div>
    )
}
