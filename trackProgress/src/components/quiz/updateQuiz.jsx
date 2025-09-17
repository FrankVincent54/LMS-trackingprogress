import { useParams } from "react-router"
import { quizCLIENT } from "../../utils/quiz/quizResponse"
import { useEffect, useState } from "react"
import { Button, Col, Container, Form, FormControl, FormGroup, FormLabel, Row } from "react-bootstrap"


export default function EditQuiz () {

    const {id} = useParams()
    const [lessonId, setLessonId] = useState(0)
    const [title, setTitle] = useState("")

    useEffect(()=>{
        getQuizById(id)
    },[id])

    // get quiz by id
    function getQuizById (id) {
        quizCLIENT.get(`quizzes/${id}`)
        .then((res)=>{
            setLessonId(res.data.lessonId);
            setTitle(res.data.quizTitle);
        })
        .catch(()=>{
            console.log(id)
        })
    }
    
    // update or edit the quiz by id
    function updateQuiz (e) {
        e.preventDefault();
        quizCLIENT.put(`quizzes/${id}`, {
            lessonId:lessonId,
            quizTitle:title
        })
        .then((res)=>{
            setTitle("")
            console.log(res.data)
        })
    }


    return (
        <div>
            <Container fluid>
                <Row className="justify-content-center">
                    <Col md={6}>
                        <Form onSubmit={updateQuiz}>
                            <FormGroup>
                                <FormLabel>Enter Quiz Title</FormLabel>
                                <FormControl type="text" required
                                value={title}
                                onChange={(e)=>setTitle(e.target.value)}
                                />
                            </FormGroup>

                            <FormGroup>
                                <FormLabel>Enter Lesson Id:</FormLabel>
                                <FormControl type="number" required
                                value={lessonId}
                                onChange={(e)=>setLessonId(e.target.value)}
                                 />
                            </FormGroup>
                            <Button type="submit" className="mt-3 bg-primary" >Edit Quiz</Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}