import React from 'react'
import useFetchAll from '../../Hooks/useFetchAll'
import Rooms_card from '../Rooms_card';
function Room_all() {
    const [allData,allLoaded] = useFetchAll();
    console.log(allData)
  return (
    <div>
    {allLoaded?
<div style={{display:'flex',gap:20,justifyContent:'space-around',padding:60}}>
{allData.data.hotels.map((hotel)=>{
    return(
        <Rooms_card heading={hotel.name} data={hotel} rating={hotel.rating} link={hotel.photos} />
    )
})}


</div>
:<h1>Loading....</h1>}
   
    </div>
  )
}

export default Room_all