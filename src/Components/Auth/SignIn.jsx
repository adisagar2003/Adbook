import React, { useState } from 'react'
import "./SignIn.css"
function SignIn() {
    const [username,setUsername] = useState('');

    const [password,setPassword] = useState('');

    const Submit = () =>{
        
    }
  return (
    <div className='SignIn-layout'>
      <div className='SignIn-layout__heading'>

      </div>
      <div className='SignIn-layout__form'>
<input placeholder='Username' onChange={(e)=>{setUsername(e.target.value)}} />
<input placeholder='Password' onChange={(e)=>{setPassword(e.target.value)}} />
<button onClick={()=>console.log('Submit')}>Login</button>
      </div>
<div class='SignIn-layout__footer'>
   <span>Need help? <a>Contact us</a></span> 
    <a>Forgot password?</a>
    <span style={{fontSize:12,textDecorationColor:"gray"}}>A property of Ad technologies</span>
</div>
    </div>
  )
}

export default SignIn
