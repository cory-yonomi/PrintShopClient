import { useEffect, useState } from 'react'
import { gql, useMutation } from '@apollo/client'

export default function ClientDisplay({ client, clients, setClient, setClients, setDisplayClient }) {
    const [editing, setEditing] = useState(false)
    const [ company, setCompany ] = useState('')
    const [ contactName, setContactName ] = useState('')
    const [ email, setEmail ] = useState('')
    const [ phone, setPhone ] = useState('')
    
    const companyInput = e => {
        console.log(e)
        setCompany(e.target.value)
    }

    const contactNameInput = e => {
        setContactName(e.target.value)
    }
    const emailInput = e => {
        setEmail(e.target.value)
    }

    const phoneInput = e => {
        setPhone(e.target.value)
    }

    const refreshClients = () => {
        let newClients = clients.map( (match) => {
            if (match._id === client._id) {
                
                return {company: company, contactName: contactName, email: email, phone: phone}
            }
            return match
        })
        setEditing(false)
        
        setClients(newClients)
    }

    const EDIT_CUSTOMER = gql`
    mutation editCustomer($company: String!, $contactName: String!, $email: String!, $phone: String!, $_id: ID){
        editCustomer(company: $company, contactName: $contactName, email: $email, phone: $phone, _id: $_id){
            contactName
            }
        }
    `
    const [editCustomer] = useMutation(EDIT_CUSTOMER, {
        variables: {
        _id: client._id,
        company: company,
        contactName: contactName,
        email: email,
        phone: phone
        }
    })

    const submitHandler = (e) => {
        e.preventDefault()
        editCustomer()
        refreshClients()
        setCompany(company)
        setContactName(contactName)
        setEmail(email)
        setPhone(phone)
        setDisplayClient(false)
    }

    useEffect(() => {
        setCompany(client.company)
        setContactName(client.contactName)
        setEmail(client.email)
        setPhone(client.phone)
    }, [client])

    return (
        <>
            {!editing ? (
                <div className='clientDisplay'>
                    <div>{client.company}</div>
                    <div>{client.contactName}</div>
                    <div>{client.email}</div>
                    <div>{client.phone}</div>
                    <div>
                        <button onClick={() => setEditing(true)}>Edit</button>
                        <button onClick={() => setDisplayClient(false)}>X</button>
                    </div>
                    
                </div>
            ) : (
                    <div className='clientDisplay'>
                        <form onSubmit={submitHandler}>
                            <label htmlFor="company">Company:</label>
                            <input type="text" onChange={companyInput} value={company}/>
                            <label htmlFor="contactName">Contact:</label>
                            <input type="text" onChange={contactNameInput} value={contactName}/>
                            <label htmlFor="email">Email:</label>
                            <input type="text" onChange={emailInput} value={email}/>
                            <label htmlFor="phone">Phone:</label>
                            <input type="text" onChange={phoneInput} value={phone}/>
                            <input type="submit" /><input type="reset" onClick={() => setEditing(false)} />
                        </form>
                    </div>
            )}
        </>
    )
}
