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
    
<Home_Title />
    </div>
  )
}

export default Home
