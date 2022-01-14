import React from 'react'
import ListDisplay from '../ui/ListDisplay'
import ProjectForm from './ProjectForm'

export default function Projects() {
    return (
        <div className='main'>
            <div className="lists">
                <ListDisplay />
                <ProjectForm />
            </div>
        </div>
    )
}
