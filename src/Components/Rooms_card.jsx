import React,{useRef} from 'react'
import "./RoomsCard.css";
import {GiWaterPolo,GiWireframeGlobe,GiZigzagTune} from 'react-icons/gi';
import {BsWifi} from 'react-icons/bs'
import { ImStarEmpty } from "react-icons/im";
import {Link} from 'react-router-dom';
import { useFetch } from '../Hooks/useFetch';
function Rooms_card(props) {
  const hotelContainer = useRef(null);

  return (
    <div class="Rooms__hotelCarousal__card" ref={hotelContainer}>
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
                <Link to="/roomDetails"><button  className="Rooms__hotelCarousal__card__button" onClick={(e)=>console.log(hotelContainer.current)}>Book Now</button></Link>
    </div>
  )
}

export default Rooms_card