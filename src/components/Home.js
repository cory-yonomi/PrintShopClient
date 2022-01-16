import { Fragment } from "react"
import { Link } from "react-router-dom"

import { Container, Row } from "react-bootstrap"

const homeStyle = {
	position: 'relative',
	marginLeft: '20%'
}

const Home = (props) => {

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
