import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../images/logo.png'
import Button from './Button'

const LandingNav = () => {
  return (
    <nav className='landingNav'>
        <div className="leftNav">
          <div className="leftNavContent">
            <img src={Logo} alt="logo" />
            <h1 className='navLogoName'>KodeCamp</h1>
          </div>
        </div>
        <div className="rightNav">
            <Link to='/login' className='rightNavLink'>
                <Button Text={'Login'} styles={'landingButton'} />
            </Link>
        </div>
      </nav>
  )
}

export default LandingNav