import { Alert, Button, Col, Container, Form, FormControl, FormGroup, FormLabel, Row } from "react-bootstrap";
import "./editCourse.css"
import { useEffect, useState } from "react";
import { courseClient } from "../../../utils/courses/coursesResponse/courseClient";
import { useParams } from "react-router";

export default function EditCourse () {

    const {id} = useParams();
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [instructorId, setInstructorId] = useState("");
    const [success, setSuccess] = useState(false);

    useEffect(()=>{
        getCourseById(id);
    }, [id])

    // function to get course by id for editing
    function getCourseById (id)  {
        courseClient.get(`/courses/${id}`)
        .then((res)=>{
            setTitle(res.data.title);
            setDescription(res.data.description);
            setInstructorId(res.data.instructorId);
        })
    }
    // function to update course
    function updateCourse (e) {
        e.preventDefault();
        courseClient.put(`/courses/${id}`, {
            title:title,
            description:description,
            instructorId:instructorId
        }) 
        .then(()=>{
            setSuccess(true);
            setTimeout(()=>setSuccess(false), 3000);
            setDescription("");
            setInstructorId("");
            setTitle("");
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
                            Course Edited Successfully
                        </Alert>
                    )}
                        <h2>Edit Course</h2>
                        <Form onSubmit={updateCourse}>
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
                            <Button type="submit" className="bg-primary mt-3">Edit Course</Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </>
    )
}