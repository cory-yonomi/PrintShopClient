import React from 'react'
import ListDisplay from '../UI/ListDisplay'
import ProjectForm from './ProjectForm'

export default function Projects({projects, clients}) {
    return (
        <div className='main'>
            <div className='lists'>
                <ListDisplay title='Current Projects'>
                    {projects && projects.map(project => (
                            <div className='listItem' key={project._id}>
                                <div>{project.name}</div>
                                <div>{project.customer.company}</div>
                            </div>))}
                </ListDisplay>
                <ProjectForm clients={clients}/>
            </div>
        </div>
    )
}
