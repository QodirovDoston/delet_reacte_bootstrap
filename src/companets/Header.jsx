import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Container, Row } from 'react-bootstrap';
import axios from 'axios';
import Navbarfunc from './Navbar';

function Header() {
const [name,userName] =useState('')
const [age,useAge] =useState('')

let obj={
  name : name,
  age : age
}
const postdata = (e)=>{
  e.preventDefault()
 axios.post("http://localhost:3000/data",obj).then(res =>{
  if(res.status === 201){
    return alert("succses")
    userName("")
    useAge("")

  }
 })
}

  return (
    <>
    <Navbarfunc />
<Container>
  <Row className='justify-content-center mt-5'>
    <Form className='mt-5' onSubmit={postdata}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Name" required  onChange={(e)=> userName(e.target.value)} value={name} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Age</Form.Label>
        <Form.Control type="text" placeholder="Age" required onChange={(e)=> useAge(e.target.value)} value={age} />
      </Form.Group>
      <Button variant="primary" style={{width: "100%"}} type="submit">
        Submit
      </Button>
    </Form>
  </Row>
</Container>
    </>
  )
}
export default Header;
