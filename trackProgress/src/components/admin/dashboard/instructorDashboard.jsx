
import React, { useEffect, useState } from "react";
import {
  Alert,
  Button,
  Card,
  CardImg,
  CardText,
  CardTitle,
  CardFooter,
  Col,
  Container,
  Navbar,
  NavbarBrand,
  NavLink,
  Row,
} from "react-bootstrap";
import {
  AcademicCapIcon,
  ArrowTrendingUpIcon,
  BookOpenIcon,
  CheckCircleIcon,
  CircleStackIcon,
  ClockIcon,
  PencilSquareIcon,
  PlusIcon,
  ShieldCheckIcon,
  Square3Stack3DIcon,
  TrashIcon,
  TrophyIcon,
  UserGroupIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
import { Link} from 'react-router';
import "./admiDashboard.css";
import "./instructorDAshboard.css";
import { StarIcon } from "@heroicons/react/24/solid";
import { courseClient } from "../../../utils/courses/coursesResponse/courseClient";
import StudentDashBoard from "./studentDashboard";
import { studentCLIENT } from "../../../utils/students/studentResponse";
import { quizCLIENT } from "../../../utils/quiz/quizResponse";



export default function InstructorDashBoard() {

  // react hook to get courses as the page reloads
  const [courses, setCourses] = useState([]);
  const [success, setSuccess] = useState(false);

  // student and quizzes constants
  // const {id} = useParams()
  const [students, setStudents] =  useState([])
  const [quizzes, setQuizzes] = useState([])

  useEffect(()=>{
    fetchStudents()
    allCourses()
    fetchQuizzes()
  },[])

  // function to fetch all quizzes
  function fetchQuizzes() {
    quizCLIENT.get("quizzes")
    .then((res)=>{
      setQuizzes(res.data)
    })
    .catch((error)=>{
      console.log("Failed to fetch quiz: ",error)
    })
  }

  // function to delete quiz
  function deleteQuiz (id) {
    quizCLIENT.delete(`quizzes/${id}`)
    .then(()=>{
      fetchQuizzes();
      console.log("Deleted successfully");
    })
    .catch((error)=>{
      console.log("Failed to delete quiz: "+error)
    })
  }

  // function to get all courses frim the backend
  function allCourses () {
    courseClient.get("courses")
    .then((res)=>{
      setCourses(res.data)
    })
    .catch((error)=>{
      console.log("Failed to fetch courses: "+error)
    })
  }

  // function to fetch all students
  function fetchStudents () {
      studentCLIENT.get("students")
      .then((res)=> {
        console.log(res.data)
        setStudents(res.data)
      })
      .catch((error)=> {
        console.log(error)
      })
  }

  // function to delete course by id
  function deleteCourse (e, id) {
    e.preventDefault();
    courseClient.delete(`/courses/${id}`)
    .then((id)=>{
      allCourses();
      setSuccess(true);
      setTimeout(() => setSuccess(false), 3000);
      console.log("Successfully deleted course with id: ",id)
    })
    .catch((error)=>{
      console.log("Error deleting:",error)
    })
  }

  // function to delete student
  function deleteStudent (e, id) {
    e.preventDefault()
    studentCLIENT.delete(`students/${id}`)
    .then(()=>{
      fetchStudents()
      console.log("deleted student")
    })
    .catch((error)=>{
      console.log("Error deleting:",error)
    })
  }


  // State to track active tab
  const [activeTab, setActiveTab] = useState("students");

  return (
    <>
      <Container fluid>
        <Row>
          {/* the first column */}
          <Col md={2} className="bg-dark text-white p-4 my-navHeight">
            {/* navigation contents */}
            <Navbar>
              <NavbarBrand className="text-white">LMS</NavbarBrand>
            </Navbar>
            <Col className="p-1">
              <NavLink href="#">Home</NavLink>
              <NavLink href="#">Students</NavLink>
              <NavLink href="#">Instructors</NavLink>
              <NavLink href="#">Enrollments</NavLink>
              <NavLink href="#">Assignments</NavLink>
              <NavLink href="#">Lesson</NavLink>
              <NavLink href="#">Quiz</NavLink>
            </Col>
          </Col>

          {/* the second column */}
          <Col md={10}>
            {/* header section */}
            <Container fluid className="my-hero">
              <div className="right">
                <UserIcon style={{ width: "70px", height: "70px" }} />
              </div>
              <div className="left">
                <Col>
                  <h2>Instructor Dashboard</h2>
                  <p>Manage your courses and monitor student progress</p>
                </Col>
              </div>
            </Container>

            {/* hero section with card */}
            <Row className="p-2 text-center">
              {/* card one */}
              <Col>
                <Card className="p-2">
                  <CardTitle>Courses</CardTitle>
                  <CardText> <BookOpenIcon className="text-primary" style={{width:"30px", height:"30px"}} /> 4</CardText>
                </Card>
              </Col>
              {/* card two */}
              <Col>
                <Card className="p-2">
                  <CardTitle>Students</CardTitle>
                  <CardText> <UserGroupIcon className="text-success" style={{width:"30px", height:"30px"}} /> 127</CardText>
                </Card>
              </Col>
              {/* card four */}
              <Col>
                <Card className="p-2">
                  <CardTitle>Avg Progress</CardTitle>
                  <CardText> <ArrowTrendingUpIcon className="text-primary" style={{width:"30px", height:"30px"}} /> 74%</CardText>
                </Card>
              </Col>
              {/* card five */}
              <Col>
                <Card className="p-2">
                  <CardTitle>Active</CardTitle>
                  <CardText> <UserGroupIcon className="text-success" style={{width:"30px", height:"30px"}} /> 98</CardText>
                </Card>
              </Col>
              {/* card six */}
              <Col>
                <Card className="p-2">
                  <CardTitle>Completion</CardTitle>
                  <CardText> <ArrowTrendingUpIcon className="text-success" style={{width:"30px", height:"30px"}} /> 68%</CardText>
                </Card>
              </Col>
              {/* card seven */}
              <Col>
                <Card className="p-2">
                  <CardTitle>Rating</CardTitle>
                  <CardText> <StarIcon className="text-warning" style={{width:"25px", height:"25px"}} /> 4.7</CardText>
                </Card>
              </Col>           
            </Row>

            {/* user distribution section */}
            <Card>
              <CardTitle className="m-1 p-1">User Distribution</CardTitle>
              <Row className="text-center m-1 p-1">
                {/* student distribution */}
                <Col>
                  <Card>
                    <Col className="p-2">
                      <img src="" alt="icon" />
                      <p>Students</p>
                      <p>1,623</p>
                    </Col>
                  </Card>
                </Col>
                {/* teacher */}
                <Col>
                  <Card>
                    <Col className="p-2">
                      <img src="" alt="icon" />
                      <p>Instructors</p>
                      <p>198</p>
                    </Col>
                  </Card>
                </Col>
                {/* admin */}
                <Col>
                  <Card>
                    <Col className="p-2">
                      <img src="" alt="icon" />
                      <p>Admins</p>
                      <p>26</p>
                    </Col>
                  </Card>
                </Col>
              </Row>
            </Card>

            {/* flex-buttons - tab selectors */}
            <Row className="p-2 m-2 text-center my-flex">
              <Col>
                <Button
                  variant={activeTab === "students" ? "primary" : "outline-primary"}
                  onClick={() => setActiveTab("students")}
                >
                  Students
                </Button>
              </Col>
              <Col>
                <Button
                  variant={activeTab === "courses" ? "primary" : "outline-primary"}
                  onClick={() => setActiveTab("courses")}
                >
                  Courses
                </Button>
              </Col>
              <Col>
                <Button
                  variant={activeTab === "assessments" ? "primary" : "outline-primary"}
                  onClick={() => setActiveTab("assessments")}
                >
                  Assessments
                </Button>
              </Col>
            </Row>

            {/* tab content */}
            {activeTab === "students" && (
              <>
                {/* top-performing-students */}
                <Card className="m-1 p-1">
                  {/* <CardTitle className="m-1 p-1">Students Enrolled</CardTitle> */}
                  <Row className="my-btnflex">
                    <Col><h2>Students Enrolled</h2></Col>
                    <Col>
                    <Button as= {Link} to="/add-student">Add Student</Button>
                    </Col>
                  </Row>
                  <Col className="p-2">
                  <table>
                    <thead>
                      <tr>
                      <th className="border px-4 py-2 text-left">S/N</th>
                      <th className="border px-4 py-2 text-left">Student Name</th>
                      <th className="border px-4 py-2 text-left">Email</th>
                      <th className="border px-4 py-1 text-left">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      { students.map((student, index)=>{
                        return (
                          <tr>
                            <td className="border px-4 py-2">{index + 1}</td>
                            <td className="border px-4 py-2">{student.name}</td>
                            <td className="border px-4 py-2">{student.email}</td>
                            <td className="border px-4 py-2">
                              <Row>
                                <Col>
                                   <Link to = {`/edit-student/${student.id}`}>
                              <PencilSquareIcon className="text-success" 
                            style={{width:"30px", height:"30px"}} />
                            </Link>
                                </Col>
                                <Col>
                                  <TrashIcon className="text-danger"
                                  style={{width:"30px", height:"30px"}} 
                                  onClick={(e)=>{deleteStudent(e, student.id)}}
                                  />
                                </Col>
                              </Row>
                            </td>
                          </tr>
                        )
                      })}
                    </tbody>
                  </table>
                  </Col>
                </Card>
              </>
            )}

            {activeTab === "courses" && (
              <>
                {/* courses tab content */}
                <div className="addCourse d-flex justify-content-between align-items-center">
                  <p>Course Performance Overview</p>
                  <Button as = {Link} to = "/add-course" >Add Course</Button>
                </div>

                 {success && (
                              <Alert variant="success">Deleted Successfully</Alert>
                            )}

                {/* mapping through each course */}
                {courses.map((course)=>{
                  return (
                  <Card className="courses-card mt-3 border border-2" key={course.id}>
                    <Row className="justify-content-between">
                      <Col md = {10}>
                        <CardTitle>{course.title}</CardTitle>
                        <CardText>{course.description}</CardText>
                        <CardText>{course.instructorId}</CardText>
                      </Col>
                      {/* the second column */}
                      <Col md = {2}>
                        <Row className="justify-content-center">
                          <Col> 
                            <Link to = {`/edit-course/${course.id}`}>
                              <PencilSquareIcon className="text-success" 
                            style={{width:"30px", height:"30px"}} />
                            </Link>
                           </Col>
                          <Col> 
                            <TrashIcon className="text-danger" 
                            style={{width:"30px", height:"30px"}}
                            onClick={(e)=>deleteCourse(e,course.id)}
                             /> 
                          </Col>
                        </Row>
                      </Col>
                    </Row>
                </Card>
                  )
                })}

                
              </>
            )}

            {activeTab === "assessments" && (
              <>
                {/* assessments tab content */}
                <Col className="user-btn mb-2">
                  <Button as={Link} to="/create-quiz"
                  > <PlusIcon style={{width:"20px", height:"20px"}} /> Create Quiz</Button>
                </Col>
                {/* mapping through quizzes */}
                { quizzes.map((quiz)=>{
                  return (
                    <Card className="courses-card mt-3 border border-2" key={quiz.id}>
                    <Row className="justify-content-between">
                      <Col md = {10}>
                        <CardTitle>{quiz.quizTitle}</CardTitle>
                        <CardText> Quiz Id: {quiz.quizId}</CardText>
                        <CardFooter> Quiz lesson Id: {quiz.lessonId}</CardFooter>
                      </Col>
                      {/* the second column */}
                      <Col md = {2}>
                        <Row className="justify-content-center">
                          <Col> 
                            <Link to = {`/edit-quiz/${quiz.quizId}`}>
                              <PencilSquareIcon className="text-success" 
                            style={{width:"30px", height:"30px"}} />
                            </Link>
                           </Col>
                          <Col> 
                            <TrashIcon className="text-danger" 
                            style={{width:"30px", height:"30px"}}
                            onClick={()=>deleteQuiz(quiz.quizId)}
                             /> 
                          </Col>
                        </Row>
                      </Col>
                    </Row>
                </Card>
                  )
                }) }

              </>
            )}
          </Col>
        </Row>
      </Container>
    </>
  );
}
