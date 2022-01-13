import { useEffect, useState, Fragment } from "react"
import { Link } from "react-router-dom"
import axios from "axios"
import { Container, Row } from "react-bootstrap"

const homeStyle = {
	position: 'relative',
	marginLeft: '20%'
}

const Home = (props) => {
	const [customers, setCustomers] = useState([])

	useEffect(() => {
		axios.post('http://localhost:8000/graphql', {
			query: "{ customers { contactName } }"
			// headers: {
			// 	'Content-Type': 'application/json',
			// 	'Authorization': 'Bearer Token'
			// }
		})
		.then(resp => {
			setCustomers(resp.data.data.customers)
		})
	}, [])

	const allCustomers = customers.map(cust => {
		return <p>{cust.contactName}</p>
	})
		
	// const { msgAlert, user } = props
	console.log('props in home', props)

	return (
		<Fragment >
			<Container style={homeStyle}>
				<Row>
					<h2>Print Shop Manager</h2>
					<h4>Workflow and Project Management Streamlined</h4>
				</Row>
				
					<button><Link to='/sign-in'>Log In</Link></button><button><Link to='/sign-up'>Create Account</Link></button>
				
			</Container>
		</Fragment>
	)
}

export default Home
