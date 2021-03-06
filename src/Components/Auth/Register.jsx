import React, { useState } from 'react'
import "./SignIn.css"
import axios from 'axios';
import store from '../../store';
import {Link} from 'react-router-dom'
import {connect} from 'react-redux';
function mapStateToProps(state){
  return state
}
function SignIn() {

/*
     <input value={username} placeholder='username' onChange={(e)=>setUsername(e.target.value)} />
      <input type="password" value={password} placeholder='password'  onChange={(e)=>setPassword(e.target.value)}/>
      <button onClick={Login} >Login</button>
*/ 
  //States
  const [username,setUsername] = useState('');
  const [password,setPassword] = useState('');
  const [email,setEmail] = useState('');
  const [confirmPassword,setConfirmPassword] = useState('');
  const [success,setSuccess] = useState(false);
  const [error,setError] = useState(false);
//Register function 
const Register = ()=>{
   if (password==confirmPassword){
    const newUser = {
        username:username,
        password:password,
        email:email
    }
    axios.post('http://localhost:5000/user/register',newUser).then((res)=>{

    if (res.data.dataTransfer=='failed'){
setError(true)
    }
else{
    setError(false);
    setSuccess(true);
}

console.log(res);
    })
   }
}
  //Login function
  const Login = (props) =>{
 
    console.log(props,'this is props')
 
    axios.post("https://adbook-server.herokuapp.com/user/login",{
      username:username,
      password:password
    }).then((res)=>{
      console.log(res);
      if (res.data !="Error"){
        document.cookie="access_token ="+res.data.token;
        store.dispatch({
          type:"LOGIN_SUCCESS",
          payload:{
            user:res.data,
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
    <div>
     
{store.getState().logged?
<div>
<div class="container mx-auto my-60">
        <div>

            <div class="bg-white relative shadow rounded-lg w-5/6 md:w-4/6  lg:w-3/6 xl:w-2/6 mx-auto">
                <div class="flex justify-center">
                        <img src={`https://robohash.org/${Math.random()*1000}`} alt="" class="rounded-full mx-auto absolute -top-20 w-32 h-32 shadow-md border-4 bg-white  border-white transition duration-200 transform hover:scale-110" />
                </div>
                
                <div class="mt-16">
                    <h1 class="font-bold text-center text-3xl text-gray-900">{store.getState().user.user.username}</h1>
                    <p class="text-center text-sm text-gray-400 font-medium">Customer</p>
                    <p>
                        <span>
                            
                        </span>
                    </p>
                    <div class="my-5 px-6">
                <Link to='/hotels'>       <a href="#" class="text-gray-200 block rounded-lg text-center font-medium leading-6 px-6 py-3 bg-gray-900 hover:bg-black hover:text-white">Back to <span class="font-bold">Hotels</span></a></Link> 
                    </div>
                    <div class="flex justify-between items-center my-5 px-6">
                        <a href="" class="text-gray-500 hover:text-gray-900 hover:bg-gray-100 rounded transition duration-150 ease-in font-medium text-sm text-center w-full py-3">{store.getState().user.user.email}</a>

                    </div>

                    <div class="w-full">
                        <h3 class="font-medium text-gray-900 text-left px-6">Hotels Booked</h3>
                        <div class="mt-5 w-full flex flex-col items-center overflow-hidden text-sm">
                            <a href="#" class="w-full border-t border-gray-100 text-gray-600 py-4 pl-6 pr-3 w-full block hover:bg-gray-100 transition duration-150">
                                <img src={`https://avatars.dicebear.com/api/micah/${Math.random()*1000}.svg`} alt="" class="rounded-full h-6 shadow-md inline-block mr-2" />
                                    Updated his status
                                    <span class="text-gray-500 text-xs">24 min ago</span>
                            </a>

                            <a href="#" class="w-full border-t border-gray-100 text-gray-600 py-4 pl-6 pr-3 w-full block hover:bg-gray-100 transition duration-150">
                                <img src="https://avatars0.githubusercontent.com/u/35900628?v=4" alt="" class="rounded-full h-6 shadow-md inline-block mr-2" />
                                    Added new profile picture
                                    <span class="text-gray-500 text-xs">42 min ago</span>
                            </a>

                            <a href="#" class="w-full border-t border-gray-100 text-gray-600 py-4 pl-6 pr-3 w-full block hover:bg-gray-100 transition duration-150">
                                <img src="https://avatars0.githubusercontent.com/u/35900628?v=4" alt="" class="rounded-full h-6 shadow-md inline-block mr-2" />
                                Posted new article in <span class="font-bold">#Web Dev</span>
                                <span class="text-gray-500 text-xs">49 min ago</span>
                            </a>

                            <a href="#" class="w-full border-t border-gray-100 text-gray-600 py-4 pl-6 pr-3 w-full block hover:bg-gray-100 transition duration-150">
                                <img src="https://avatars0.githubusercontent.com/u/35900628?v=4" alt="" class="rounded-full h-6 shadow-md inline-block mr-2" />
                                Edited website settings
                                <span class="text-gray-500 text-xs">1 day ago</span>
                            </a>

                            <a href="#" class="w-full border-t border-gray-100 text-gray-600 py-4 pl-6 pr-3 w-full block hover:bg-gray-100 transition duration-150 overflow-hidden">
                                <img src="https://avatars0.githubusercontent.com/u/35900628?v=4" alt="" class="rounded-full h-6 shadow-md inline-block mr-2" />
                                Added new rank
                                <span class="text-gray-500 text-xs">5 days ago</span>
                            </a>
                            
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>  
  
</div>:  <div class='p-2'>
  <div>


<div class="h-screen flex">
        <div class="hidden lg:flex w-full lg:w-1/2 login_img_section
        justify-around items-center">
          <div 
                class=" 
                bg-black 
               
                inset-0 
            
                z-0"
               
                >

                </div>
          <div class="w-full mx-auto px-20 flex-col items-center space-y-6">
            <h1 class="text-white font-bold text-4xl font-sans">Register </h1>
           
            <div class="flex justify-center lg:justify-start mt-6">
                <a href="#" class="hover:bg-indigo-700 hover:text-white hover:-translate-y-1 transition-all duration-500 bg-white text-indigo-800 mt-4 px-4 py-2 rounded-2xl font-bold mb-2">Back to Home</a>
            </div>
          </div>
        </div>
        <div class="flex w-full lg:w-1/2 justify-center items-center bg-white space-y-8">
          <div class="w-full px-8 md:px-32 lg:px-24">
            {success?<div class="flex bg-green-100 rounded-lg p-4 mb-4 text-sm text-green-700" role="alert">
        <svg class="w-5 h-5 inline mr-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>
        <div>
            <span class="font-medium"> Alert!</span> User is registered now
        </div>
    </div>:<a></a>}
    {error?<div class="flex bg-red-100 rounded-lg p-4 mb-4 text-sm text-red-700" role="alert">
        <svg class="w-5 h-5 inline mr-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>
        <div>
            <span class="font-medium"> Alert!</span> User is not registered...Try again
        </div>
    </div>:<a></a>}
          <div class="bg-white rounded-md shadow-2xl p-5">
            <h1 class="text-gray-800 font-bold text-2xl mb-1">Register</h1>
            <p class="text-sm font-normal text-gray-600 mb-8"></p>
            <div class="flex items-center border-2 mb-8 py-2 px-3 rounded-2xl">
           
              <input id="text" type="text" value={username} placeholder='Username' onChange={(e)=>setUsername(e.target.value)} class=" pl-2 w-full outline-none border-none" name="email"  />
            </div>
            <div class="flex items-center border-2 mb-8 py-2 px-3 rounded-2xl">
           
           <input id="text" type="text" value={email} placeholder='Email' onChange={(e)=>setEmail(e.target.value)} class=" pl-2 w-full outline-none border-none" name="email"  />
         </div>
            <div class="flex items-center border-2 mb-12 py-2 px-3 rounded-2xl ">
             
              <input class="pl-2 w-full outline-none border-none" type="password" value={password} placeholder='Password'  onChange={(e)=>setPassword(e.target.value)} />
              
            </div>
            <div class="flex items-center border-2 mb-12 py-2 px-3 rounded-2xl ">
             
             <input class="pl-2 w-full outline-none border-none" type="password" value={confirmPassword} placeholder='Confirm Password'  onChange={(e)=>setConfirmPassword(e.target.value)} />
             
           </div>
           
            <button  onClick={Register} class="block w-full bg-indigo-600 mt-5 py-2 rounded-2xl hover:bg-indigo-700 hover:-translate-y-1 transition-all duration-500 text-white font-semibold mb-2">Register</button>
            <div class="flex justify-between mt-4">
           <Link to='/'>   <span class="text-sm ml-2 hover:text-blue-500 cursor-pointer hover:-translate-y-1 duration-500 transition-all">Back to home</span></Link>

              <a href="#" class="text-sm ml-2 hover:text-blue-500 cursor-pointer hover:-translate-y-1 duration-500 transition-all">Login with an existing account</a>
            </div>
            
          </div>
          </div>
          
        </div>
    </div>
  </div>
</div>}
</div>
  )
}

export default connect(mapStateToProps)(SignIn)
