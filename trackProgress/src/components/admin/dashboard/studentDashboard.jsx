// import "./studentDashBoard.css";
// import "./admiDashboard.css";
// import { AcademicCapIcon, BoltIcon, BookOpenIcon, CheckCircleIcon, CircleStackIcon, ClockIcon, PlusIcon, 
//     ShieldCheckIcon, 
//     Square3Stack3DIcon, TrophyIcon, UserIcon} from '@heroicons/react/24/outline';
// import {BoltSlashIcon} from '@heroicons/react/24/solid';
// import {Col, Container, NavbarBrand, NavLink, Row, Card, 
//     CardText, CardTitle,
//     CardBody,
//     ProgressBar,
//     Button} from "react-bootstrap";

// export default function StudentDashBoard () {
//     return (
//         <>
//         <Container fluid>
//             <Row>
//                 {/* the first column for navigation components */}
//                 <Col md = {2} className="navHeight">
//                     <NavbarBrand>
//                         <AcademicCapIcon style={{width:"30px", height:"30px"}} className="text-dark p-1" />LMS
//                     </NavbarBrand>
//                     <NavLink href="#">Home</NavLink>
//                     <NavLink href="#">My Profile</NavLink>
//                     <NavLink href="#">View Quiz</NavLink>
//                     <NavLink href="#">View Assignment</NavLink>
//                     <NavLink href="#">Lessons</NavLink>
//                 </Col>
//                 {/* the second column for displayin app UI */}
//                 <Col md = {10}>
//                     {/* header section */}
//                     <Container fluid className="my-hero m-1">
//                     <div className="right">
//                     <UserIcon style={{width:"70px", height:"70px"}} />
//                     </div>
//                     <div className="left">
//                     <Col>
//                     <h2>Student Dashboard</h2>
//                     <p>Oversee the entire learning management system</p>
//                     </Col>
//                     </div>
//                     </Container>

//                     {/* row -card section */}
//                     <Row className="p-2 text-center">
//                         {/* card one total courses */}
//                       <Col>
//                           <Card className="p-1">
//                             <CardTitle>Total Courses</CardTitle>
//                             <Container className="d-flex align-items-center justify-content-center">
//                                 <BookOpenIcon className="text-primary m-1" style={{width:"30px", height:"30px"}} />
//                                 <p className="mt-2">5</p>
//                             </Container>
//                         </Card>
//                       </Col>
//                         {/* card two completed  */}
//                         <Col>
//                             <Card className="p-1">
//                             <CardTitle>Completed</CardTitle>
//                             <Container className="d-flex align-items-center justify-content-center">
//                                 <TrophyIcon className="text-warning m-1" style={{width:"30px", height:"30px"}} />
//                                 <p className="mt-2">5</p>
//                             </Container>
//                             </Card>
//                         </Col>
//                         {/* card three study streak */}
//                          <Col>
//                             <Card className="p-1">
//                             <CardTitle>Study Streak</CardTitle>
//                             <Container className="d-flex align-items-center justify-content-center">
//                                 <Square3Stack3DIcon className="text-muted m-1" style={{width:"30px", height:"30px"}} />
//                                 <p className="mt-2">5</p>
//                             </Container>
//                             </Card>
//                         </Col>
//                         {/* card four study time */}
//                          <Col>
//                             <Card className="p-1">
//                             <CardTitle>Study Streak</CardTitle>
//                             <Container className="d-flex align-items-center justify-content-center">
//                                 <ClockIcon className="text-primary m-1" style={{width:"30px", height:"30px"}} />
//                                 <p className="mt-2">5</p>
//                             </Container>
//                             </Card>
//                         </Col>
//                     </Row>

//                     {/* overall learning progress */}
//                     <Card>
//                         <CardTitle className="p-1">Overall Learning Progress</CardTitle>
//                         <CardBody>
//                             <CardText>Overall Completion</CardText>
//                             <ProgressBar progress = {75}variant="success"/>
//                             <CardText>You're doing great! Keep up the momentum to reachyour learning goals.</CardText>
//                         </CardBody>
//                     </Card>

