/* eslint-disable eqeqeq */
import React from 'react'
import { Link, useParams } from 'react-router-dom';
import { CourseData } from '../components/DataBase'
import Button from '../components/Button'
import Sidebar from '../layout/Sidebar';
import MobileSidebar from '../layout/MobileSidebar'

const SingleCourse = () => {
  const { id } = useParams();
  return (
    <div className='singleCourses'> 
      <div className="navBar">
        <MobileSidebar className='smallNav' />
        <Sidebar className='desktopNav' />
      </div>
      <section className='singleCourseContainer'>
        <div>
          <Link to='/courses' className='singleLink'>
            <Button Text={'Go Back'} styles={'singleCourseBack'} />
          </Link>
        </div>
        <div className='eachCourseContent'>
          {CourseData.filter(course => course.id == id).map((course, index) => (
            <div className="contentContainer" key={index}>
              <h2>Introduction to {course.name} </h2>
              <div className="content">
                <div>
                  <h4>Intro</h4>
                  <p>{course.details.intro}</p>
                </div>
                <div>
                  <h4>Our Branches:</h4>
                  <ul>
                    {course.details.branches.map((branches) => (
                      <li>{branches}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          )) }
        </div>
      </section>
    </div>
  )
}

export default SingleCourse