import { useState, useEffect } from "react"
import ListDisplay from "../UI/ListDisplay"
import ClientForm from "./ClientForm"
import { gql, useQuery } from '@apollo/client'
import ClientDisplay from "./ClientDisplay"

export default function Clients() {
    const [clients, setClients] = useState([])
    const [selectedClient, setSelectedClient] = useState({})
    const [displayClient, setDisplayClient] = useState(false)

    const GET_ALL_CLIENTS = gql`
    query {
        customers {
            _id
            company
            contactName
            email
            phone
        }
    }
    `
    const {loading, data} = useQuery(GET_ALL_CLIENTS)
    
    useEffect(() => {
        if (data) {
            setClients(data.customers)
        }
    }, [data])
    
    

    return (
        
        <div className='main'>
            <div className='lists'>
                <ListDisplay title="All Clients">
                {loading ? (<p>Loading</p>) : (
                        data && clients.map(customer => (
                            <div className='listItem' key={customer._id} onClick={() => {
                                setSelectedClient(customer)
                                setDisplayClient(true)
                            }}>
                                <div>{customer.company}</div>
                                <div>{customer.contactName}</div>
                                </div>
                            ))
                )}
            </ListDisplay>
                <ClientForm />
            </div>
            {displayClient && <ClientDisplay clients={clients} client={selectedClient} setClient={setSelectedClient} setClients={setClients} setDisplayClient={setDisplayClient}/>}
        </div>
    )
}