import React, { useState } from 'react'
import login from "../assets/login.json";
import Lottie from "lottie-react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import './login/login.css'
import { Link } from 'react-router-dom';

export const Login = () => {
    // ====== react states =====
    const [showPassword, setShowPassword] =useState(false);

    // ====== functions =====
    
  return (
    <section className='login'>
        <div className="container">
            <div className="main">
                <div className="lotti">
                  <Lottie animationData={login} loop={true} />;
                </div>
                <form>
                    <h2>Welcome Back!</h2>
                    <lebel className='heading'>Email:</lebel><br/>
                    <input className='email' type="email" placeholder='Your Email' />
                    <lebel className='heading'>Password:</lebel><br/>
                    <div className="passDiv">
                        {
                            showPassword?
                            <FaEye onClick={() => setShowPassword(!showPassword)} className='icon' />
                            :
                            <FaEyeSlash onClick={() => setShowPassword(!showPassword)} className='icon' />
                        }
                        <input className='pass' type={showPassword? 'text' : 'password'} placeholder='Password' />
                    </div>
                    <Link className='flex justify-end' to='#'>Forget Password?</Link>
                    <button type='submit'>Login</button>
                    <h5>Don't have an account? <Link to='/register'><span>Register</span></Link></h5>
                </form>
            </div>
        </div>
    </section>
  )
}
