import React, { useState } from 'react'
import "./Rooms.css"
import {BsFillArrowLeftCircleFill,BsFillArrowRightCircleFill} from 'react-icons/bs'
import Rooms_card from './Rooms_card';
function Rooms() {
    const [target,setTarget] = useState(0);
    
  return (
    <section >
    <div class="Rooms__header">
      CheckoutOurLatest
    </div>
<br></br>
    <div class='Rooms__hotelCarousal'>
        <div class="Rooms__hotelCarousal">
            <Rooms_card />
            <Rooms_card />
            <Rooms_card />
        </div>
    </div>
    </section>
  )
}

export default Rooms