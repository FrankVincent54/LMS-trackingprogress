// import { useState } from 'react'
import './App.css'
import { Routes, Route } from 'react-router';
import AdminDashBoard from './components/admin/dashboard/adminDashboard.jsx'
import InstructorDashboard from './components/admin/dashboard/instructorDashboard.jsx'
import StudentDashBoard from './components/admin/dashboard/studentDashboard.jsx'
import AddCourse from './components/courses/addCourse/addCourse.jsx'
import EditCourse from './components/courses/editCourse/editCourse.jsx';
import CreateStudent from './components/student/createStudent.jsx';
import EditStudent from './components/student/updateStudent.jsx';
import CreateQuiz from './components/quiz/createQuiz.jsx';
import EditQuiz from './components/quiz/updateQuiz.jsx';
import AllInstructors from './components/instructor/allInstructors/Instructors.jsx';
import CreateInstructor from './components/instructor/createInstructor/createInstructor.jsx';
import EditInstructor from './components/instructor/editInstructor/updateInstructor.jsx';


export default function App() {
  return (
    <>
   <Routes>
      <Route path="/teacher" element={<InstructorDashboard />} />
      <Route path="/admin" element={<AdminDashBoard />} />
      <Route path="/student" element={<StudentDashBoard />} />
      <Route path="/add-course" element={<AddCourse />} />
      <Route path="/edit-course/:id" element={<EditCourse />} />
      <Route path="/add-student" element={<CreateStudent /> } />
      <Route path="/edit-student/:id" element={<EditStudent /> } />
      <Route path="/create-quiz" element={<CreateQuiz />} />
      <Route path='/edit-quiz/:id' element={<EditQuiz />} />
      <Route path='/instructor' element={< AllInstructors />} />
      <Route path='/create-instructor' element={< CreateInstructor />} />
      <Route path='/edit-instructor/:id' element={< EditInstructor />} />
    </Routes>
    </>
  )
}