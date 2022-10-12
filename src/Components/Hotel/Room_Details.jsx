import React from 'react'
import { useParams } from 'react-router-dom'
import useFindHotelById from '../../Hooks/useFindHotelById';
import Room_Checkout from './Room_Checkout';
function Room_Details() {
    const params = useParams();
    const [hotel,loaded] = useFindHotelById(params.id);
  return (
    <div>
      Okay {params.id}
        {loaded ?. <Room_Checkout name={hotel.data.hotels[0].name} price={hotel.data.hotels[0].price} photos={hotel.data.hotels[0].photos}  />:<h1>Loading....</h1>}
        
   

    </div>
  )
}

export default Room_Details
