import { useEffect, useState } from "react";
import { studentCLIENT } from "../../utils/students/studentResponse";
import { Col, Container, Row } from "react-bootstrap";
import { TrashIcon, PencilSquareIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router"; 

export default function AllStudents() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    fetchStudents();
  }, []);

  function fetchStudents() {
    studentCLIENT
      .get("students")
      .then((res) => {
        setStudents(res.data);
      })
      .catch((error) => {
        console.error("Failed to fetch students:", error);
      });
  }

  function deleteStudent(e, id) {
    e.preventDefault();
    studentCLIENT
      .delete(`students/${id}`)
      .then(() => {
        fetchStudents();
        console.log("Deleted student");
      })
      .catch((error) => {
        console.error("Error deleting:", error);
      });
  }

  return (
    <Container fluid>
      <Row className="justify-content-center">
        <Col>
          <table className="table table-bordered table-striped">
            <thead className="table-dark">
              <tr>
                <th>S/N</th>
                <th>Student Name</th>
                <th>Email</th>
                <th className="text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {students.length === 0 ? (
                <tr>
                  <td colSpan="4" className="text-center">
                    No students found
                  </td>
                </tr>
              ) : (
                students.map((student, index) => (
                  <tr key={student.id}>
                    <td>{index + 1}</td>
                    <td>{student.name}</td>
                    <td>{student.email}</td>
                    <td className="text-center">
                      <Row className="d-flex justify-content-center">
                        <Col xs="auto">
                          <Link to={`/edit-student/${student.id}`}>
                            <PencilSquareIcon
                              className="text-success"
                              style={{ width: "24px", height: "24px", cursor: "pointer" }}
                            />
                          </Link>
                        </Col>
                        <Col xs="auto">
                          <TrashIcon
                            className="text-danger"
                            style={{ width: "24px", height: "24px", cursor: "pointer" }}
                            onClick={(e) => deleteStudent(e, student.id)}
                          />
                        </Col>
                      </Row>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </Col>
      </Row>
    </Container>
  );
}
