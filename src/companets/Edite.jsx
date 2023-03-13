import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";

export default function Edit() {
    const [name, setName] = useState([])
    const [age, setAge] = useState([])
    const navigate = useNavigate()
    const { id } = useParams()

    const getOne = () => {
        axios.get(`https://dbjsoninserver-production.up.railway.app/data/${id}`)
            .then((res) => {
                console.log(res)
                setAge(res.data.age)
                setName(res.data.name)
            })
    }
    useEffect(() => {
        getOne(id)
    }, [ ])
    const editData = (edit_id) => {
        let obj_edit = {
            name: name,
            age: age
        }
        axios.put(`https://dbjsoninserver-production.up.railway.app/data/${edit_id}`, obj_edit)
            .then(res => {
                alert(res.statusText)
                navigate("/result")
                setName("")
                setAge("")
            })
    }
    return (
        <>
            <Container fluid="md">
                <Row className="justify-content-center mt-5">
                    <Col xs={6}>
                        <Form key={id}>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Your full name</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder=" full Name"
                                    required
                                    onChange={(e) => setName(e.target.value)}
                                    value={name}
                                />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Your Age</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder=" Age"
                                    required
                                    onChange={(e) => setAge(e.target.value)}
                                    value={age}
                                />
                            </Form.Group>
                            <Button
                                onClick={() => editData(id)}
                                variant="primary"
                                style={{ width: "100%", padding: "15px " }}
                                type="submit"
                            >
                                Change
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </>
    );
}