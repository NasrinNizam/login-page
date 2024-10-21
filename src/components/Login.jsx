import React, { useState } from 'react'
import login from "../assets/login.json";
import Lottie from "lottie-react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import './login/login.css'
import { Link, useNavigate } from 'react-router-dom';
import { Bounce, ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

export const Login = () => {
    // ====== react states =====
    const [showPassword, setShowPassword] =useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const navigate = useNavigate();

    // ====== functions =====
    const handleEamil=(e)=>{
        setEmail(e.target.value)
        setEmailError('')
    }
    const handlePassword=(e)=>{
        setPassword(e.target.value)
        setPasswordError('')
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        if(!email){
            setEmailError('Please enter email')
        }
        else if(!password){
            setPasswordError('Please enter password')
        }
       else{
        navigate('/')
        toast.success('login successful!', {
            position: "top-left",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            transition: Bounce,
            });
       }
    }
    
  return (
    <section className='login'>
        <div className="container">
            <div className="main">
                <div className="lotti">
                  <Lottie animationData={login} loop={true} />;
                </div>
                <form onSubmit={handleSubmit}>
                    <h2>Welcome Back!</h2>
                    <lebel className='heading'>Email:</lebel><br/>
                    <input onChange={handleEamil} type="email" placeholder='Your Email' />
                    <p  className='err email'>{emailError} </p>
                    <lebel className='heading'>Password:</lebel><br/>
                    <div className="passDiv">
                        {
                            showPassword?
                            <FaEye onClick={() => setShowPassword(!showPassword)} className='icon' />
                            :
                            <FaEyeSlash onClick={() => setShowPassword(!showPassword)} className='icon' />
                        }
                        <input onChange={handlePassword} className='pass' type={showPassword? 'text' : 'password'} placeholder='Password' />
                    </div>
                    <p className='err'>{passwordError} </p>
                    <Link className='flex justify-end' to='#'>Forget Password?</Link>
                    <button type='submit'>Login</button>
                    <h5>Don't have an account? <Link to='/register'><span>Register</span></Link></h5>
                </form>
            </div>
        </div>
    </section>
  )
}
