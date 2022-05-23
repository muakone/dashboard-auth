import React from 'react'
import Sidebar from '../layout/Sidebar'
import { CourseData } from '../components/DataBase'
import Courses from '../components/Courses'
import MobileSidebar from '../layout/MobileSidebar'

const Course = () => {
  return (
    <div className='courses'>
      <div className="navBar">
        <MobileSidebar className='smallNav' />
        <Sidebar className='desktopNav' />
      </div>
      <div className="coursesContainer">
        <h2>Our Courses</h2>
        <div className="courseRender">
          {CourseData.map((course, index) => (
            <Courses course={course} index={index} key={index} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Course