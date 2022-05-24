import React, { useState } from 'react'
import { FaUserAlt } from 'react-icons/fa'
import { GiPadlock } from 'react-icons/gi'
import { FcGoogle } from 'react-icons/fc'
import Button from './Button'

const StudentLogin = ({SignInWithGoogleFunc, signInWithEmail, signUpWithEmail, passwordRef, emailRef, loading}) => {
    
    const [index, setIndex] = useState(false);
    const toggleIndex = () => {
      setIndex((prevState) => !prevState);
    };
  return (
    <form className='studentForm'>
        <div className='email'>
            <input type="email" placeholder='Enter your email' ref={emailRef} />
            <i>
                <FaUserAlt className='formIcon' />
            </i>
        </div>
        <div className="password">
            <input type="password" placeholder='Enter your password' ref={passwordRef}  />
            <i>
                <GiPadlock className='formIcon' />
            </i>
        </div>
        <div className='formButton'>
            <div className='loginGoogle' onClick={(e) => SignInWithGoogleFunc(e)}>
                <Button Text={'Login with Google'} styles={'loginGoogleButton'} />
                <FcGoogle className='google' />
            </div>
            {
                index ? 
                <div>
                {
                    !loading ?
                    <div onClick={(e) => signInWithEmail(e)}>
                        <Button Text={'Login with password'} styles={'loginButton'}  />
                    </div>
                    :
                    <Button Text={'Please Wait ....'} styles={'loginButton'} />
                }
                    
                </div>
                :
                <div>
                {
                    !loading ?
                    <div onClick={(e) => signUpWithEmail(e)}>
                        <Button Text={'Signup with password'} styles={'loginButton'}  />
                    </div>
                    :
                    <Button Text={'Please Wait ....'} styles={'loginButton'} />
                }
                </div>
                    
            }
            <p onClick={toggleIndex} className='toggleLogin'>
                {index ? "New user? Click here " : "Already have an acount?"}
            </p>
            
        </div>
    </form>
  )
}

export default StudentLogin