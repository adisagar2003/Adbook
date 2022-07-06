import React from 'react'
import "./SignIn.css"
function SignIn() {
  return (
    <div>
      <div className='SignIn-layout'>
        <div className='SignIn-layout__image'>
<img src="https://images.unsplash.com/photo-1588097247274-a174dd59f20d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8ZGFyayUyMGdyZWVufGVufDB8fDB8fA%3D%3D&w=1000&q=80" width={400} height={400} />
        </div>

        <div className='SignIn-layout__form'>
      <h1 style={{textDecorationColor:"darkgreen"}}>Sign in </h1>
      <input placeholder='username' />
      <input placeholder='password' />
      <button>Login</button>
        </div>
        </div>
    </div>
  )
}

export default SignIn