//                     {/* flex buttons for tab buttons */}
//                     <Row className="p-2 m-2 text-center my-flex">
//                         <Col> <Button> Courses</Button></Col>
//                         <Col> <Button> Activity</Button></Col>
//                         <Col> <Button> Achievements</Button></Col>
//                     </Row>

//                     {/* tab content for each tab button */}
//                     {/* tabb content for courses */}
//                     <Col>
//                         <div className="my-courses">
//                             <div className="rght-crs">
//                                 <p>My Courses</p>
//                             </div>
//                             <div className="lft-crs">
//                                 <Button> <PlusIcon style={{width:"20px", height:"20px"}} /> Enroll in Course</Button>
//                             </div>
//                         </div>

//                         {/* courses card */}
//                         <Card className="m-1 p-2">
//                             <CardTitle>React Development fundamentals</CardTitle>
//                             <CardText>Course DEscription</CardText>
//                         </Card>
//                     </Col>

//                     {/* tab content for activity */}
//                     <Card className="m-2 p-2">
//                         <CardTitle>Recent Activity</CardTitle>
//                         {/* card-one */}
//                         <Card className="m-2 p-1 activity-card">
//                             <Row className="muted text-left">
//                                 {/* icon column */}
//                                 <Col md = {1}>
//                                     <CheckCircleIcon className="text-success" style={{width:"30px", height: "30px"}} />
//                                 </Col>
//                                 {/* description column */}
//                                 <Col md = {8}>
//                                 <p style={{color:"gray"}}><strong>Completed Quiz 3</strong> in React Development</p>
//                                 <p style={{color:"lightgreen"}}>Score:95%</p>
//                                 </Col>
//                                 {/* time column */}
//                                 <Col md = {2}> <p style={{color:"gray"}}>2 hours ago</p></Col>
//                             </Row>
//                         </Card>
//                         {/* card two */}
//                          <Card className="m-2 p-1 activity-card">
//                             <Row className="muted text-left">
//                                 {/* icon column */}
//                                 <Col md = {1}>
//                                     <CheckCircleIcon className="text-success" style={{width:"30px", height: "30px"}} />
//                                 </Col>
//                                 {/* description column */}
//                                 <Col md = {8}>
//                                 <p style={{color:"gray"}}><strong>Completed Quiz 3</strong> in React Development</p>
//                                 <p style={{color:"lightgreen"}}>Score:95%</p>
//                                 </Col>
//                                 {/* time column */}
//                                 <Col md = {2}> <p style={{color:"gray"}}>2 hours ago</p></Col>
//                             </Row>
//                         </Card>
//                         {/* card three */}
//                          <Card className="m-2 p-1 activity-card">
//                             <Row className="muted text-left">
//                                 {/* icon column */}
//                                 <Col md = {1}>
//                                     <CheckCircleIcon className="text-success" style={{width:"30px", height: "30px"}} />
//                                 </Col>
//                                 {/* description column */}
//                                 <Col md = {8}>
//                                 <p style={{color:"gray"}}><strong>Completed Quiz 3</strong> in React Development</p>
//                                 <p style={{color:"lightgreen"}}>Score:95%</p>
//                                 </Col>
//                                 {/* time column */}
//                                 <Col md = {2}> <p style={{color:"gray"}}>2 hours ago</p></Col>
//                             </Row>
//                         </Card>
//                     </Card>

