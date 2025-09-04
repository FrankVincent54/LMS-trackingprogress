// import { useState } from 'react'
import './App.css'
import AdminDashBoard from './components/admin/dashboard/adminDashboard.jsx'
import InstructorDashboard from './components/admin/dashboard/instructorDashboard.jsx'
import StudentDashBoard from './components/admin/dashboard/studentDashboard.jsx'


export default function App() {
  return (
    <>
      {/* <AdminDashBoard /> */}
      {/* <StudentDashBoard /> */}
      <InstructorDashboard />
    </>
  )
}