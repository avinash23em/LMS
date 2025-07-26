import React from 'react'

import {Route,Routes} from 'react-router-dom'
import Home from './pages/student/home.jsx'
import Coursedetails from './pages/student/coursedetails.jsx'
import CourseList from './pages/student/CourseList.jsx'
import Enroll from './pages/student/enrollements.jsx'
import Player from './pages/student/player.jsx'
import Educator from './pages/educator/educator.jsx'
import Dashboard from './pages/educator/dashboard.jsx'
import Mycourses from './pages/educator/mycourses.jsx'
import Addcourse from './pages/educator/Addcourse.jsx'
import Studentenroll from './pages/educator/studentenrolled.jsx'



function App() {
  

  return (
   <div>
  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/course-list' element={<Coursedetails/>}/>
    <Route path='/course-list/:id' element={<Coursedetails/>}/>
    <Route path='/course/:id' element={<CourseList/>}/>
    <Route path='/my-enrollements' element={<Enroll/>}/>
    <Route path='/player/:courseId' element={<Player/>}/>
    <Route path='/educator' element={<Educator/>}>
      <Route path='educator' element={<Dashboard/>}/>
      <Route path='add-course' element={<Addcourse/>}/>
      <Route path='my-courses' element={<Mycourses/>}/>
      <Route path='student-enrolled' element={<Studentenroll/>}/>
    </Route>
  </Routes>
   </div>
      
  )
}

export default App
