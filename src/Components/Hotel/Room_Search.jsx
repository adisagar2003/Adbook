import React ,{useEffect, useState} from 'react'
import axios from 'axios'
import {useParams} from 'react-router-dom';
import { useFetch } from '../../Hooks/useFetch';
import Rooms_card from '../Rooms_card';
function Room_Search() {
  
    const params = useParams();
    
      const [response,loaded] = useFetch(params.place);

   
   
  const Sample = ()=>{
    return (

      <h1>A</h1>
    )
  }
    const Hotels=()=>{
      return(
       <h1>Hotels</h1>
      )
      }
  return (
    <div>Room_Search {(params.place).toUpperCase().replace(/ /g,'')}
    <div style={{display:'flex',flexDirection:'column'}}>
      {loaded?

   
response.data.hotels.map((hotel)=>{
  return (  <Rooms_card heading={hotel.name} data={hotel}  price={hotel.price} rating={hotel.rating} link={hotel.photos} />)
})

    :<h1>Loading...</h1>}

    </div>
    </div>
    
  )
}

export default Room_Search