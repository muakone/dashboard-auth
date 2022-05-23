import React, { useRef, useState } from 'react'
import { signInWithPopup, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';
import { auth, provider } from '../firebase';
import { useNavigate } from 'react-router-dom';
import StudentLogin from './StudentLogin';

const LoginFunctions = () => {
  const [user, setUser] = useState(null);
    const navigate = useNavigate();
    const emailRef = useRef();
    const passwordRef = useRef();

    useState(() => {
      const unsubscribe = onAuthStateChanged(auth, (res) => {
        if (res) {
          setUser(res);
        } else {
          setUser(null);
        }
      });
      return unsubscribe;
    }, []);

    
    const SignInWithGoogleFunc = (e) => {
        e.preventDefault();
        signInWithPopup(auth, provider)
            .then((res) => {
                console.log(res);
                navigate('/dashboard');
                const name = res.user.displayName;
                const email = res.user.email;
                const avatar = res.user.photoURL;
    
                localStorage.setItem("name", name)
                localStorage.setItem("email", email)
                localStorage.setItem("avatar", avatar)
            })
            .catch((error) => {
                console.log(error);
            });
        };
        /* SignUp Function */
        const signUpUser = (email, password) => {
            createUserWithEmailAndPassword(auth, email, password)

            .then((res) => {
                console.log(res);
                navigate('/dashboard');
                const email = res.user.email;
                const password = res.password;
                localStorage.setItem("email", email)
                localStorage.setItem("password", password)
            })
              .catch((err) => console.log(err))
          };

          const signUpWithEmail = (e) => {
            e.preventDefault();
            const email = emailRef.current.value;
            const password = passwordRef.current.value;
            if (email && password) signUpUser(email, password);  
          };
        /* SignIn User */
        const signInUser = (email, password) => {
          signInWithEmailAndPassword(auth, email, password)

          .then((res) => {
              console.log(res);
              navigate('/dashboard');
              const email = res.user.email;
              const password = res.password;
              localStorage.setItem("email", email)
              localStorage.setItem("password", password)
          })
            .catch((err) => console.log(err))
        };

        const signInWithEmail = (e) => {
          e.preventDefault();
          const email = emailRef.current.value;
          const password = passwordRef.current.value;
          if (email && password) signInUser(email, password);  
        };

        const handleSignin = (e) => {
          e.preventDefault();
          signUpWithEmail()
          signInWithEmail()
        }

  return (
    <div>
        <StudentLogin SignInWithGoogleFunc={(e) => SignInWithGoogleFunc(e)} signUpWithEmail={signUpWithEmail} signInWithEmail={signInWithEmail} emailRef={emailRef} passwordRef={passwordRef} handleSignin={handleSignin} />
    </div>
  )
}

export default LoginFunctions