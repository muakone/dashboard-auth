import React from 'react'
import Sidebar from '../layout/Sidebar'
import MobileSidebar from '../layout/MobileSidebar'

const Profile = () => {
  const name = localStorage.getItem("name")
  const email = localStorage.getItem("email")
  const avatar = localStorage.getItem("avatar")

  return (
    <div className='profile'>
      <div className="navBar">
        <MobileSidebar className='smallNav' />
        <Sidebar className='desktopNav' />
      </div>
      <div className="profileContainer">
        <h2>Profile Setting</h2>
        <p>Personal Details</p>
        {
          name === ''
           ? 
           <div className='profileContent'>
             <div className="profileDetails">
              <div className="profileNameEmail">
                  <span>Email</span>
                  <h5>{email}</h5>
                </div>
             </div>
             
           </div>
            :
          <div className="profileContent">
            <div className="avatar">
              <img src={avatar} alt="avatar" />
            </div>
            <section className="profileDetails">
              <div className="profileNameEmail">
                <span>Full Name</span>
                <h5>{name}</h5>
              </div>
              <div className="profileNameEmail">
                <span>Email</span>
                <h5>{email}</h5>
              </div>
            </section>
        </div>
        }
        
      </div>
    </div>
  )
}

export default Profile