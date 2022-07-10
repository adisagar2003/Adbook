import React,{useState} from 'react'
import "./Room_Checkout.css"
import store from '../../store';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
function mapStateToProps(state){
return state;
}
function Room_Checkout(props) {
    const [logged,setLogged]= useState(store.getState().logged);



  return (
    <div class='flex justify-center'>
         <div class="h-screen w-screen md:lg:xl:w-1/2 bg-gray-3 00 flex flex-wrap justify-center content-center ">
           
 
             <div class="bg-white p-8 rounded-xl shadow-lg shadow-neutral-200 w-96">
           
                 <div class="flex justify-between mb-4">
                     <div>
                         <p class="text-lg font-semibold text-neutral-700">Checkout</p>
                         <p class="mt-0.5  text-neutral-400 text-sm">Adbook</p>
                     </div>
                     <div class="text-right">
                         <p class="text-lg font-semibold text-neutral-700">${props.price}</p>
                         <p class="mt-0.5  text-neutral-400 text-sm"></p>
                     </div>
                 </div>
            
                 <span class="text-orange-500   px-3 text-sm py-1.5 bg-red-50 rounded-lg font-semibold">Make sure to contact before booking</span>
 
 
                 <div class="flex items-center justify-between mt-5">
                     <div class="flex items-center">
                         <svg   class="h-5 w-5 stroke-gray-400 mr-2" fill="none"   viewBox="0 0 24 24" stroke="gray-400" stroke-width="2">
                             <path stroke-linecap="round" stroke-linejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                           </svg>  
                           <span class="text-neutral-400 text-sm">{Date.now()}</span>
                     </div>
                     <div class="flex items-center">
                         <span class="text-neutral-400 text-sm">0</span>
                     </div>
 
                 </div>
 {console.log(props,'These are my props')}
                 <div class="mt-5 border-t border-dashed space-y-4 py-4">
                   
                     <div class="flex justify-between group duration-150 cursor-pointer">
                         <div>
                             <p class="text-lg text-neutral-600 group-hover:text-red-600 duration-150">{props.name}</p>
                             <p class="text-sm text-neutral-400" >{props.location}</p>
                         </div>
                         <span class="text-lg text-neutral-600">1</span>
                     </div>
 
                
 
 
                 </div>
                 <div onClick={()=>console.log('hotel booked')} class="text-center cursor-pointer duration-150 hover:bg-neutral-200 py-0.5 bg-neutral-100 text-green-400 font-semibold rounded-lg mt-3">Book</div>
             </div>
 
         
     </div>
 
    
        </div>
  )
}

export default connect(mapStateToProps)(Room_Checkout)