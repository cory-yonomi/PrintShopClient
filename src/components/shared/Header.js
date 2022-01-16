import React, { Fragment } from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { Link } from 'react-router-dom'


const linkStyle = {
    color: 'white',
	textDecoration: 'none',
	marginLeft: '-10px'
}

const navbarStyle = {
	position: 'absolute',
	width: '15%',
	height: '100vh',
	textAlign: 'center',
	backgroundColor: 'grey'
}

const authenticatedOptions = (
	<>
		<Nav.Link>
			<Link to='workflow' style={linkStyle}>
				Workflow
			</Link>
		</Nav.Link>
		<Nav.Link>
			<Link to='clients' style={linkStyle}>
				Clients
			</Link>
		</Nav.Link>
		<Nav.Link>
			<Link to='projects' style={linkStyle}>
				Projects
			</Link>
		</Nav.Link>
		<Nav.Link>
			<Link to='profile' style={linkStyle}>
				Profile
			</Link>
		</Nav.Link>
		<Nav.Link>
			<Link to='sign-out' style={linkStyle}>
				Sign Out
			</Link>
		</Nav.Link>
	</>
)

const unauthenticatedOptions = (
	<>
        <Nav.Link>
		    <Link to='sign-up' style={linkStyle}>Sign Up</Link>
        </Nav.Link>
        <Nav.Link>
		    <Link to='sign-in' style={linkStyle}>Sign In</Link>
        </Nav.Link>
	</>
)

const alwaysOptions = (
	<>
		<Nav.Link>
			<Link to='/dashboard' style={linkStyle}>
				Home
			</Link>
		</Nav.Link>
	</>
)

const Header = ({ user }) => (
	<Navbar   expand='md' className="flex-column" style={navbarStyle}>
		<Navbar.Brand>
			<Link to='/' style={linkStyle}>
				Print Shop
			</Link>
		</Navbar.Brand>
		<Navbar.Toggle aria-controls='basic-navbar-nav' />
		<Navbar.Collapse id='basic-navbar-nav'>
			<Nav className='ml-auto flex-column'>
				{user && (
					<span className='navbar-text mr-2'>{user.email}</span>
				)}
				{alwaysOptions}
				{user ? authenticatedOptions : unauthenticatedOptions}
			</Nav>
		</Navbar.Collapse>
	</Navbar>
)

export default Header
