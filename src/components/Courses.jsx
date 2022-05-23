import React from 'react'
import { Link } from 'react-router-dom'

const Courses = ({course, index}) => {
  return (
    <Link to={`/courses/${course.id}`} key={index} className='courseLink'>
        <div className='eachCourse' key={index}>
            <h5>{course.name}</h5>
        </div>
    </Link>
  )
}

export default Courses