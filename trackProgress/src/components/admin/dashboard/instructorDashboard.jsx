
import React, { useState } from "react";
import {
  Button,
  Card,
  CardImg,
  CardText,
  CardTitle,
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
  PlusIcon,
  ShieldCheckIcon,
  Square3Stack3DIcon,
  TrophyIcon,
  UserGroupIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
import "./admiDashboard.css";
import { StarIcon } from "@heroicons/react/24/solid";



export default function InstructorDashBoard() {
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
                  <CardTitle className="m-1 p-1">Studenets Enrolled</CardTitle>
                  <Col className="p-2">
                    <table className="table">
                      <thead>
                        <tr>
                          <th scope="col">#</th>
                          <th scope="col">Student</th>
                          <th scope="col">Course</th>
                          <th scope="col">Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th scope="row">1</th>
                          <td>Mark</td>
                          <td>Otto</td>
                          <td>@mdo</td>
                        </tr>
                        <tr>
                          <th scope="row">2</th>
                          <td>Jacob</td>
                          <td>Thornton</td>
                          <td>@fat</td>
                        </tr>
                        <tr>
                          <th scope="row">3</th>
                          <td>Larry</td>
                          <td>the Bird</td>
                          <td>@twitter</td>
                        </tr>
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
                  <Button>Add Course</Button>
                </div>

                <Card className="courses-card mt-3">
                  <CardTitle>React Development Fundamentals</CardTitle>
                  <CardText>
                    Course Description: <br />
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea neque
                    repellendus cumque!
                  </CardText>
                </Card>
              </>
            )}

            {activeTab === "assessments" && (
              <>
                {/* assessments tab content */}
                <Col className="user-btn mb-2">
                  <Button> <PlusIcon style={{width:"20px", height:"20px"}} /> Create Quiz</Button>
                </Col>
                <Card className="m-2 p-2">
                    <CardTitle>Quiz Title</CardTitle>
                    <CardText>Quiz Description</CardText>
                </Card>

              </>
            )}
          </Col>
        </Row>
      </Container>
    </>
  );
}
