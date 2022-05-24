import React, { useRef, useState, useEffect } from 'react'
import { signInWithPopup, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';
import { auth, provider } from '../firebase';
import { useNavigate } from 'react-router-dom';
import StudentLogin from './StudentLogin';

const LoginFunctions = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false)
    const navigate = useNavigate();
    const emailRef = useRef();
    const passwordRef = useRef();

    useEffect(() => {
      setLoading(true);
      const unsubscribe = onAuthStateChanged(auth, (res) => {
        if (res) {
          setUser(res);
        } else {
          setUser(null);
        }
        setLoading(false);
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
          setLoading(true);
            createUserWithEmailAndPassword(auth, email, password)

            .then((res) => {
                console.log(res);
                navigate('/dashboard');
                const email = res.user.email;
                localStorage.setItem("email", email)
            })
              .catch((err) => console.log(err))
              .finally(() => setLoading(false))
          };

          const signUpWithEmail = (e) => {
            e.preventDefault();
            const email = emailRef.current.value;
            const password = passwordRef.current.value;
            if (email && password) signUpUser(email, password);  
          };
        /* SignIn User */
        const signInUser = (email, password) => {
          setLoading(true);
          signInWithEmailAndPassword(auth, email, password)

          .then((res) => {
              console.log(res);
              navigate('/dashboard');
              const email = res.user.email;
              localStorage.setItem("email", email)
          })
            .catch((err) => console.log(err))
            .finally(() => setLoading(false))
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
        <StudentLogin
         SignInWithGoogleFunc={(e) => SignInWithGoogleFunc(e)}
         signUpWithEmail={signUpWithEmail}
         signInWithEmail={signInWithEmail} 
         emailRef={emailRef} 
         passwordRef={passwordRef} 
         handleSignin={handleSignin}
         loading={loading} />
    </div>
  )
}

export default LoginFunctions