import React, { useState } from 'react'
import useFetchAll from '../../Hooks/useFetchAll'
import Rooms_card from '../Rooms_card';
function Room_all() {
    const [searchParams,setSearchParams] = useState('');
    const [allData,allLoaded] = useFetchAll();
   
    function checkData(hotel){
      if (hotel.name.includes(searchParams)){
        return hotel
      }
    }
  return (
    <div >
      <div class='flex justify-center gap-10 pt-10'>

     
   


      <div class='flex flex-col'>
     
      </div>
      </div>  
    {allLoaded?
<div style={{display:'flex',gap:20,justifyContent:'space-around',padding:60}}>


  <div class=''>

  </div>
{allData.data.hotels.map((hotel)=>{
    return(
        <Rooms_card heading={hotel.name} data={hotel}  price={hotel.price} rating={hotel.rating} link={hotel.photos} />
    )
})}


</div>
:<h1>Loading....</h1>}
   
    </div>
  )
}

export default Room_all