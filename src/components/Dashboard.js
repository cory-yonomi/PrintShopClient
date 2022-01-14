import { useEffect, useState, Fragment } from "react"
import { gql, useQuery } from '@apollo/client'
import ListDisplay from './ui/ListDisplay'
import './Dashboard.css'
import ProjectForm from "./projects/ProjectForm"

const Dashboard = () => {
    const [clients, setClients] = useState([])

    const GET_CLIENTS = gql`
    query {
        customers {
            _id
            company
        }
    }
    `

    const {loading, data} = useQuery(GET_CLIENTS)
    
    useEffect(() => {
        if (data) {
            setClients(data.customers)
        }
    }, [data])

    return (
        <div className='main'>
            <div className='lists'>
                <ListDisplay title='Current Projects'>
                    
                </ListDisplay>
                <ListDisplay title='Current Jobs'>
    
                </ListDisplay>
            </div>
            <div className="forms">
                <ProjectForm clients={clients}/>
            </div>
        </div>
    )
}

export default Dashboard