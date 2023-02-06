import React from 'react'
import { Container, Row, Table } from 'react-bootstrap';

function TableCompo() {
  return (
    <>
      <Container>
        <Row className="mt-5">
          <Table striped bordered hover size="sm">
            <thead>
              <tr>
                <th>#</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Username</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
              </tr>
            </tbody>
          </Table>
        </Row>
      </Container>
    </>
  )
};
export default TableCompo;