//                     {/* tab content for achievement */}
//                     <Card>
//                         <CardTitle>Badges & Achievements</CardTitle>
//                         <Row>
//                             {/* quick learner */}
//                             <Col>
//                                 <Card className="slv-card">
//                                     <BoltSlashIcon style={{width:"30px", height:"30px"}} className="text-danger icon-card" />
//                                     <CardText>Quick Learner</CardText>
//                                     <h6>Earned</h6>
//                                 </Card>
//                             </Col>
//                             {/* consistent */}
//                             <Col>
//                                 <Card className="slv-card">
//                                     <CircleStackIcon style={{width:"30px", height:"30px"}} className="text-muted icon-card" />
//                                     <CardText>Consistent</CardText>
//                                     <h6>Earned</h6>
//                                 </Card>
//                             </Col>
//                             {/* high achiever */}
//                             <Col>
//                                 <Card className="slv-card">
//                                     <TrophyIcon style={{width:"30px", height:"30px"}} className="text-danger icon-card" />
//                                     <CardText> High Achiever</CardText>
//                                     <h6>Earned</h6>
//                                 </Card>
//                             </Col>
//                             {/* Course completer */}
//                             <Col>
//                                 <Card className="slv-card">
//                                     <ShieldCheckIcon style={{width:"30px", height:"30px"}} className="text-success icon-card" />
//                                     <CardText>Quicl Learner</CardText>
//                                     <h6>Earned</h6>
//                                 </Card>
//                             </Col>
//                         </Row>
//                     </Card>



//                 </Col>
//             </Row>
//         </Container>
//         </>
//     )
// }


