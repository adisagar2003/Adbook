import React from 'react'
import "./Navbar.css";
import svgIcon from '../icons/alex-3.svg';
import {Link} from 'react-router-dom    '
import Rooms_card from '../Rooms_card';
function Navbar() {
  return (
   <div className='Navbar__body'>
    <div className='Navbar__body__logo'>
        <a ><img src={svgIcon} height={50} width={50}></img></a></div>
<div className='Navbar__body__side-items'>
<Link to='/' style={{ color: 'inherit', textDecoration: 'inherit'}}><a>Home</a></Link>

<Link to='/hotels' style={{ color: 'inherit', textDecoration: 'inherit'}}><a>Hotels</a></Link>
<a>SignIn</a>

</div>
   </div>
  )
}

export default Navbar