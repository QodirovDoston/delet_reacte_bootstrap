// import userEvent from '@testing-library/user-event'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Col, Container, Row, Table } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function GetData() {
  const [user, getUser] = useState([])


  const GetAllData = () => {
    axios.get("https://dbjsoninserver-production.up.railway.app/data")
      .then((data) => {
        getUser(data.data)
      })
  }

  const delet_func = (id) => {
    axios.delete(`https://dbjsoninserver-production.up.railway.app/data/${id}`)
      .then((res) => {
        alert(res.statusText)
      })
  }

  useEffect(() => {
    GetAllData()
  }, [])
  return (
    <div>
      <Container>
        <Row className="mt-5 justify-content-center">
          <Col xs={8}>
            <Table striped bordered hover size="sm">
              <thead>
                <tr>
                  <th>Nr</th>
                  <th>First Name</th>
                  <th>Age</th>
                </tr>
              </thead>
              <tbody>
                {user?.map((data) => {
                  return (
                    <>
                      <tr>
                        <td>{data.id}</td>
                        <td>{data.name}</td>
                        <td>{data.age}</td>  
                        <td>
                          <Link to={"/result/edite:id"}>
                          <button>edite</button>
                        </Link>
                        <button onClick={() => delet_func(data.id)}>delete</button>
                        </td>
                      </tr>
                    </>
                  )
                })}
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
