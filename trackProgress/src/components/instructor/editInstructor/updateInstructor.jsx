import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { instructorCLIENT } from "../../../utils/instructor/instructorResponse";
import { Button, Col, Container, Form, FormControl, FormGroup, FormLabel, Row } from "react-bootstrap";

export default function EditInstructor () {
   
    const {id} = useParams();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    useEffect(()=>{
        getInstructorById(id)
    },[id])

    function getInstructorById(id){
    instructorCLIENT.get(`instructors/${id}`)
    .then((res)=>{
        setEmail(res.data.email);
        setName(res.data.name);
        console.log("Editting")
    })
    .catch(()=>{
        console.log("Error...")
    })
    }

    function updateInstructor (e) {
        e.preventDefault();
        instructorCLIENT.put(`instructors/${id}`, {
            name:name,
            email:email
        })
        .then(()=>{
            setEmail("");
            setName("");
        })
    }

    return (
        <div>
            <Container fluid>
                <Row className="justify-content-center">
                    <Col md={6}>
                    <h2>Edit Instructor Details</h2>
                        <Form onSubmit={updateInstructor}>
                            <FormGroup>
                                <FormLabel>Edit Instructor Name:</FormLabel>
                                <FormControl type="text"
                                value={name}
                                onChange={(e)=>setName(e.target.value)} />
                            </FormGroup>

                            <FormGroup>
                                <FormLabel>Edit Instructor Email:</FormLabel>
                                <FormControl type="email" value={email}
                                onChange={(e)=>setEmail(e.target.value)} />
                            </FormGroup>
                            <Button className="mt-3 bg-primary" type="submit">Save Changes</Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </div>
    )

}