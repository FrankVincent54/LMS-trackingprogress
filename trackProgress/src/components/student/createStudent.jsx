import { useState } from "react"
import { Container, Row, Col, Form, FormGroup, FormLabel, FormControl, Button, Alert } from "react-bootstrap";
import { studentCLIENT } from "../../utils/students/studentResponse"


export default function CreateStudent () {

    const [success, setSuccess] = useState(false)
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")

    // function to create or add student
    function addStudent (e) {
        e.preventDefault()

        studentCLIENT.post("students", {
            name:name,
            email:email
        })
        .then(()=>{
            setName("")
            setEmail("")
        })
        .catch((error)=>{
            console.log("failed to add student: ", error)
        })
    }

     return (
        <>
            <Container fluid>
                <Row className="m-5 justify-content-center">
                    <Col md = {6}>
                    {/* Conditionally show alert */}
                    {success && (
                        <Alert variant="success" onClose={() => setSuccess(false)} dismissible>
                            Student Added Successfully
                        </Alert>
                    )}
                        <h2>Add New Student</h2>
                        <Form onSubmit={addStudent}>
                            <FormGroup controlId="name">
                                <FormLabel> Student Name</FormLabel>
                                <FormControl type="text" required
                                value={name}
                                onChange={(e) => setName(e.target.value) }
                                 />
                            </FormGroup>

                            <FormGroup controlId="email">
                                <FormLabel>Student Email</FormLabel>
                                <FormControl type="email" required
                                value={email}
                                onChange={(e) => setEmail(e.target.value) }
                                 />
                            </FormGroup>
                            <Button type="submit" className="bg-primary mt-3">Save Student</Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </>
    )
}