import React, { useState } from "react";
import "./studentDashBoard.css";
import "./admiDashboard.css";
import {
  AcademicCapIcon,
  BookOpenIcon,
  CheckCircleIcon,
  CircleStackIcon,
  ClockIcon,
  PlusIcon,
  ShieldCheckIcon,
  Square3Stack3DIcon,
  TrophyIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
import { BoltSlashIcon } from "@heroicons/react/24/solid";
import {
  Col,
  Container,
  NavbarBrand,
  NavLink,
  Row,
  Card,
  CardText,
  CardTitle,
  CardBody,
  ProgressBar,
  Button,
} from "react-bootstrap";
import AllCourses from "../../courses/allCourses/allCourses";

export default function StudentDashBoard() {
  const [activeTab, setActiveTab] = useState("courses");

  return (
    <Container fluid>
      <Row>
        {/* Sidebar */}
        <Col md={2} className="navHeight">
          <NavbarBrand>
            <AcademicCapIcon
              style={{ width: "30px", height: "30px" }}
              className="text-dark p-1"
            />
            LMS
          </NavbarBrand>
          <NavLink href="#">Home</NavLink>
          <NavLink href="#">My Profile</NavLink>
          <NavLink href="#">View Quiz</NavLink>
          <NavLink href="#">View Assignment</NavLink>
          <NavLink href="#">Lessons</NavLink>
        </Col>

        {/* Main Content */}
        <Col md={10}>
          {/* Header */}
          <Container fluid className="my-hero m-1">
            <div className="right">
              <UserIcon style={{ width: "70px", height: "70px" }} />
            </div>
            <div className="left">
              <Col>
                <h2>Student Dashboard</h2>
                <p>Oversee the entire learning management system</p>
              </Col>
            </div>
          </Container>

          {/* Cards Row */}
          <Row className="p-2 text-center">
            <Col>
              <Card className="p-1">
                <CardTitle>Total Courses</CardTitle>
                <Container className="d-flex align-items-center justify-content-center">
                  <BookOpenIcon
                    className="text-primary m-1"
                    style={{ width: "30px", height: "30px" }}
                  />
                  <p className="mt-2">5</p>
                </Container>
              </Card>
            </Col>

            <Col>
              <Card className="p-1">
                <CardTitle>Completed</CardTitle>
                <Container className="d-flex align-items-center justify-content-center">
                  <TrophyIcon
                    className="text-warning m-1"
                    style={{ width: "30px", height: "30px" }}
                  />
                  <p className="mt-2">5</p>
                </Container>
              </Card>
            </Col>

            <Col>
              <Card className="p-1">
                <CardTitle>Study Streak</CardTitle>
                <Container className="d-flex align-items-center justify-content-center">
                  <Square3Stack3DIcon
                    className="text-muted m-1"
                    style={{ width: "30px", height: "30px" }}
                  />
                  <p className="mt-2">5</p>
                </Container>
              </Card>
            </Col>

            <Col>
              <Card className="p-1">
                <CardTitle>Study Time</CardTitle>
                <Container className="d-flex align-items-center justify-content-center">
                  <ClockIcon
                    className="text-primary m-1"
                    style={{ width: "30px", height: "30px" }}
                  />
                  <p className="mt-2">5 hrs</p>
                </Container>
              </Card>
            </Col>
          </Row>

          {/* Progress Section */}
          <Card>
            <CardTitle className="p-1">Overall Learning Progress</CardTitle>
            <CardBody>
              <CardText>Overall Completion</CardText>
              <ProgressBar now={75} variant="success" label="75%" />
              <CardText>
                You're doing great! Keep up the momentum to reach your learning
                goals.
              </CardText>
            </CardBody>
          </Card>

          {/* Tab Buttons */}
          <Row className="p-2 m-2 text-center my-flex">
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
                variant={activeTab === "activity" ? "primary" : "outline-primary"}
                onClick={() => setActiveTab("activity")}
              >
                Activity
              </Button>
            </Col>
            <Col>
              <Button
                variant={activeTab === "achievements" ? "primary" : "outline-primary"}
                onClick={() => setActiveTab("achievements")}
              >
                Achievements
              </Button>
            </Col>
          </Row>

          {/* Tab Content */}
          {activeTab === "courses" && (
            <Col>
              <div className="my-courses d-flex justify-content-between align-items-center">
                <p className="fw-bold">My Courses</p>
                <Button>
                  <PlusIcon style={{ width: "20px", height: "20px" }} /> Enroll
                  in Course
                </Button>
              </div>
                <AllCourses />
            </Col>
          )}

          {activeTab === "activity" && (
            <Card className="m-2 p-2">
              <CardTitle>Recent Activity</CardTitle>
              {[1, 2, 3].map((item) => (
                <Card key={item} className="m-2 p-1 activity-card">
                  <Row className="text-left">
                    <Col md={1}>
                      <CheckCircleIcon
                        className="text-success"
                        style={{ width: "30px", height: "30px" }}
                      />
                    </Col>
                    <Col md={8}>
                      <p className="text-muted">
                        <strong>Completed Quiz 3</strong> in React Development
                      </p>
                      <p style={{ color: "lightgreen" }}>Score: 95%</p>
                    </Col>
                    <Col md={2}>
                      <p className="text-muted">2 hours ago</p>
                    </Col>
                  </Row>
                </Card>
              ))}
            </Card>
          )}

          {activeTab === "achievements" && (
            <Card>
              <CardTitle className="p-2">Badges & Achievements</CardTitle>
              <Row>
                <Col>
                  <Card className="slv-card text-center p-2">
                    <BoltSlashIcon
                      style={{ width: "30px", height: "30px" }}
                      className="text-danger icon-card"
                    />
                    <CardText>Quick Learner</CardText>
                    <h6>Earned</h6>
                  </Card>
                </Col>

                <Col>
                  <Card className="slv-card text-center p-2">
                    <CircleStackIcon
                      style={{ width: "30px", height: "30px" }}
                      className="text-muted icon-card"
                    />
                    <CardText>Consistent</CardText>
                    <h6>Earned</h6>
                  </Card>
                </Col>

                <Col>
                  <Card className="slv-card text-center p-2">
                    <TrophyIcon
                      style={{ width: "30px", height: "30px" }}
                      className="text-danger icon-card"
                    />
                    <CardText>High Achiever</CardText>
                    <h6>Earned</h6>
                  </Card>
                </Col>

                <Col>
                  <Card className="slv-card text-center p-2">
                    <ShieldCheckIcon
                      style={{ width: "30px", height: "30px" }}
                      className="text-success icon-card"
                    />
                    <CardText>Course Completer</CardText>
                    <h6>Earned</h6>
                  </Card>
                </Col>
              </Row>
            </Card>
          )}
          
        </Col>
      </Row>
    </Container>
  );
}
