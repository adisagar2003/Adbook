import { useEffect, useState } from "react";
import axios from "axios";

export  const useFetch = (place)=>{
    const [response,setResponse] = useState({room:" null"});
    const [loaded,isLoaded] = useState(false);
    useEffect(()=>{
       
        axios.get(`https://adbook-server.herokuapp.com/room/place/${(place).toUpperCase().replace(/ /g,'')}`).then((response)=>{
        
            setResponse(response);
            isLoaded(true);
            
    
          }).catch((err)=>{
            setResponse(err)
          })
    },[])
 
    return [response,loaded]
}