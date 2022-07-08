import React, { useState } from 'react'
import axios from 'axios';
import './HomeTitle.css';
import { useNavigate } from 'react-router-dom';
function Home_Title() {
  const history = useNavigate();
  const [places,setPlaces]= useState('');
  const [loading,setLoading] = useState(true);  

  return (
    <div className='Home_Title-layout'>
        
        
   <div className='Home_Title-layout__heading'>
    Find the Best Hotels Around
   </div>
          <div style={{display:"flex"}} >
   <div className='Home_Title-layout__searchHotels'>
    
<input placeholder='Search here now...' onChange={(e)=>setPlaces(e.target.value)} />
<br>
</br>
<br>
</br>
<button onClick={()=>history(`/place/${places}`)}>Find Hotels</button>
   </div>
      
      </div>
        </div>
  )
}

export default Home_Title