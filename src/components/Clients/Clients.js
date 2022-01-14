import { useState, useEffect } from "react"
import ListDisplay from "../ui/ListDisplay"
import ClientForm from "./ClientForm"
import { gql, useQuery } from '@apollo/client'
import ClientDisplay from "./ClientDisplay"

const Clients = () => {
    const [clients, setClients] = useState([])
    const [selectedClient, setSelectedClient] = useState({})

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
                                <div className='listItem' key={customer._id} onClick={ () => setSelectedClient(customer)}>
                                <div>{customer.company}</div>
                                </div>
                            ))
                )}
            </ListDisplay>
                <ClientForm />
            </div>
            {selectedClient && <ClientDisplay clients={clients} client={selectedClient} setClient={setSelectedClient} setClients={setClients} />}
        </div>
    )
}

export default Clients