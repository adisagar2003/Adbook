import React,{useState} from 'react'
import axios from "axios";

function Room_Details(props) {
    const [response,setResponse]= useState({})
   const  fetchShow =async () =>{
   await axios.get("http://localhost:5000/").then((res)=>{
        console.log(res.data);
        setResponse(res);
        return (
            <div>
            a
            </div>
        )
       
        
    }).catch((err)=>{
setResponse({
    err:err
})
    })
   }
    

  return (
    <div>
<div class='Room_Details-layout'>

</div>


    </div>
  )
}

export default Room_Details