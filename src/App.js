// import React, { Component, Fragment } from 'react'
import React, { useState, useEffect, Fragment } from 'react'
import { Route, Routes } from 'react-router-dom'
import { v4 as uuid } from 'uuid'
import { gql, useQuery, useMutation } from '@apollo/client'
// import AuthenticatedRoute from './components/shared/AuthenticatedRoute'
import AutoDismissAlert from './components/shared/AutoDismissAlert/AutoDismissAlert'
import Header from './components/shared/Header'
import RequireAuth from './components/shared/RequireAuth'
import Home from './components/Home'
import Profile from './components/Profile'
import Dashboard from './components/Dashboard'
import Clients from './components/clients/Clients'
import Projects from './components/projects/Projects'
import SignUp from './components/auth/SignUp'
import SignIn from './components/auth/SignIn'
import SignOut from './components/auth/SignOut'
import ChangePassword from './components/auth/ChangePassword'

const App = () => {
	
	const [user, setUser] = useState(null)
	const [msgAlerts, setMsgAlerts] = useState([])
	const [clients, setClients] = useState([])
    const [projects, setProjects] = useState([])
	const [jobs, setJobs] = useState([])
	
	console.log('user in app', user)
	console.log('message alerts', msgAlerts)
	const clearUser = () => {
		console.log('clear user ran')
		setUser(null)
	}

	const deleteAlert = (id) => {
		setMsgAlerts((prevState) => {
			return prevState.filter((msg) => msg.id !== id)
		})
	}

	const msgAlert = ({ heading, message, variant }) => {
		const id = uuid()
		setMsgAlerts(() => {
			return [{ heading, message, variant, id }]
		})
	}

    const GET_DASHBOARD_DATA = gql`
    query {
        customers {
            _id
            company
        }
        projects {
            _id
            name
            customer {
                company
            }
        }
        jobs {
            _id
            item
            customer {
                company
            }
        }
    }
    `

    const DELETE_JOB = gql`
    mutation deleteJob($_id: ID!){
        deleteJob(_id: $_id) {
            item
        }
    }
    `
    
    const { data } = useQuery(GET_DASHBOARD_DATA)
    
    const [deleteJob] = useMutation(DELETE_JOB, {
        variables: {
            _id: ''
            }
    })

    const deleteJobHandler = e => {        
        deleteJob({
            variables: {
                _id: e.target.id
            }
        })
    }
    
    
    useEffect(() => {
        if (data) {
            setClients(data.customers)
            setProjects(data.projects)
            setJobs(data.jobs)
        }
    }, [data])

	return (
		<Fragment>
			<Header user={user} />
			<Routes>
				<Route path="/" element={<Home msgAlert={msgAlert} user={user} />} />
				<Route
					path="/dashboard"
					element={
						<RequireAuth user={user}>
							<Dashboard
								msgAlert={msgAlert}
								setUser={setUser}
								clients={clients}
								jobs={jobs}
								projects={projects}
								deleteJobHandler={deleteJobHandler}
								setJobs={setJobs}
							/>
						</RequireAuth>
					}
				/>
				<Route
					path="/clients"
					element={
						<RequireAuth user={user}>
							<Clients msgAlert={msgAlert} setUser={setUser} clients={clients}/>
						</RequireAuth>
					}
				/>
				<Route
					path="/projects"
					element={
						<RequireAuth user={user}>
							<Projects msgAlert={msgAlert} setUser={setUser} clients={clients} projects={projects}/>
						</RequireAuth>
					}
				/>
				<Route
					path="/profile"
					element={
						<RequireAuth user={user}>
							<Profile msgAlert={msgAlert} setUser={setUser} />
						</RequireAuth>
					}
				/>
				<Route
					path="/sign-up"
					element={<SignUp msgAlert={msgAlert} setUser={setUser} />}
				/>
				<Route
					path="/sign-in"
					element={<SignIn msgAlert={msgAlert} setUser={setUser} />}
				/>
				<Route
					path="/sign-out"
					element={
						<RequireAuth user={user}>
							<SignOut msgAlert={msgAlert} clearUser={clearUser} user={user} />
						</RequireAuth>
					}
				/>
				<Route
					path="/change-password"
					element={
						<RequireAuth user={user}>
							<ChangePassword msgAlert={msgAlert} user={user} />
						</RequireAuth>
					}
				/>
			</Routes>
			{msgAlerts.map((msgAlert) => (
				<AutoDismissAlert
					key={msgAlert.id}
					heading={msgAlert.heading}
					variant={msgAlert.variant}
					message={msgAlert.message}
					id={msgAlert.id}
					deleteAlert={deleteAlert}
				/>
			))}
		</Fragment>
	)
}

export default App
