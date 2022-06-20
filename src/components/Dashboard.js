import React from 'react'
import { Nav, Container, Navbar, NavDropdown } from 'react-bootstrap'


const Home = () => {
  return (
    <div>
     <Navbar sticky='top' className='main-nav'>
        <Container>
          <Navbar.Brand href="/dashboard">Dashboard</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse  id="responsive-navbar-nav">
            <Nav sticky="top" position="fixed" className="me-auto">
              <Nav.Link className='nav-text' eventKey="aboutus" href='/aboutus'>About Us</Nav.Link>
              <Nav.Link className='nav-text' eventKey="contactus" href='/contactus'>Contact us</Nav.Link>
              <NavDropdown className='nav-text' title="Dropdown" id="collasible-nav-dropdown">
                <NavDropdown.Item className='dropdown-text' href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item className='dropdown-text' href="#action/3.2">Another Action</NavDropdown.Item>
                <NavDropdown.Item className='dropdown-text' href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item className='dropdown-text' href="#action/3.4">Separated link</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav>
              <Nav.Link className='nav-text' href="/login">Login</Nav.Link>
              <Nav.Link className='nav-text' href="/">Signup</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>


    </div>
  )
}

export default Home