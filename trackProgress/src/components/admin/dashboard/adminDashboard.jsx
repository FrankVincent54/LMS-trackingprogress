
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
import "./admiDashboard.css";
import AllInstructors from "../../instructor/allInstructors/Instructors";
import AllStudents from "../../student/allStudents.jsx";


export default function AdminDashBoard() {
  // State to track active tab
  const [activeTab, setActiveTab] = useState("overview");

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
                <img src="" alt="shield icon" />
              </div>
              <div className="left">
                <Col>
                  <h2>Admin Dashboard</h2>
                  <p>Oversee the entire learning management system</p>
                </Col>
              </div>
            </Container>

            {/* hero section with card */}
            <Row className="p-2 text-center">
              {/* card one */}
              <Col>
                <Card className="p-2">
                  <CardTitle>Total Users</CardTitle>
                  <CardText>xxx</CardText>
                </Card>
              </Col>
              {/* card two */}
              <Col>
                <Card className="p-2">
                  <CardTitle>Courses</CardTitle>
                  <CardText>xxx</CardText>
                </Card>
              </Col>
              {/* card four */}
              <Col>
                <Card className="p-2">
                  <CardTitle>Completion</CardTitle>
                  <CardText>xxx</CardText>
                </Card>
              </Col>
              {/* card five */}
              <Col>
                <Card className="p-2">
                  <CardTitle>Avr Rating</CardTitle>
                  <CardText>xxx</CardText>
                </Card>
              </Col>
              {/* card six */}
              <Col>
                <Card className="p-2">
                  <CardTitle>Certificates</CardTitle>
                  <CardText>xxx</CardText>
                </Card>
              </Col>
              {/* card seven */}
              <Col>
                <Card className="p-2">
                  <CardTitle>Growth</CardTitle>
                  <CardText>xxx</CardText>
                </Card>
              </Col>
              {/* card eight */}
              <Col>
                <Card className="p-2">
                  <CardTitle>Uptime</CardTitle>
                  <CardText>xxx</CardText>
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
                  variant={activeTab === "overview" ? "primary" : "outline-primary"}
                  onClick={() => setActiveTab("overview")}
                >
                  Overview
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
                  variant={activeTab === "students" ? "primary" : "outline-primary"}
                  onClick={() => setActiveTab("students")}
                >
                  Students
                </Button>
              </Col>
            </Row>

            {/* tab content */}
            {activeTab === "overview" && (
              <>
                {/* user-growth-trends and course-enrollment cards */}
                <Row className="m-2 p-2">
                  <Col>
                    <Card className="p-2">
                      <CardTitle>User Growth Trends</CardTitle>
                      <CardImg src="#" alt="image" />
                    </Card>
                  </Col>
                  <Col>
                    <Card className="p-2">
                      <CardTitle>Course Enrollment vs Completion</CardTitle>
                      <CardImg src="#" alt="image" />
                    </Card>
                  </Col>
                </Row>

                {/* top-performing-instructors */}
                <Card className="m-1 p-1">
                  <CardTitle className="m-1 p-1">Top Performing Instructors</CardTitle>
                  <Col className="p-2">
                    <AllInstructors />
                  </Col>
                </Card>
              </>
            )}

            {activeTab === "courses" && (
              <>
                {/* courses tab content */}
                <div className="addCourse d-flex justify-content-between align-items-center">
                  <p>Course Performance Overview</p>
                  {/* <Button>Add Course</Button> */}
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

            {activeTab === "students" && (
              <>
                {/* users tab content */}
                <Col className="user-btn mb-2">
                  <Button>Add Student</Button>
                </Col>
                <AllStudents />
              </>
            )}
          </Col>
        </Row>
      </Container>
    </>
  );
}
