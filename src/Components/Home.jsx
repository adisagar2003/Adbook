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
    <h1 class="xl:text-5xl md:text-4xl text-2xl font-semibold leading-tight text-center text-gray-400 sm:mb-0 mb-12">
            AdBook<br class="md:block hidden" />
         <span class="text-xl text-slate-300">The best app to book hotels</span>
        </h1>
        <div class="md:mt-14 mt-4 relative sm:flex items-center justify-center">
            <img src="https://i.ibb.co/KjrPCyW/map.png" alt="world map image" class="sepia text-white w-full xl:h-full h-96 object-cover object-fill sm:block hidden" />
            <img src="https://i.ibb.co/SXKj9Mf/map-bg.png" alt="mobile-image" class="sepia text-white sm:hidden -mt-10 block w-full h-96 object-cover object-fill absolute z-0" />

            <div class="shadow-lg xl:p-6 p-4 sm:w-auto w-full bg-white sm:absolute relative z-20 sm:mt-0 mt-4 left-0 xl:ml-56 sm:ml-12 xl:-mt-40 sm:-mt-12">
                <p class="text-3xl font-semibold text-gray-800">20K+</p>
                <p class="text-base leading-4 xl:mt-4 mt-2 text-gray-600">Recently Property Listed</p>
            </div>
            <div class="shadow-lg xl:p-6 p-4 w-48 sm:w-auto w-full bg-white sm:absolute relative z-20 sm:mt-0 mt-4 xl:mt-80 sm:mt-56 xl:-ml-0 sm:-ml-12">
                <p class="text-3xl font-semibold text-gray-800">8K+</p>
                <p class="text-base leading-4 xl:mt-4 mt-2 text-gray-600">Active Listening</p>
            </div>
            <div class="shadow-lg xl:p-6 p-4 sm:w-auto w-full bg-white sm:absolute relative z-20 md:mt-0 sm:-mt-5 mt-4 right-0 xl:mr-56 sm:mr-24">
                <p class="text-3xl font-semibold text-gray-800">15K+</p>
                <p class="text-base leading-4 xl:mt-4 mt-2 text-gray-600">Recently Booked Hotels</p>
            </div>
      
        </div>
<Home_Title />
    </div>
  )
}

export default Home
