import React from 'react'
import LandingNav from '../components/LandingNav'

const LandingPage = () => {
  return (
    <div className='landingPage'>
      <div className="landingNavSection">
        <LandingNav />
      </div>
      <main className='landingMain'>
        <div className="landingMainContent">
          <h1><span className='landingLearn'>Learn</span> on your class <span className='landingSchedule'>schedule</span> </h1>
        </div>
      </main>
    </div>
  )
}

export default LandingPage