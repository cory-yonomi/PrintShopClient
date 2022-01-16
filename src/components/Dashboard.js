
import ListDisplay from './ui/ListDisplay'
import './Dashboard.css'
import ProjectForm from "./projects/ProjectForm"
import JobForm from "./jobs/JobForm"

const Dashboard = ({ clients, jobs, projects, deleteJobHandler, setJobs }) => {

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
                <ListDisplay title='Current Jobs'>
                
                    {jobs && jobs.map(job => (
                        <div className='listItem' key={job._id}>
                            <div>{job.item}</div>
                            <div>{job.customer.company}</div>
                            <button onClick={deleteJobHandler} id={job._id}>Delete</button>
                        </div>))}
                            
                </ListDisplay>
            </div>
            <div className="formsList">
                <JobForm clients={clients} jobs={jobs} setJobs={setJobs} />
                <ProjectForm clients={clients} />
            </div>
        </div>
    )
}

export default Dashboard