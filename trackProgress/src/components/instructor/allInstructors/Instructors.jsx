import { useEffect, useState } from "react";
import { instructorCLIENT } from "../../../utils/instructor/instructorResponse";
import { Container, Row, Col, Table } from "react-bootstrap";
import { PencilSquareIcon, TrashIcon } from "@heroicons/react/24/outline";
import EditInstructor from "../editInstructor/updateInstructor";
import { Link } from "react-router";


export default function AllInstructors() {

  const [instructors, setInstructors] = useState([]);

  useEffect(() => {
    fetchInstructors();
  }, []);

  function fetchInstructors() {
    instructorCLIENT
      .get("instructors")
      .then((res) => {
        console.log("Fetched instructors:", res.data);
        setInstructors(res.data); 
      })
      .catch((error) => {
        console.error("Failed to fetch instructors:", error);
      });
  }

  function deleteInstructor(id){
    instructorCLIENT.delete(`instructors/${id}`)
    .then(()=>{
      fetchInstructors()
    })
  }

  return (
    <Container fluid>
      <Row className="justify-content-center">
        <Col>
          {/* <h2 className="mb-4 text-center">List of Instructors</h2> */}
          <Table striped bordered hover responsive>
            <thead className="table-dark">
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Email</th>
                <th className="text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {instructors.map((instructor, index) => (
                <tr key={instructor.id}>
                  <td>{index + 1}</td>
                  <td>{instructor.name}</td>
                  <td>{instructor.email}</td>
                  <td className="text-center">
                    <Row className="d-flex align-items-center justify-content-center">
                      <Col xs="auto">
                        <Link to={`/edit-instructor/${instructor.id}`}>
                          <PencilSquareIcon className="text-success" 
                        style={{ width: "20px", cursor: "pointer" }} 
                        />
                        </Link>
                      </Col>
                      <Col xs="auto">
                        <TrashIcon className="text-danger" 
                        style={{ width: "20px", cursor: "pointer" }}
                        onClick={()=>deleteInstructor(instructor.id)}
                         />
                      </Col>
                    </Row>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  );
}

