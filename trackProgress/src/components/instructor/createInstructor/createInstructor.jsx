import { useState } from "react";
import { instructorCLIENT } from "../../../utils/instructor/instructorResponse";
import { Button, Col, Container, Form, FormControl, FormGroup, FormLabel, Row } from "react-bootstrap";

export default function CreateInstructor () {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")

    function postInstructor (e) {
        e.preventDefault()
        instructorCLIENT.post("instructors", {
            name:name,
            email:email
        })
        .then((res)=>{
            console.log("posted success: ",res.data)
            setEmail("")
            setName("")
        })
        .catch((error)=>{
            console.log("Error posting: ",error)
        })
    }

    return (
        <div>
            <Container fluid>
                <Row className="justify-content-center">
                    <Col md={6}>
                        <h2>Create Instructor</h2>
                        <Form onSubmit={postInstructor}>
                            <FormGroup>
                                <FormLabel>Enter Instructor Name:</FormLabel>
                                <FormControl type="text" required value={name} 
                                onChange={(e)=>setName(e.target.value)} />
                            </FormGroup>
                            <FormGroup>
                                <FormLabel> Enter Instructor Email</FormLabel>
                                <FormControl type="email" required value={email} 
                                onChange={(e)=>setEmail(e.target.value)} />
                            </FormGroup>
                            <Button type="submit" className="bg-primary mt-3">Create Instructor</Button>
                        </Form>
                    </Col>

                </Row>
            </Container>
        </div>
    )

}