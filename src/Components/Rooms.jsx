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
            <Rooms_card link="https://images.unsplash.com/photo-1611892440504-42a792e24d32?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" heading="Dana, Bali" />
            <Rooms_card link="https://images.unsplash.com/photo-1568084680786-a84f91d1153c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" heading="Nguyen, Vietnam" />
            <Rooms_card link="https://images.unsplash.com/photo-1578683010236-d716f9a3f461?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" heading="Apex, CA, USA" />
        </div>
    </div>
    </section>
  )
}

export default Rooms