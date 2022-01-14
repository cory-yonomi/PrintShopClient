import { useEffect, useState, Fragment } from "react"
import { gql, useQuery } from '@apollo/client'
import ListDisplay from './ui/ListDisplay'
import './Dashboard.css'
import ProjectForm from "./projects/ProjectForm"

const Dashboard = () => {
    const [clients, setClients] = useState([])
    const [projects, setProjects] = useState([])

    const GET_DASHBOARD_DATA = gql`
    query {
        customers {
            _id
            company
        }
        projects {
            name
            customer {
                company
            }
        }
    }
    `

    const {loading, data} = useQuery(GET_DASHBOARD_DATA)
    
    useEffect(() => {
        if (data) {
            setClients(data.customers)
            setProjects(data.projects)
        }
    }, [data])

    return (
        <div className='main'>
            <div className='lists'>
                <ListDisplay title='Current Projects'>
                    {loading ? (<p>Loading</p>) : (
                        data && projects.map(project => (
                                <div className='listItem' key={project._id}>
                                <div>{project.name}</div>
                                <div>{project.customer.company}</div>
                                </div>
                            ))
                )}
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