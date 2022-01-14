import { useState } from 'react'
import { gql, useMutation } from '@apollo/client'



const ClientForm = () => {

    const [ company, setCompany ] = useState('')
    const [ contactName, setContactName ] = useState('')
    const [ email, setEmail ] = useState('')
    const [ phone, setPhone ] = useState('')
    
    const companyInput = e => {
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

    const CREATE_CUSTOMER = gql`
    mutation createCustomer($company: String!, $contactName: String!, $email: String!, $phone: String!){
        createCustomer(company: $company, contactName: $contactName, email: $email, phone: $phone){
            contactName
            }
        }
    `

    const [createCustomer] = useMutation(CREATE_CUSTOMER, {
    variables: {
        company: company,
        contactName: contactName,
        email: email,
        phone: phone
        }
    })
    

    const submitHandler = (e) => {
        e.preventDefault()
        console.log(e)
        createCustomer()
        setCompany('')
        setContactName('')
        setEmail('')
        setPhone('')
    }
    
    return (
        <div>
            <h3>Add A Client</h3>
            <form onSubmit={submitHandler}>
                <label htmlFor="company">Company:</label>
                <input type="text" onChange={companyInput} value={company}/><br />
                <label htmlFor="contactName">Contact:</label>
                <input type="text" onChange={contactNameInput} value={contactName}/><br />
                <label htmlFor="email">Email:</label>
                <input type="text" onChange={emailInput} value={email}/><br />
                <label htmlFor="phone">Phone:</label>
                <input type="text" onChange={phoneInput} value={phone}/><br />
                <input type="submit" />
            </form >
        </div>
    )
}

export default ClientForm