import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { loginAction } from "../store";
import {initializeApp} from 'firebase/app'
import {getAuth,GoogleAuthProvider} from 'firebase/auth'
import { signInWithPopup } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB3MSc0kR_hKLtkJfsCSlFjsPvx9vdnrg8",
  authDomain: "multiversesurvival.firebaseapp.com",
  projectId: "multiversesurvival",
  storageBucket: "multiversesurvival.appspot.com",
  messagingSenderId: "397656786109",
  appId: "1:397656786109:web:cb5552d0343535cdd223d4",
  measurementId: "G-EMV5S8C5SZ"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const provider = new GoogleAuthProvider()
export const Login = () => {
  
  const dispatch = useDispatch();
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [name, setName] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
        dispatch(loginAction.login(true))

    }
    const [currentForm, setCurrentForm] = useState('Login');

    const toggleForm = (formName) => {
      setCurrentForm(formName);
    }

    const handleGoogle = ()=>{
      // signInWithPopup(auth,provider)
    }
    return (
      <div className="flex h-[100vh]">
        <div className="auth-form-container">
            <h2 className="text-center">{currentForm}</h2>
            <form className="login-form text-black" onSubmit={handleSubmit}>
              {currentForm==='Register' && <div className="flex flex-col">
              <label htmlFor="name">Full name</label>
              <input value={name} name="name" onChange={(e) => setName(e.target.value)} id="name" placeholder="Full Name" />
              </div>
              }
                <label htmlFor="email">Email</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="youremail@gmail.com" id="email" name="email" />
                <label htmlFor="password">Password</label>
                <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" />
                <button type="submit">{currentForm==='Login'?'Log In':'Register'}</button>
            </form>
            <button className="link-btn" onClick={() =>{currentForm==='Login' ?toggleForm('Register'):toggleForm('Login')}}>{currentForm==='Login'?"Don't have an account? Register here.":"Already have an account? Login"}</button>
            <button className="link-btn" onClick={handleGoogle}>Sign in with google</button>
        </div>
      </div>
    )
}

export default Login