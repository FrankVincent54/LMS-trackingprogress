import { useEffect, useState } from "react";
import { useParams } from "react-router"
import { studentCLIENT } from "../../utils/students/studentResponse";
import { Button, Col, Container, Form, FormControl, FormGroup, FormLabel, Row } from "react-bootstrap";


export default function EditStudent () {

    const {id} = useParams();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    useEffect(()=>{
        getStudentById(id);
    }, [id])

    // function to get student by id for editting
    function getStudentById (id) {
        studentCLIENT.get(`students/${id}`)
        .then((res)=>{
            setName(res.data.name);
            setEmail(res.data.email);
        })
    }

    // function to update student
    function updateStudent (e) {
        e.preventDefault();
        studentCLIENT.put(`students/${id}`, {
            name:name,
            email:email
        })
        .then(()=>{
            setName("");
            setEmail("");
        })
    }

    return (
        <div>
            <Container fluid>
                <Row className="m-5 justify-content-center">
                    <Col md = {6}>
                    <h2>Edit Student</h2>
                    <Form onSubmit={updateStudent}>
                        <FormGroup controlId="name">
                            <FormLabel>Student Name</FormLabel>
                            <FormControl type="text" required
                            value={name}
                            onChange={(e)=> setName(e.target.value)}
                             />
                        </FormGroup>

                        <FormGroup controlId="email">
                            <FormLabel>Student Email</FormLabel>
                            <FormControl type="email" required
                            value={email}
                            onChange={(e)=> setEmail(e.target.value)}
                             />
                        </FormGroup>
                        <Button type = "submit" className = "bg-primary mt-3" > Save Changes</Button>
                    </Form>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}