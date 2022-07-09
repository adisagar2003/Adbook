import React,{useRef} from 'react'
import "./RoomsCard.css";
import {GiWaterPolo,GiWireframeGlobe,GiZigzagTune} from 'react-icons/gi';
import {BsWifi} from 'react-icons/bs'
import { ImStarEmpty } from "react-icons/im";
import {Link} from 'react-router-dom';
import { useFetch } from '../Hooks/useFetch';
import {useNavigate} from 'react-router-dom';
function Rooms_card(props) {
  const hotelContainer = useRef(null);
  let navigate = useNavigate();

  return (
   
      <div class="flex h-screen items-center justify-center shadow-xl px-4" ref={hotelContainer}>
  <div class="max-w-sm overflow-hidden rounded-xl bg-white shadow-md duration-200 hover:scale-105 hover:shadow-xl">
    <img src={props.link} alt="Hotel room" class="h-auto w-full" />
    <div class="p-5">
   
    <p class="text-medium mb-5 text-gray-700">  {props.heading}</p>
    <p class="text-medium mb-5 text-green-500"> ${props.price}</p>
      <button class="w-full rounded-md bg-indigo-600  py-2 text-indigo-100  hover:bg-indigo-500 hover:shadow-md duration-75"  onClick={(e)=>navigate(`/room/${props.data._id}`)}>Book now</button>
    </div>
  </div>
</div>
               
  )
}

export default Rooms_card