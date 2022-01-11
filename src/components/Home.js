import { useEffect, useState } from "react"
import axios from "axios"

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
		<>
			<h2>Home Page</h2>
			{allCustomers}
		</>
	)
}

export default Home
