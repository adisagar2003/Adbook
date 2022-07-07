import React,{useRef} from 'react'
import "./Home.css";
import hotelLogo from './icons/alex-3.svg';
import {BiMenu} from 'react-icons/bi'
import Home_Title from './Home_Title';
import {Link} from 'react-router-dom'
function Home() {
    const navReference = useRef(null);
    const buttonReference = useRef(null);
    const toggleSidebar = ()=>{
       
        navReference.current.classList.add('active');
        console.log(navReference.current);

    }
  return (
    
    <div className='Home-layout'>
      <div  className='Home-layout__navbar'>
        <a class='Home-layout__navbar__logo'>
          <Link to="/">
        <img src={hotelLogo} alt="hotel Logo" width="70" height="70" />
        </Link>
        </a>
        <div className='Home-layout__navbar__side' >
      
            <a> Home</a>
           
     <a>   <Link to="/room_details">   Rooms</Link> </a>
            <a className='Home-layout__navbar__side__signIn'>Sign in</a>
    
        </div>
     
        <div className='Home-layout__hamburger-icon' onClick={toggleSidebar}>
<BiMenu />
        </div>
        
     

      </div>
      
<div className='Home-layout__sidebar' ref={navReference}>
<a>Home<button ref={buttonReference} class='Home-layout__sidebar__button' onClick={()=>navReference.current.classList.remove("active")}>X</button></a>
            <a>About</a>
            <a>Contact</a>
        </div>
<Home_Title />
    </div>
  )
}

export default Home
