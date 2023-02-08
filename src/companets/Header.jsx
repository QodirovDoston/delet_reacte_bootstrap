import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Col, Container, Row } from 'react-bootstrap';
import axios from 'axios';
import {useNavigate } from 'react-router';

function Header() {
  const [user, setUser] = useState("")
  const[age, setAge] = useState("")
  const navigate = useNavigate()

  const postData = (e) => {
    e.preventDefault()
    let obj = {
      name: user,
      age: age
    }
    axios.post("http://localhost:3000/data", obj)
    .then((res) => {
      alert(res.statusText)
      setAge("")
      setUser("")
      navigate("/result")
    })
    
  }


  return (
    <>
      <Container>
        <Row className='justify-content-center mt-5'>
          <Col xs={8}>
            <Form className='mt-5' >
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Name" required onChange={(e) => setUser(e.target.value)} />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Age</Form.Label>
                <Form.Control type="text" placeholder="Age" required  onChange={(e) => setAge(e.target.value)}/>
              </Form.Group>
              <Button variant="primary" style={{ width: "100%" }} onClick={postData}>
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  )
}
export default Header;
