import React from 'react'
import './HomeTitle.css'
function Home_Title() {
  return (
    <div className='Home_Title-layout'>
        
        
   <div className='Home_Title-layout__heading'>
    Find the Best Hotels Around
   </div>
          <div style={{display:"flex"}} >
   <div className='Home_Title-layout__searchHotels'>
    
<input placeholder='Search here now...'  />
<br>
</br>
<br>
</br>
<button>Find Hotels</button>
   </div>
        <div className="Home_Title__image">
     
      <img src='https://images.unsplash.com/photo-1578683010236-d716f9a3f461?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'  width="600" height="400"/>        </div>
      </div>
        </div>
  )
}

export default Home_Title