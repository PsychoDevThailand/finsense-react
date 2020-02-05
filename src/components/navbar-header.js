import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'

const NavbarHeader = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="white" variant="light" className="shadow-sm">
      <Navbar.Brand href="#home">
        <img
          src={'/fs-h.png'}
          alt="Logo"
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
        </Nav>
        <Nav>
          <Nav.Link href="#" className="font-weight-bold">SERVICE</Nav.Link>
          <Nav.Link href="#" className="font-weight-bold">PRICING</Nav.Link>
          <Nav.Link href="#" className="font-weight-bold">DOCUMENT</Nav.Link>
          <Nav.Link href="#">FAQ</Nav.Link>
          <Nav.Link href="#">LOGIN</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}


export default NavbarHeader
