import React from 'react'
import "./RoomsCard.css";
import {GiWaterPolo,GiWireframeGlobe,GiZigzagTune} from 'react-icons/gi';
import {BsWifi} from 'react-icons/bs'
import { ImStarEmpty } from "react-icons/im";
function Rooms_card(props) {
  return (
    <div class="Rooms__hotelCarousal__card">
                <div class='Rooms__hotelCarousal__card__image'>
                    <img src={props.link} height="150" width="280" />
                </div>

                <div class='Rooms__hotelCarousal__card__image'>
                    {props.heading}
                </div>
                <div class='Rooms__hotelCarousal__card__rating'>
                <ImStarEmpty onClick={()=>console.log('a')} /> {props.rating}
                </div> 
                
                <div class='Rooms__hotelCarousal__card__utilities'>
<GiWaterPolo />
<GiWireframeGlobe />
<GiZigzagTune />
<BsWifi />

                </div>
                <button className="Rooms__hotelCarousal__card__button" onClick={()=>console.log('booked')}>Book Now</button>
    </div>
  )
}

export default Rooms_card