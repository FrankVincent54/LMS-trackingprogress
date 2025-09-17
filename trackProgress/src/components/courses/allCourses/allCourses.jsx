// import React, { useEffect, useState } from "react";
// import { courseClient } from "../../../utils/courses/coursesResponse/courseClient";
// import { Col, Container, Row } from "react-bootstrap";
// import { Link } from "react-router";

// export default function AllCourses () {

//     const [courses, setCourses] = useState([]);

//     useEffect(()=>{
//         allCourses()
//       },[])

//        function allCourses () {
//           courseClient.get("courses")
//           .then((res)=>{
//             setCourses(res.data)
//           })
//           .catch((error)=>{
//             console.log("Failed to fetch courses: "+error)
//           })
//         }

//          function deleteCourse (e, id) {
//             e.preventDefault();
//             courseClient.delete(`/courses/${id}`)
//             .then((id)=>{
//               allCourses();
//               console.log("Successfully deleted course with id: ",id)
//             })
//             .catch((error)=>{
//               console.log("Error deleting:",error)
//             })
//           }

//     return (
//         <div>
//             <Container fluid>
//                 <Row className="justify-content-center">
//                     <Col className="p-2">
//                         {courses.map((course)=>{
//                   return (
//                   <Card className="courses-card mt-3 border border-2" key={course.id}>
//                     <Row className="justify-content-between">
//                       <Col md = {10}>
//                         <CardTitle>{course.title}</CardTitle>
//                         <CardText>{course.description}</CardText>
//                         <CardText>{course.instructorId}</CardText>
//                       </Col>
//                       {/* the second column */}
//                       <Col md = {2}>
//                         <Row className="justify-content-center">
//                           <Col> 
//                             <Link to = {`/edit-course/${course.id}`}>
//                               <PencilSquareIcon className="text-success" 
//                             style={{width:"30px", height:"30px"}} />
//                             </Link>
//                            </Col>
//                           <Col> 
//                             <TrashIcon className="text-danger" 
//                             style={{width:"30px", height:"30px"}}
//                             onClick={(e)=>deleteCourse(e,course.id)}
//                              /> 
//                           </Col>
//                         </Row>
//                       </Col>
//                     </Row>
//                 </Card>
//                   )
//                 })}
//                     </Col>
//                 </Row>
//             </Container>
//         </div>
//     )
// }

import React, { useEffect, useState } from "react";
import { courseClient } from "../../../utils/courses/coursesResponse/courseClient";
import { Col, Container, Row, Card } from "react-bootstrap";
import { Link } from "react-router";
import { TrashIcon, PencilSquareIcon } from "@heroicons/react/24/outline"; 
import { CardTitle, CardText } from "react-bootstrap"; 

export default function AllCourses() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    allCourses();
  }, []);

  function allCourses() {
    courseClient
      .get("courses")
      .then((res) => {
        setCourses(res.data);
      })
      .catch((error) => {
        console.error("Failed to fetch courses:", error);
      });
  }

  function deleteCourse(e, id) {
    e.preventDefault();
    courseClient
      .delete(`courses/${id}`)
      .then(() => {
        allCourses();
        console.log("Successfully deleted course with id:", id);
      })
      .catch((error) => {
        console.error("Error deleting:", error);
      });
  }

  return (
    <Container fluid>
      <Row className="justify-content-center">
        <Col className="p-2">
          {courses.length === 0 ? (
            <p className="text-center mt-3">No courses found.</p>
          ) : (
            courses.map((course) => (
              <Card className="courses-card mt-3 border border-2" key={course.id}>
                <Row className="justify-content-between p-2">
                  <Col md={10}>
                    <CardTitle>{course.title}</CardTitle>
                    <CardText>{course.description}</CardText>
                    <CardText>
                      <strong>Instructor ID:</strong> {course.instructorId}
                    </CardText>
                  </Col>
                  <Col md={2}>
                    <Row className="justify-content-center">
                      <Col xs="auto">
                        <Link to={`/edit-course/${course.id}`}>
                          <PencilSquareIcon
                            className="text-success"
                            style={{ width: "24px", height: "24px", cursor: "pointer" }}
                          />
                        </Link>
                      </Col>
                      <Col xs="auto">
                        <TrashIcon
                          className="text-danger"
                          style={{ width: "24px", height: "24px", cursor: "pointer" }}
                          onClick={(e) => deleteCourse(e, course.id)}
                        />
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </Card>
            ))
          )}
        </Col>
      </Row>
    </Container>
  );
}
