import React from 'react'
import {Container, Navbar, Nav, Form, Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';
 
 function Navbarfunc() {
  return (
    <>
       <Navbar bg="light" expand="lg">
      <Container  >
        <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Link style={{color:"black" ,textDecoration:"none", marginTop:"18px" , paddingLeft:"10px"}} to="/home"> 
            <li >Home</li>
            </Link>
            <Link  style={{color:"black" ,textDecoration:"none", marginTop:"18px" , paddingLeft:"10px"}} to="/result">
            <p>Res</p>
            </Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  )
}
export default Navbarfunc;