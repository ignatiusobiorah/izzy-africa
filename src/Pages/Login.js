import userIcon from "../images/user-icon.png";
import passwordIcon from "../images/password-icon.png";
import mailIcon from "../images/mail-icon.png";

import React, { useState } from 'react'

const Login = () => {

  const [action,setAction] = useState("Sign Up");

  return (
    <div className="login">
          <div className='login-container'>
        <div className='header'>
          <div className='text'>
            {action}
          </div>
          <div className='underline'></div>
        </div>

        <div className='inputs'>
          <div className='input'>
            <img src={userIcon} alt='user-icon' className="img-icons" />
            <input type='text' />
          </div>

          <div className='input'>
            <img src={mailIcon} alt='password-icon' className="img-icons" />
            <input type='email' />
          </div>

          <div className='input'>
            <img src={passwordIcon} alt='password-icon' className="img-icons" />
            <input type='password' />
          </div>
          <div className='forgot-password'>Forgot password</div>
          <div className='submit-container'>
            <div className={action==="Login"?"submit grey":"submit"} onClick={()=>{setAction("Sign Up")}}>Sign Up</div>
            <div className={action==="Sign Up"?"submit grey":"submit"} onClick={()=>{setAction("Login")}}>Login</div>
          </div>

        </div>
    </div>
    </div>

  )
}

export default Login;