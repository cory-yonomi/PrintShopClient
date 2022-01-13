import axios from 'axios'
import { useState, useEffect } from 'react'
import { gql, useMutation } from '@apollo/client'



const CustomerForm = () => {

    const [ company, setCompany ] = useState('')
    const [ contactName, setContactName ] = useState('')
    const [ email, setEmail ] = useState('')
    const [phone, setPhone] = useState('')
    
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
    mutation CreateCustomer($company: String!, $contactName: String!, $email: String!, $phone: String!){createCustomer(Customer: {company: $company, contactName: $contactName, email: $email, phone: $phone})}`

    const [createProduct, {data, loading, error}] = useMutation(CREATE_CUSTOMER, {
    variables: {company: company,contactName: contactName, email: email, phone: phone}})
    

    const submitHandler = (e) => {
        e.preventDefault()
        console.log(e)
        createProduct()
        
        // axios({
        //     url: 'http://localhost:8000/graphql',
        //     method: 'post',
        //     data: {
        //      query: `mutation {CustomerInput(company: $company, contactName: $contactName, email: $email, phone: $phone){company contactName email phone}}`
        //     },
        //     variables: {
        //         company: company,
        //         contactName: contactName,
        //         email: email,
        //         phone: phone
        //     }
        //    })
        //     .then(res => {
        //      console.log(res.data);
        //     })
        //     .catch(err => {
        //      console.log(err.message);
        //     });
    }
    
    return (
        <div>
            <h3>Add A Client</h3>
            <form >
                <label htmlFor="company">Company:</label>
                <input type="text" onChange={companyInput}/><br />
                <label htmlFor="contactName">Contact:</label>
                <input type="text" onChange={contactNameInput}/><br />
                <label htmlFor="email">Email:</label>
                <input type="text" onChange={emailInput}/><br />
                <label htmlFor="phone">Phone:</label>
                <input type="text" onChange={phoneInput}/><br />
                <button onClick={submitHandler}>Submit</button>
            </form >
        </div>
    )
}

export default CustomerForm