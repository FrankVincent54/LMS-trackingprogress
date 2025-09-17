import { useState } from "react"
import { quizCLIENT } from "../../utils/quiz/quizResponse";
import { Form, Button, Col, Container, FormControl, FormGroup, FormLabel, Row } from "react-bootstrap";

export default function CreateQuiz () {
    
    const [title, setTitle] = useState("")
    const [lessonId, setLessonId] = useState(0)

    function addQuiz (e) {
        e.preventDefault();
        quizCLIENT.post("quizzes", {
            lessonId:lessonId,
            quizTitle:title
            
        })
        .then((res)=>{
            setTitle("")
            console.log(res.data)
        })
        .catch((error)=>{
            console.log(error)
        })
    }

    return (
        <div>
            <Container fluid>
                <Row className="justify-content-center">
                    <Col md={6}>
                    <h2>Create Quiz</h2>
                    <Form onSubmit={addQuiz}>
                       
                        <FormGroup>
                            <FormLabel>Enter Quiz Title</FormLabel>
                            <FormControl type="text" required 
                            value={title}
                            onChange={(e)=> setTitle(e.target.value)}
                            />
                        </FormGroup>

                        <FormGroup>
                            <FormLabel>Enter Lesson Id:</FormLabel>
                            <FormControl type="number" required
                            value={lessonId}
                            onChange={(e)=>setLessonId(e.target.value)}
                             />
                        </FormGroup>

                        <Button type="submit" className="bg-primary mt-3">Create Quiz</Button>
                    </Form>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}