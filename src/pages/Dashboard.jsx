import React from 'react'
import Sidebar from '../layout/Sidebar'
import Sitting from '../images/undraw-home.svg'
import MobileSidebar from '../layout/MobileSidebar'


const Dashboard = () => {
  const name = localStorage.getItem("name")
  const email = localStorage.getItem("email")
  return (
    <div className='dashboard'>
      <div className="navBar">
        <MobileSidebar className='smallNav' />
        <Sidebar className='desktopNav' />
      </div>
      <section className='dashboardContainer'>
        <div className="dashboardContent">
          <div className="leftDashboard">
            <div className='welcomeUser'>
              <h2>Welcome</h2>
             <span className='userActive'>{name === '' ? email: name}</span>
            </div>
          </div>
          <div className="rightDashboard">
            <div className="imgBox">
              <img src={Sitting} alt="sitting" />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Dashboard