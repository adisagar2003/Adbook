import React, { useState } from 'react'
import "./SignIn.css"
import axios from 'axios';
import store from '../../store';
function SignIn() {
  //States
  const [username,setUsername] = useState('');
  const [password,setPassword] = useState('');

  //Login function
  const Login = () =>{
    setUsername('');
    setPassword('');
    axios.post("http://localhost:5000/user/login",{
      username:username,
      password:password
    }).then((res)=>{
      console.log(res);
      if (res.data !="Error"){
        document.cookie="access_token ="+res.data.token;
        store.dispatch({
          type:"LOGIN_SUCCESS",
          payload:{
            user:username,
            cookie:res.data.token
          }
         })
         console.log(store.getState())
  
      }
      else{
        store.dispatch({
          type:"LOGOUT_SUCCESS"
        })
        console.log(store.getState())
      }
   
    })
  }
  
  return (
    <div style={{padding:40}}>
      <div className='SignIn-layout'>
        <div className='SignIn-layout__image'>
<img src="https://images.unsplash.com/photo-1588097247274-a174dd59f20d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8ZGFyayUyMGdyZWVufGVufDB8fDB8fA%3D%3D&w=1000&q=80" width={400} height={400} />
        </div>

        <div className='SignIn-layout__form'>
      <h1 style={{textDecorationColor:"darkgreen"}}>Sign in </h1>
      <input value={username} placeholder='username' onChange={(e)=>setUsername(e.target.value)} />
      <input type="password" value={password} placeholder='password'  onChange={(e)=>setPassword(e.target.value)}/>
      <button onClick={Login} >Login</button>
        </div>
        </div>
    </div>
  )
}

export default SignIn
