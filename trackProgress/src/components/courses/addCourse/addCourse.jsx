import { Alert, Button, Col, Container, Form, FormControl, FormGroup, FormLabel, Row } from "react-bootstrap";
import "./addCourse.css"
import { useState } from "react";
import { courseClient } from "../../../utils/courses/coursesResponse/courseClient";

export default function AddCourse () {

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [instructorId, setInstructorId] = useState("");
    const [success, setSuccess] = useState(false);

    function createCourse (e) {
        e.preventDefault();

        courseClient.post("courses", {
        title:title,
        description:description,
        instructorId:instructorId
    })
    .then(() => {
        setSuccess(true);
        setTitle("");
        setDescription("");
        setInstructorId("");
        console.log("Creating course:", { title, description, instructorId });
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
                            Course Created Successfully
                        </Alert>
                    )}
                        <h2>Create New Course</h2>
                        <Form onSubmit={createCourse}>
                            <FormGroup controlId="title">
                                <FormLabel> Course Title</FormLabel>
                                <FormControl type="text" required
                                value={title}
                                onChange={(e) => setTitle(e.target.value) }
                                 />
                            </FormGroup>

                            <FormGroup controlId="description">
                                <FormLabel>Course Description</FormLabel>
                                <FormControl type="text" required
                                value={description}
                                onChange={(e) => setDescription(e.target.value) }
                                 />
                            </FormGroup>

                                <FormGroup controlId="instructorId">
                                <FormLabel>Instructor ID</FormLabel>
                                <FormControl type="text" required
                                value={instructorId}
                                onChange={(e) => setInstructorId(e.target.value) }
                                 />
                            </FormGroup>
                            <FormGroup controlId="instructorId">
                                <FormLabel>Upload Videos</FormLabel>
                                <FormControl type="text" required
                                // value={instructorId}
                                onChange={(e) => setInstructorId(e.target.value) }
                                 />
                            </FormGroup>
                            <FormGroup controlId="instructorId">
                                <FormLabel>Upload Files</FormLabel>
                                <FormControl type="files" required
                                value={instructorId}
                                onChange={(e) => setInstructorId(e.target.value) }
                                 />
                            </FormGroup>
                            <Button type="submit" className="bg-primary mt-3">Save Course</Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </>
    )
}