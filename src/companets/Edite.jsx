// import axios from 'axios'
// import React, { useEffect, useState } from 'react'
// import { Button, Col, Container, Form, Row } from 'react-bootstrap'
// import { useNavigate, useParams } from 'react-router-dom'

export default function EditePage() {


    // const [name, setName] = useState()
    // const [age, setAge] = useState()
    // const navigate = useNavigate()
    // const { id } = useParams()

    // console.log(id)

    // const getOne = () => {
    //     axios.get(`http://localhost:3000/data/${id}`)
    //         .then((res) => {
    //             console.log(res)
    //             setAge(res.data.name)
    //             setAge(res.data.age)
    //         })
    // }

    // useEffect(() => {
    //     getOne()
    // }, [  ])

    // const editData = () => {
    //     let obj_edit = {
    //         name: name,
    //         age: age
    //     }
    //     axios.put("http://localhost:3000/data", obj_edit)
    //         .then(res => {
    //             alert(res.statusText)
    //             navigate("/result")
    //             setName("")
    //             setAge("")
    //         })
    }

//     return (
//         <>
//             <Container>
//                 <Row className='justify-content-center mt-5'>
//                     <Col xs={8}>
//                         <Form className='mt-5' >
//                             <Form.Group className="mb-3" controlId="formBasicEmail">
//                                 <Form.Label>Name</Form.Label>
//                                 <Form.Control type="text" placeholder="Name" required onChange={(e) => setName(e.target.value)} />
//                             </Form.Group>
//                             <Form.Group className="mb-3" controlId="formBasicPassword">
//                                 <Form.Label>Age</Form.Label>
//                                 <Form.Control type="text" placeholder="Age" required onChange={(e) => setAge(e.target.value)} />
//                             </Form.Group>
//                             <Button variant="primary" style={{ width: "100%" }} onClick={() => editData()}>
//                                 Submit
//                             </Button>
//                         </Form>
//                     </Col>
//                 </Row>
//             </Container>
//         </>
//     )
// }
