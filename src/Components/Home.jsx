import React from 'react'
import "./Home.css";
import hotelLogo from './icons/alex-3.svg';
import {BiMenu} from 'react-icons/bi'
function Home() {
  return (
    <div className='Home-layout'>
      <div className='Home-layout__navbar'>
        <a class='Home-layout__navbar__logo'>
        <img src={hotelLogo} alt="hotel Logo" width="70" height="70" />

        </a>
        <div className='Home-layout__navbar__side'>
            <a>Home</a>
            <a>About</a>
            <a>Contact</a>
            <a className='Home-layout__navbar__side__signIn'>Sign in</a>
    
        </div>
        <div className='Home-layout__hamburger-icon' onClick={()=>console.log('hi')}>
<BiMenu />
        </div>
     

      </div>
      <div className='Home-layout__searchHotels'>

<h1></h1>
</div>
    </div>
  )
}

export default Home
