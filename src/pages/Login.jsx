import React from 'react'
import StudentLogin from '../components/StudentLogin'
import Logo  from '../images/logo.png'
import { BsXLg } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import VectorLogin from '../images/login.png'
import LoginFunctions from '../components/LoginFunctions'

const Login = () => {
  return (
    <div className='Login'>
      <div className="loginSection">
        <Link to='/' className='loginCancel'>
          <BsXLg className='cancel' />
        </Link>
        <section className="loginFormSection">
          <div className="lefttLogin">
            <h3>Student Login </h3>
            <img src={VectorLogin} alt="vector login" />
          </div>
          <div className="rightLogin">
            <div className="logo">
              <img src={Logo} alt="logo" />
            </div>
            <div className="studentLogin">
              <LoginFunctions />
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Login